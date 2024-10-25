const confettiContainer = document.querySelector('.confetti-container');

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');

  // Random positions and sizes for variety
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.width = `${Math.random() * 10 + 5}px`;
  confetti.style.height = confetti.style.width;

  // Random delays and durations for falling confetti
  confetti.style.animationDelay = `${Math.random() * 2}s`;
  confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;

  confettiContainer.appendChild(confetti);

  // Remove confetti after it falls out of view
  setTimeout(() => {
    confetti.remove();
  }, 5000);
}

// Generate confetti
for (let i = 0; i < 100; i++) {
  createConfetti();
}

// Continuously add new confetti for a lively effect
setInterval(createConfetti, 300);
