const confettiContainer = document.querySelector('.confetti-container');

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');

  // Random horizontal position
  confetti.style.left = `${Math.random() * 100}vw`;
  
  // Random sizes for variety
  const size = Math.random() * 20 + 15;
  confetti.style.width = `${size}px`;
  confetti.style.height = `${size}px`;

  // Set initial vertical position above the viewport
  confetti.style.top = `-${size}px`;

  // Random delays for falling confetti
  confetti.style.animationDelay = `${Math.random() * 2}s`;
  
  // Adjust animation duration based on viewport height
  const duration = Math.random() * 3 + 5;
  confetti.style.animationDuration = `${duration}s`;

  // Assign a specific class based on a random number
  const randomClass = Math.floor(Math.random() * 7);
  confetti.classList.add(`confetti-type-${randomClass}`);

  // Set random z-index with more behind than in front
  const zIndex = Math.random() < 0.8 ? 
    Math.floor(Math.random() * 5) + 6 :  // 80% chance to be behind (z-index 6-10)
    Math.floor(Math.random() * 15) + 11; // 20% chance to be in front (z-index 11-25)
  confetti.style.zIndex = zIndex;

  confettiContainer.appendChild(confetti);

  // Remove confetti after animation completes
  setTimeout(() => {
    confetti.remove();
  }, duration * 1000 + 2000); // Add a buffer to ensure it's off-screen
}

// Create initial confetti
for (let i = 0; i < 100; i++) {
  setTimeout(createConfetti, Math.random() * 2000);
}

// Continue creating confetti
setInterval(createConfetti, 200);