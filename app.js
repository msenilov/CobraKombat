// Initialize token count
let tokens = 0;

// Get references to HTML elements
const AdController = window.Adsgram.init({ blockId: "3888" });
const cobraClick = document.getElementById('cobra-click');
const tokenCounter = document.getElementById('token-counter');
const watchAdButton = document.getElementById('watch-ad-button');
const messageBox = document.getElementById('message-box');


const button = document.getElementById('watch-ad-button');

  button.addEventListener('click', () => {
    AdController.show().then((result) => {
      // user watch ad till the end
      // your code to reward user
      alert('Reward');
      }).catch((result) => {
        // user skipped video or get error during playing ad
        // do nothing or whatever you want
        alert(JSON.stringify(result, null, 4));
        })
})

// Function to update the token display
function updateTokens() {
  tokenCounter.textContent = `Tokens: ${tokens}`;
}

// Function to update the message box
function updateMessage(message) {
  messageBox.textContent = message;
}

// Handle click on the cobra image
cobraClick.addEventListener('click', () => {
  tokens += 10; // Add 10 tokens for clicking on the cobra
  updateTokens();
  updateMessage('You earned 10 tokens!');
});

// Simulated AdsGram_AI token earning function
function watchAd() {
  // Simulate ad watching delay (in a real app, you'd load an ad here)
  updateMessage('Watching an ad... (Powered by AdsGram_AI)');
  
  // After watching the ad, reward the user
  setTimeout(() => {
    tokens += 50; // Add 50 tokens for watching an ad
    updateTokens();
    updateMessage('You earned 50 tokens for watching an ad!');
  }, 3000); // Simulated 3-second ad watching time
}

// Handle the "Watch an Ad" button click
watchAdButton.addEventListener('click', watchAd);
