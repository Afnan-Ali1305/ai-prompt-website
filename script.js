// script.js - Updated with Proper Search and Infinite Scroll

// DOM Elements
let allPromptsContainer, categoriesContainer, promptCountElement;
let promptSearchInput, searchButton;
let copyToast, submitPromptLink, contactLink;
let submitPromptModal, closeModalButton, promptSubmissionForm;

// Current state
let displayedPrompts = [];
let filteredPrompts = [];
let currentPage = 1;
const promptsPerPage = 9;
let isLoading = false;
let hasMorePrompts = true;
let currentSearchQuery = '';
let currentCategory = 'All';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    initializeDOMElements();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize the site
    initializeSite();
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

function initializeDOMElements() {
    allPromptsContainer = document.getElementById('all-prompts-container');
    categoriesContainer = document.getElementById('categories-container');
    promptCountElement = document.getElementById('prompt-count');
    promptSearchInput = document.getElementById('prompt-search');
    searchButton = document.getElementById('search-button');
    copyToast = document.getElementById('copy-toast');
    
    submitPromptLink = document.getElementById('submit-prompt-link');
    contactLink = document.getElementById('contact-link');
    
    submitPromptModal = document.getElementById('submit-prompt-modal');
    closeModalButton = document.querySelector('.close-modal');
    promptSubmissionForm = document.getElementById('prompt-submission-form');
}

function setupEventListeners() {
    // Search functionality
    searchButton.addEventListener('click', performSearch);
    promptSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Real-time search as user types (with debounce)
    let searchTimeout;
    promptSearchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (this.value.trim() === '') {
                resetSearch();
            } else {
                performSearch();
            }
        }, 300); // 300ms debounce
    });
    
    // Infinite scroll
    window.addEventListener('scroll', handleScroll);
    
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
}

function initializeSite() {
    // Load all prompts
    loadAllPrompts();
    
    // Load categories
    loadCategories();
    
    // Load first page
    loadPromptsPage(1);
}

function loadAllPrompts() {
    // Combine all prompts from config
    const allPrompts = getAllPrompts();
    
    // Store all prompts
    displayedPrompts = allPrompts;
    filteredPrompts = [...allPrompts];
    
    // Update prompt count
    updatePromptCount();
}

function loadCategories() {
    // Clear container
    categoriesContainer.innerHTML = '';
    
    // Get categories from config
    const categories = promptConfig.categories;
    
    // Create category buttons
    categories.forEach(category => {
        const categoryButton = document.createElement('a');
        categoryButton.href = '#';
        categoryButton.textContent = category;
        categoryButton.classList.add('category-btn');
        
        if (category === 'All') {
            categoryButton.classList.add('active');
        }
        
        categoryButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active state
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Filter prompts by category
            currentCategory = category;
            currentSearchQuery = '';
            promptSearchInput.value = '';
            
            if (category === 'All') {
                filteredPrompts = [...displayedPrompts];
            } else {
                filteredPrompts = displayedPrompts.filter(prompt => 
                    prompt.category === category
                );
            }
            
            // Reset to first page
            currentPage = 1;
            hasMorePrompts = true;
            allPromptsContainer.innerHTML = '';
            loadPromptsPage(1);
            updatePromptCount();
        });
        
        categoriesContainer.appendChild(categoryButton);
    });
}

function loadPromptsPage(page) {
    if (isLoading || !hasMorePrompts) return;
    
    isLoading = true;
    
    // Show loading indicator (optional)
    if (page === 1) {
        allPromptsContainer.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> Loading prompts...</div>';
    }
    
    // Simulate network delay (remove in production)
    setTimeout(() => {
        // Calculate start and end indices
        const startIndex = (page - 1) * promptsPerPage;
        const endIndex = Math.min(startIndex + promptsPerPage, filteredPrompts.length);
        
        // Get prompts for current page
        const pagePrompts = filteredPrompts.slice(startIndex, endIndex);
        
        // Clear loading indicator if first page
        if (page === 1) {
            allPromptsContainer.innerHTML = '';
        }
        
        // Create prompt cards
        pagePrompts.forEach(prompt => {
            const promptCard = createPromptCard(prompt);
            allPromptsContainer.appendChild(promptCard);
        });
        
        // Check if there are more prompts to load
        hasMorePrompts = endIndex < filteredPrompts.length;
        
        // Update page counter
        currentPage = page;
        
        isLoading = false;
        
        // Update prompt count
        updatePromptCount();
    }, 300); // Simulated delay
}

