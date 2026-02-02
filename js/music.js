const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

let isPlaying = false;

// Play music on first click anywhere
document.body.addEventListener("click", () => {
  if (!isPlaying) {
    music.volume = 0.3;
    music.play();
    btn.textContent = "🔊";
    isPlaying = true;
  }
}, { once: true });

// Toggle music
btn.onclick = (e) => {
  e.stopPropagation();
  if (music.paused) {
    music.play();
    btn.textContent = "🔊";
  } else {
    music.pause();
    btn.textContent = "🔇";
  }
};
