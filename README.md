# Daily AI Prompts Website

A responsive website that showcases daily AI prompts and displays ads from multiple ad networks.

## Features

- Daily featured AI prompts for various tools (ChatGPT, Claude, Gemini, etc.)
- Easy-to-update configuration for prompts and ads
- Responsive design that works on all devices
- Multiple ad slots for different ad networks
- Simple deployment to GitHub Pages

## How to Update Content

### 1. Updating Prompts

Edit the `config.js` file:

- **To change today's featured prompt**: Edit the first object in the `dailyPrompts` array
- **To add a new prompt**: Add a new object at the beginning of the `dailyPrompts` array
- **To update trending prompts**: Edit the `trendingPrompts` array
- **To update AI tools list**: Edit the `aiTools` array

### 2. Updating Ads

Edit the `adConfig` object in `config.js`:

- Replace the HTML code in each ad slot with your actual ad code from:
  - Adsterra
  - PropellerAds
  - Adcash
  - Bidvertiser
  - Revcontent

Example:
```javascript
adSlot1: `<!-- Your actual Adsterra ad code here -->`