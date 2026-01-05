// script.js

// DOM Elements
let currentDateElement, dailyPromptElement, promptToolElement, promptCategoryElement, promptTipsElement;
let recentPromptsContainer, trendingPromptsList, aiToolsContainer, calendarDaysContainer;
let copyPromptButton, regenerateButton, copyToast, submitPromptLink, contactLink;
let submitPromptModal, closeModalButton, promptSubmissionForm;
let prevMonthButton, nextMonthButton, currentMonthYearElement;

// Current date
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    initializeDOMElements();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize the site
    initializeSite();
    
    // Set current year in footer
    document.getElementById('current-year').textContent = currentYear;
});

function initializeDOMElements() {
    currentDateElement = document.getElementById('current-date');
    dailyPromptElement = document.getElementById('daily-prompt');
    promptToolElement = document.getElementById('prompt-tool');
    promptCategoryElement = document.getElementById('prompt-category');
    promptTipsElement = document.getElementById('prompt-tips');
    
    recentPromptsContainer = document.getElementById('recent-prompts-container');
    trendingPromptsList = document.getElementById('trending-prompts');
    aiToolsContainer = document.getElementById('ai-tools-container');
    calendarDaysContainer = document.getElementById('calendar-days');
    
    copyPromptButton = document.getElementById('copy-prompt-btn');
    regenerateButton = document.getElementById('regenerate-btn');
    copyToast = document.getElementById('copy-toast');
    
    submitPromptLink = document.getElementById('submit-prompt-link');
    contactLink = document.getElementById('contact-link');
    
    submitPromptModal = document.getElementById('submit-prompt-modal');
    closeModalButton = document.querySelector('.close-modal');
    promptSubmissionForm = document.getElementById('prompt-submission-form');
    
    prevMonthButton = document.getElementById('prev-month');
    nextMonthButton = document.getElementById('next-month');
    currentMonthYearElement = document.getElementById('current-month-year');
}

function setupEventListeners() {
    // Copy prompt button
    copyPromptButton.addEventListener('click', copyPromptToClipboard);
    
    // Regenerate button (gets a random prompt from the list)
    regenerateButton.addEventListener('click', getRandomPrompt);
    
    // Modal controls
    submitPromptLink.addEventListener('click', function(e) {
        e.preventDefault();
        submitPromptModal.style.display = 'flex';
    });
    
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`Contact us at: ${siteSettings.contactEmail}`);
    });
    
    closeModalButton.addEventListener('click', function() {
        submitPromptModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === submitPromptModal) {
            submitPromptModal.style.display = 'none';
        }
    });
    
    // Prompt submission form
    promptSubmissionForm.addEventListener('submit', handlePromptSubmission);
    
    // Calendar navigation
    prevMonthButton.addEventListener('click', showPreviousMonth);
    nextMonthButton.addEventListener('click', showNextMonth);
}

function initializeSite() {
    // Set current date
    const formattedDate = currentDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    currentDateElement.textContent = formattedDate;
    
    // Load today's featured prompt (first in the array)
    loadDailyPrompt();
    
    // Load recent prompts (excluding today's)
    loadRecentPrompts();
    
    // Load trending prompts
    loadTrendingPrompts();
    
    // Load AI tools
    loadAITools();
    
    // Load ads
    // loadAds();
    
    // Generate calendar
    generateCalendar(currentMonth, currentYear);
}

function loadDailyPrompt() {
    if (promptConfig.dailyPrompts.length > 0) {
        const todayPrompt = promptConfig.dailyPrompts[0];
        dailyPromptElement.textContent = todayPrompt.content;
        promptToolElement.textContent = todayPrompt.tool;
        promptCategoryElement.textContent = todayPrompt.category;
        promptTipsElement.textContent = todayPrompt.tips;
    }
}

function loadRecentPrompts() {
    // Clear container
    recentPromptsContainer.innerHTML = '';
    
    // Get recent prompts (skip the first one which is today's)
    const recentPrompts = promptConfig.dailyPrompts.slice(1, siteSettings.maxRecentPrompts + 1);
    
    // Create prompt cards
    recentPrompts.forEach(prompt => {
        const promptCard = document.createElement('div');
        promptCard.className = 'recent-prompt-card';
        
        // Format date for display
        const promptDate = new Date(prompt.date);
        const formattedDate = promptDate.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
        });
        
        promptCard.innerHTML = `
            <h4>${prompt.title}</h4>
            <div class="recent-prompt-meta">
                <span><i class="fas fa-wrench"></i> ${prompt.tool}</span>
                <span><i class="fas fa-calendar"></i> ${formattedDate}</span>
            </div>
            <div class="recent-prompt-content">
                ${truncateText(prompt.content, 150)}
            </div>
            <button class="btn secondary-btn view-prompt-btn" data-prompt-id="${prompt.id}">
                <i class="fas fa-eye"></i> View Full Prompt
            </button>
        `;
        
        recentPromptsContainer.appendChild(promptCard);
    });
    
    // Add event listeners to view buttons
    document.querySelectorAll('.view-prompt-btn').forEach(button => {
        button.addEventListener('click', function() {
            const promptId = parseInt(this.getAttribute('data-prompt-id'));
            viewFullPrompt(promptId);
        });
    });
}

