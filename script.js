// Get the audio elements
const backgroundMusic = document.getElementById("background-music");
const yesSound = document.getElementById("yes-sound");
const noSound = document.getElementById("no-sound");

// Flag to track if the background music has started
let musicStarted = false;

// Function to start the background music on user interaction
function startMusic() {
    if (!musicStarted) {
        backgroundMusic.play(); // Start the background music
        musicStarted = true; // Mark the music as started
    }
}

// Function to open the envelope and show the question
function openEnvelope() {
    startMusic(); // Start background music when the user clicks the envelope
    let envelope = document.getElementById("envelope-img");
    envelope.src = "open-envelope.jpeg"; // Change to open envelope image
    document.getElementById("note").style.display = "block"; // Show the question
}

// Function to handle the "Yes" button click
function handleYesClick() {
    // Pause the background music
    backgroundMusic.pause();

    // Play the "Yes" sound
    yesSound.play();

    // Show hearts animation
    showHearts();

    // After the hearts animation, show the "Yes" image
    setTimeout(function() {
        showImage("yes.jpeg");
    }, 3000);
}

// Function to handle the "No" button click
function handleNoClick() {
    // Pause the background music
    backgroundMusic.pause();

    // Play the "No" sound
    noSound.play();

    // Shake the "No" button and show the "No" image
    shakeButton();

    // After the shake animation, show the "No" image
    setTimeout(function() {
        showImage("no.jpeg");
    }, 500);
}

// Function to show hearts animation when "Yes" is clicked
function showHearts() {
    let heartsContainer = document.getElementById("hearts-container");

    // Generate hearts and animate them
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        
        // Randomly place hearts on the screen
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 2}s`;

        heartsContainer.appendChild(heart);
    }
}

// Function to shake the "No" button
function shakeButton() {
    let noButton = document.querySelector(".no");
    noButton.classList.add("shake");
}

// Function to show the selected image in full-screen mode
function showImage(imageSrc) {
    let fullscreenDiv = document.getElementById("fullscreen-image");
    let resultImg = document.getElementById("result-img");

    resultImg.src = imageSrc; // Set image source to "yes.jpeg" or "no.jpeg"
    fullscreenDiv.style.display = "flex"; // Show the image in fullscreen mode
}

// Ensure that the audio stops playing if the page is unloaded
window.addEventListener('beforeunload', function() {
    // Pause all audio
    backgroundMusic.pause();
    yesSound.pause();
    noSound.pause();
});