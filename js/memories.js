const heartContainer = document.querySelector('.heart-rain');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = 12 + Math.random() * 16 + 'px';
  heart.style.animationDuration = 8 + Math.random() * 6 + 's';

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 15000);
}

// Slow heart rain
setInterval(createHeart, 800);
