const balloonContainer = document.querySelector('.balloons');

for (let i = 0; i < 12; i++) {
  const balloon = document.createElement('img');
  balloon.src = 'assets/balloon.png';
  balloon.classList.add('balloon');

  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.animationDuration = 12 + Math.random() * 8 + 's';
  balloon.style.transform = `scale(${0.8 + Math.random() * 0.5})`;

  balloonContainer.appendChild(balloon);
}

// Cake interaction
const cake = document.getElementById("cake");
const gift = document.getElementById("gift");
const cutText = document.getElementById("cut-text");

let cut = false;

cake.onclick = () => {
  if (!cut) {
    cut = true;
    cake.style.transform = "scale(0.95)";
    cutText.innerText = "Yay 🎉 Make a wish!";
    setTimeout(() => gift.style.display = "block", 800);
  }
};

gift.onclick = () => {
  window.location.href = "memories.html";
};
