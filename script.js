function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');

  // Random positions and sizes for variety
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.width = `${Math.random() * 20 + 20}px`;
  confetti.style.height = confetti.style.width;

  // Random delays and durations for falling confetti
  confetti.style.animationDelay = `${Math.random() * 2}s`;
  confetti.style.animationDuration = `${Math.random() * 3 + 5}s`;

  // Assign a specific class based on a random number
  const randomClass = Math.floor(Math.random() * 5);
  confetti.classList.add(`confetti-type-${randomClass}`);

  confettiContainer.appendChild(confetti);

  // Remove confetti after it falls out of view
  setTimeout(() => {
    confetti.remove();
  }, 6000);
}

// ... rest of the code remains the same