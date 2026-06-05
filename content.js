// content.js

function initAutoPlay() {
    // Attempt to find the video element on the page
    const videoElement = document.querySelector('video');

    if (videoElement) {
        console.log("Auto-player: Video detected. Listening for the end...");
        
        // Listen for the video to finish
        videoElement.addEventListener('ended', () => {
            console.log("Auto-player: Video ended. Searching for the Next button...");
            
            // TODO: We need the exact CSS selector for the 'Next' button
            const nextButton = document.querySelector('.REPLACE_WITH_ACTUAL_CLASS'); 
            
            if (nextButton) {
                nextButton.click();
                console.log("Auto-player: Navigating to the next video!");
            } else {
                console.error("Auto-player: 'Next' button not found in the DOM.");
            }
        });
    } else {
        // Single Page Applications (SPAs) often take a moment to load the DOM.
        // If the video isn't there yet, try again in 2 seconds.
        setTimeout(initAutoPlay, 2000);
    }
}

// Start the initialization
initAutoPlay();