// config.js

// =============================================
// AD CONFIGURATION
// =============================================
// To update ads, simply replace the HTML code below with your ad code from each network
// You can add more ad slots by following the same pattern

const adConfig = {
    // Ad Slot 1: Top Content Ad
    adSlot1: `<script async="async" data-cfasync="false" src="https://pl28404746.effectivegatecpm.com/1d70c97e57d6af9b8b9600ef1dfb0161/invoke.js"></script>
<div id="container-1d70c97e57d6af9b8b9600ef1dfb0161"></div>
    `,

    // Ad Slot 2: Middle Content Ad
    adSlot2: `
        <!-- Example PropellerAds Ad Code -->
        <div style="text-align: center; margin: 20px 0;">
            <p>PropellerAds: Native Ad</p>
            <div style="background: #f9f9f9; border: 1px dashed #3498db; padding: 30px; margin: 0 auto; max-width: 300px;">
                <!-- Replace this with your actual PropellerAds ad code -->
                <p>Your PropellerAds Ad Code Here</p>
                <p><strong>Format:</strong> Native Banner</p>
            </div>
        </div>
    `,

    // Ad Slot 3: Sidebar Top
     adSlot3: `<script async="async" data-cfasync="false" src="https://pl28404746.effectivegatecpm.com/1d70c97e57d6af9b8b9600ef1dfb0161/invoke.js"></script>
<div id="container-1d70c97e57d6af9b8b9600ef1dfb0161"></div>`,

    // Ad Slot 4: Sidebar Middle
    adSlot4: `
        <!-- Example Bidvertiser Ad Code -->
        <div style="text-align: center;">
            <p>Bidvertiser: Text Ad</p>
            <div style="background: #fffaf0; border: 1px solid #ffd699; padding: 20px; margin: 0 auto; max-width: 300px;">
                <!-- Replace this with your actual Bidvertiser ad code -->
                <p>Your Bidvertiser Ad Code Here</p>
                <p><strong>Format:</strong> Text & Display</p>
            </div>
        </div>
    `,

    // Ad Slot 5: Sidebar Bottom
    adSlot5: `
        <!-- Example Revcontent Ad Code -->
        <div style="text-align: center;">
            <p>Revcontent: Widget</p>
            <div style="background: #f5f5f5; border: 1px solid #e0e0e0; padding: 30px; margin: 0 auto; max-width: 300px;">
                <!-- Replace this with your actual Revcontent ad code -->
                <p>Your Revcontent Ad Code Here</p>
                <p><strong>Format:</strong> Content Recommendation</p>
            </div>
        </div>
    `
};

// =============================================
// PROMPT CONFIGURATION
// =============================================
// To update prompts, simply edit the arrays below
// The first prompt in dailyPrompts is today's featured prompt

const promptConfig = {
    // Daily featured prompts (add new ones at the beginning)
    dailyPrompts: [
        {
            id: 1,
            date: "2026-01-5",
            title: "Food Ai image",
            content: "create an ultra-realistic macro shot of FOOD = “FOODNAME” featuring a tiny stylized **kawaii** face subtly **sculpted** from the FOOD’s own texture–no **human**-body realism. The cheeks, nose and mouth should **appear** naturally formed from the FOOD with its pores and bumps flowing **across** the features, a smoothly carved mouth **and** glossy doll-like eyes. The FOOD must rest gently **in a human** palm, while another hand feeds the embedded **face a small** piece of FOOD at its mouth, **Use a** mogucheeks-inspired food-creature **aesthetic** with hyperreal macro texture, rounded cute features, warm soft lighting and shallow depth of field (1/1.2-1.4) producing creamy bokeh. Capture the excited expressions with glossy innocent eyes. Shot on an 85mm macro lens at f/1.4 with ultra-sharp focus on the sculpted face and a blurred background, in a 9:16 vertical portrait format. what you think about this prompt",
            tool: "Meta Ai",
            category: "Picture Generation",
            tips: "Generate the image from the Meta Ai then paste the animation code"
        },
        {
            id: 2,
            date: "2026-01-5",
            title: "Food Ai image animation",
            content: "Animate only gentle, tiny movements. The FOOD-embedded baby-face blinks softly, its stylized mouth slowly opens in anticipation as a hand brings a small piece of FOOD toward it. The FOOD creature leans forward slightly to reach the bits, takes a small nibble with a soft mouth motion, and shows asubtle cheek squish followed by delicate chewing. Add faint happy micro-expressions and minimal slow breathing, keeping all motions smooth, cut,e and delicately understand. Add gentle background music and necessary sound effects, such as soft breathing, tiny nibble sounds, subtle chewing, and a light, happy tone.",
            tool: "Meta Ai",
            category: "Animation Generation",
            tips: "Your food image animation is ready enjoy it"
        },

    ],

    // Recent prompts (will be auto-populated from dailyPrompts)

    // Trending prompts (manually curated or popular ones)
    trendingPrompts: [
        "AI-powered personal finance advisor simulation",
        "Generate a week's worth of healthy meal plans with recipes",
        "Create a personalized 30-day fitness plan based on user inputs",
        "Simulate a job interview for a specific position",
        "Write a persuasive email sequence for product launch"
    ],

    // AI Tools list
    aiTools: [
        { name: "ChatGPT", icon: "fas fa-comment-dots", color: "#10a37f" },
        { name: "Claude", icon: "fas fa-brain", color: "#d4a574" },
        { name: "Gemini", icon: "fas fa-gem", color: "#4285f4" },
        { name: "Midjourney", icon: "fas fa-palette", color: "#1e1e1e" },
        { name: "DALL-E", icon: "fas fa-image", color: "#00a67e" },
        { name: "Stable Diffusion", icon: "fas fa-project-diagram", color: "#ff6b6b" },
        { name: "GitHub Copilot", icon: "fas fa-code", color: "#4078c0" },
        { name: "Jasper", icon: "fas fa-feather-alt", color: "#000000" }
    ],

    // Prompt categories
    categories: [
        "Productivity", "Creative Writing", "Marketing", "Coding",
        "Design", "Education", "Business", "Healthcare", "Entertainment"
    ]
};

// =============================================
// SITE SETTINGS
// =============================================
const siteSettings = {
    siteName: "Daily AI Prompts",
    contactEmail: "contact@daily-aiprompts.com",
    maxRecentPrompts: 6,
    maxTrendingPrompts: 5
};