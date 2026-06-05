// content.js
console.log("Course Auto-Player extension loaded.");

function setupAutoPlay() {
    // Check the page every 2 seconds to handle dynamic SPA loading
    setInterval(() => {
        // Target the specific Shaka video element from the DOM
        const videoElement = document.querySelector('video.shaka-video');

        // If the video exists and we haven't attached our listener yet
        if (videoElement && !videoElement.dataset.autoPlayerAttached) {
            console.log("Auto-player: Video found. Listening for the end...");
            
            // Mark this specific video element so we don't attach duplicate listeners
            videoElement.dataset.autoPlayerAttached = "true";

            videoElement.addEventListener('ended', () => {
                console.log("Auto-player: Video ended. Searching for Next button...");
                
                // Target the Next button using the specific classes
                const nextButton = document.querySelector('.btn.next-button');
                
                if (nextButton) {
                    console.log("Auto-player: Navigating to the next video!");
                    nextButton.click();
                } else {
                    console.log("Auto-player: 'Next' button not found. You might be at the end of the module.");
                }
            });
        }
    }, 2000); 
}

// Initialize the continuous check
setupAutoPlay();