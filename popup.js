// popup.js

const toggle = document.getElementById('autoPlayToggle');

// 1. When the popup opens, load the current saved state
chrome.storage.local.get(['isAutoPlayEnabled'], (result) => {
    // If it's undefined (first time), default to true
    toggle.checked = result.isAutoPlayEnabled !== false;

    // Wait for the browser to paint the UI, THEN enable the CSS transitions
    setTimeout(() => {
        document.body.classList.add('enable-animations');
    }, 100);
});

// 2. Listen for clicks on the toggle and save the new state
toggle.addEventListener('change', () => {
    chrome.storage.local.set({ isAutoPlayEnabled: toggle.checked }, () => {
        // console.log("Settings saved: Auto-Play is now", toggle.checked);
    });
});