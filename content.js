// content.js
console.log("Course Auto-Player extension loaded.");

function setupAutoPlay() {
    setInterval(() => {
        const videoElement = document.querySelector('video.shaka-video');

        if (videoElement && !videoElement.dataset.autoPlayerAttached) {
            console.log("Auto-player: Video found. Listening for the end...");
            videoElement.dataset.autoPlayerAttached = "true";

            videoElement.addEventListener('ended', () => {
                console.log("Auto-player: Video ended. Checking user settings...");
                
                // CHECK STORAGE BEFORE CLICKING
                chrome.storage.local.get(['isAutoPlayEnabled'], (result) => {
                    // Default to true if the user hasn't set it yet
                    const autoPlayOn = result.isAutoPlayEnabled !== false;
                    
                    if (autoPlayOn) {
                        const nextButton = document.querySelector('.btn.next-button');
                        if (nextButton) {
                            console.log("Auto-player: Navigating to the next video!");
                            nextButton.click();
                        } else {
                            console.log("Auto-player: 'Next' button not found.");
                        }
                    } else {
                        console.log("Auto-player: Skipped. Auto-play is toggled OFF.");
                    }
                });
            });
        }
    }, 2000); 
}

setupAutoPlay();