function loadTrendingPrompts() {
    // Clear container
    trendingPromptsList.innerHTML = '';
    
    // Add trending prompts
    promptConfig.trendingPrompts.forEach((prompt, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="#">
                <i class="fas fa-chevron-right"></i>
                <span>${prompt}</span>
            </a>
        `;
        trendingPromptsList.appendChild(listItem);
    });
}

function loadAITools() {
    // Clear container
    aiToolsContainer.innerHTML = '';
    
    // Add AI tool cards
    promptConfig.aiTools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-icon">
                <i class="${tool.icon}" style="color: ${tool.color};"></i>
            </div>
            <h4>${tool.name}</h4>
            <p>AI Assistant</p>
        `;
        aiToolsContainer.appendChild(toolCard);
    });
}

function loadAds() {
    // Load ads from config
    document.getElementById('ad-slot-1').innerHTML = adConfig.adSlot1;
    document.getElementById('ad-slot-2').innerHTML = adConfig.adSlot2;
    document.getElementById('ad-slot-3').innerHTML = adConfig.adSlot3;
    document.getElementById('ad-slot-4').innerHTML = adConfig.adSlot4;
    document.getElementById('ad-slot-5').innerHTML = adConfig.adSlot5;
}

function generateCalendar(month, year) {
    // Update month/year display
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    currentMonthYearElement.textContent = `${monthNames[month]} ${year}`;
    
    // Clear calendar
    calendarDaysContainer.innerHTML = '';
    
    // Get first day of the month
    const firstDay = new Date(year, month, 1);
    // Get last day of the month
    const lastDay = new Date(year, month + 1, 0);
    // Get day of the week for first day (0 = Sunday, 1 = Monday, etc.)
    const firstDayIndex = firstDay.getDay();
    // Get number of days in month
    const daysInMonth = lastDay.getDate();
    
    // Get current day for highlighting
    const today = new Date();
    const isCurrentMonth = month === today.getMonth() && year === today.getFullYear();
    
    // Create empty cells for days before the first day of the month
    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day empty';
        calendarDaysContainer.appendChild(emptyDay);
    }
    
    // Create cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        // Check if it's today
        if (isCurrentMonth && day === today.getDate()) {
            dayElement.classList.add('today');
        }
        
        // Check if there's a prompt for this day (simplified logic)
        // In a real app, you'd check against your prompt dates
        const hasPrompt = Math.random() > 0.7; // Random for demo
        if (hasPrompt) {
            dayElement.classList.add('has-prompt');
            dayElement.title = 'Has prompt for this day';
        }
        
        calendarDaysContainer.appendChild(dayElement);
    }
}

function showPreviousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
}

function showNextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
}

function copyPromptToClipboard() {
    const promptText = dailyPromptElement.textContent;
    
    // Use the Clipboard API
    navigator.clipboard.writeText(promptText).then(() => {
        // Show toast notification
        showToast('Prompt copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback method
        const textArea = document.createElement('textarea');
        textArea.value = promptText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Prompt copied to clipboard!');
    });
}

function getRandomPrompt() {
    if (promptConfig.dailyPrompts.length > 1) {
        // Get a random prompt (excluding today's which is index 0)
        const randomIndex = Math.floor(Math.random() * (promptConfig.dailyPrompts.length - 1)) + 1;
        const randomPrompt = promptConfig.dailyPrompts[randomIndex];
        
        dailyPromptElement.textContent = randomPrompt.content;
        promptToolElement.textContent = randomPrompt.tool;
        promptCategoryElement.textContent = randomPrompt.category;
        promptTipsElement.textContent = randomPrompt.tips;
        
        showToast('Loaded a new prompt variation!');
    }
}

function viewFullPrompt(promptId) {
    const prompt = promptConfig.dailyPrompts.find(p => p.id === promptId);
    if (prompt) {
        // Create modal for viewing full prompt
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'view-prompt-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-view-modal">&times;</span>
                <h3><i class="fas fa-eye"></i> ${prompt.title}</h3>
                <div class="prompt-meta">
                    <span class="ai-tool"><i class="fas fa-wrench"></i> ${prompt.tool}</span>
                    <span class="prompt-category"><i class="fas fa-tag"></i> ${prompt.category}</span>
                    <span class="prompt-date"><i class="fas fa-calendar"></i> ${prompt.date}</span>
                </div>
                <div class="prompt-content">
                    <p>${prompt.content}</p>
                </div>
                <div class="usage-tips">
                    <h4><i class="fas fa-lightbulb"></i> Usage Tips</h4>
                    <p>${prompt.tips}</p>
                </div>
                <button class="btn copy-btn" id="copy-viewed-prompt">
                    <i class="far fa-copy"></i> Copy This Prompt
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.style.display = 'flex';
        
        // Add event listeners
        const closeButton = modal.querySelector('.close-view-modal');
        closeButton.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        const copyButton = modal.querySelector('#copy-viewed-prompt');
        copyButton.addEventListener('click', function() {
            navigator.clipboard.writeText(prompt.content).then(() => {
                showToast('Prompt copied to clipboard!');
            });
        });
        
        // Close when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
}

function handlePromptSubmission(e) {
    e.preventDefault();
    
    const promptText = document.getElementById('prompt-text').value;
    const promptTool = document.getElementById('prompt-tool-select').value;
    const promptCategory = document.getElementById('prompt-category-select').value;
    
    // Simple validation
    if (!promptText.trim() || !promptTool || !promptCategory) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // In a real app, you would send this to a server
    // For this demo, we'll just show a confirmation
    alert('Thank you for your submission! Your prompt has been received and will be reviewed.');
    
    // Reset form
    promptSubmissionForm.reset();
    
    // Close modal
    submitPromptModal.style.display = 'none';
}

function showToast(message) {
    const toast = document.getElementById('copy-toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}