function createPromptCard(prompt) {
    const promptCard = document.createElement('div');
    promptCard.className = 'prompt-card';
    
    // Generate unique ID for the prompt if not exists
    const promptId = prompt.id || `prompt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Format date for display
    const promptDate = new Date(prompt.date);
    const formattedDate = promptDate.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
    });
    
    promptCard.innerHTML = `
        <div class="prompt-meta">
            <span class="ai-tool"><i class="fas fa-wrench"></i> ${prompt.tool}</span>
            <span class="prompt-category"><i class="fas fa-tag"></i> ${prompt.category}</span>
            <span class="prompt-date"><i class="fas fa-calendar"></i> ${formattedDate}</span>
        </div>
        <h3 class="prompt-title">${prompt.title}</h3>
        <div class="prompt-content">
            <p>${truncateText(prompt.content, 200)}</p>
        </div>
        <div class="prompt-tags">
            ${prompt.tags ? prompt.tags.slice(0, 3).map(tag => 
                `<span class="tag">${tag}</span>`
            ).join('') : ''}
        </div>
        <div class="prompt-actions">
            <button class="btn copy-btn prompt-copy-btn" 
                    data-prompt-id="${promptId}"
                    data-prompt-content="${escapeHtml(prompt.content)}">
                <i class="far fa-copy"></i> Copy Prompt
            </button>
        </div>
    `;
    
    // Add click to expand functionality
    const contentElement = promptCard.querySelector('.prompt-content');
    const originalContent = prompt.content;
    
    if (prompt.content.length > 200) {
        const expandButton = document.createElement('button');
        expandButton.className = 'expand-btn';
        expandButton.innerHTML = '<i class="fas fa-chevron-down"></i> Show More';
        expandButton.addEventListener('click', function(e) {
            e.stopPropagation();
            if (contentElement.classList.contains('expanded')) {
                contentElement.innerHTML = `<p>${truncateText(originalContent, 200)}</p>`;
                this.innerHTML = '<i class="fas fa-chevron-down"></i> Show More';
                contentElement.classList.remove('expanded');
            } else {
                contentElement.innerHTML = `<p>${originalContent}</p>`;
                this.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less';
                contentElement.classList.add('expanded');
            }
        });
        promptCard.querySelector('.prompt-actions').before(expandButton);
    }
    
    // Add event listener to copy button
    const copyButton = promptCard.querySelector('.prompt-copy-btn');
    copyButton.addEventListener('click', handleCopyPrompt);
    
    return promptCard;
}

function handleCopyPrompt(e) {
    const button = e.currentTarget;
    const promptId = button.getAttribute('data-prompt-id');
    const promptContent = button.getAttribute('data-prompt-content');
    
    // Direct copy without any redirect or delay
    copyPromptToClipboard(promptContent, promptId);
}

function copyPromptToClipboard(promptContent, promptId) {
    // Unescape HTML entities
    const textToCopy = unescapeHtml(promptContent);
    
    // Use the Clipboard API
    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Prompt copied to clipboard!');
        
        // Track in analytics (simulated)
        trackCopyEvent(promptId);
        
        // Optional: Add visual feedback to the button
        const button = document.querySelector(`[data-prompt-id="${promptId}"]`);
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
        
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback method
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Prompt copied to clipboard!');
        
        // Track in analytics (simulated)
        trackCopyEvent(promptId);
    });
}

function performSearch() {
    const searchTerm = promptSearchInput.value.trim();
    currentSearchQuery = searchTerm;
    
    if (searchTerm === '') {
        resetSearch();
        return;
    }
    
    // Reset category filter
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.category-btn:first-child').classList.add('active');
    currentCategory = 'All';
    
    // Search prompts
    const searchResults = searchPrompts(searchTerm);
    filteredPrompts = searchResults;
    
    // Reset to first page
    currentPage = 1;
    hasMorePrompts = true;
    allPromptsContainer.innerHTML = '';
    loadPromptsPage(1);
    updatePromptCount();
}

function resetSearch() {
    currentSearchQuery = '';
    filteredPrompts = [...displayedPrompts];
    currentPage = 1;
    hasMorePrompts = true;
    allPromptsContainer.innerHTML = '';
    loadPromptsPage(1);
    updatePromptCount();
}

function handleScroll() {
    // Check if we're near the bottom of the page
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.offsetHeight;
    const threshold = 100; // Load more when 100px from bottom
    
    if (documentHeight - scrollPosition < threshold && !isLoading && hasMorePrompts) {
        loadPromptsPage(currentPage + 1);
    }
}

function updatePromptCount() {
    const totalPrompts = filteredPrompts.length;
    const loadedPrompts = Math.min(currentPage * promptsPerPage, totalPrompts);
    
    if (totalPrompts === 0) {
        promptCountElement.textContent = 'No prompts found';
        allPromptsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No prompts found</h3>
                <p>Try a different search term or browse categories</p>
            </div>
        `;
    } else if (currentSearchQuery) {
        promptCountElement.textContent = `Found ${totalPrompts} prompts for "${currentSearchQuery}"`;
    } else if (currentCategory !== 'All') {
        promptCountElement.textContent = `${totalPrompts} prompts in ${currentCategory}`;
    } else {
        promptCountElement.textContent = `${totalPrompts} prompts available`;
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

function trackCopyEvent(promptId) {
    // Simulate analytics tracking
    console.log(`Prompt ${promptId} copied to clipboard`);
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function unescapeHtml(text) {
    const div = document.createElement('div');
    div.innerHTML = text;
    return div.textContent || div.innerText || '';
}

// Helper function to get all prompts
function getAllPrompts() {
    const allPrompts = [...promptConfig.allPrompts];
    
    // Add additional prompts if they exist
    if (promptConfig.additionalPrompts) {
        allPrompts.push(...promptConfig.additionalPrompts);
    }
    
    // Add trending prompts if they exist
    if (promptConfig.trendingPrompts) {
        promptConfig.trendingPrompts.forEach((content, index) => {
            if (typeof content === 'string') {
                allPrompts.push({
                    id: `trending-${index + 1000}`,
                    date: new Date().toISOString().split('T')[0],
                    title: `Trending Prompt ${index + 1}`,
                    content: content,
                    tool: 'ChatGPT',
                    category: 'Productivity',
                    tags: ['trending'],
                    searchKeywords: ['trending']
                });
            }
        });
    }
    
    return allPrompts;
}

// Search function (moved from config.js)
function searchPrompts(query) {
    const allPrompts = getAllPrompts();
    const searchQuery = query.toLowerCase().trim();
    
    if (!searchQuery) return allPrompts;
    
    return allPrompts.filter(prompt => {
        // Search in content
        if (prompt.content.toLowerCase().includes(searchQuery)) return true;
        
        // Search in title
        if (prompt.title.toLowerCase().includes(searchQuery)) return true;
        
        // Search in tool
        if (prompt.tool.toLowerCase().includes(searchQuery)) return true;
        
        // Search in category
        if (prompt.category.toLowerCase().includes(searchQuery)) return true;
        
        // Search in tags
        if (prompt.tags && prompt.tags.some(tag => 
            tag.toLowerCase().includes(searchQuery))) return true;
        
        // Search in keywords
        if (prompt.searchKeywords && prompt.searchKeywords.some(keyword => 
            keyword.toLowerCase().includes(searchQuery))) return true;
        
        return false;
    });
}