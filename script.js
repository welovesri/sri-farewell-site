// Countdown to the date she left SG
const moveDate = new Date("2025-06-20"); // change if needed
const now = new Date();
const diff = Math.floor((now - moveDate) / (1000 * 60 * 60 * 24));
document.getElementById("countdown").textContent = `${diff} days`;

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");

  // Try auto-play (for desktop)
  audio.play().catch(() => {
    console.log("Autoplay blocked. Waiting for user interaction...");
  });

  // Ensure play on user interaction (mobile-safe)
  const enableAudio = () => {
    audio.play();
    document.removeEventListener("click", enableAudio);
    document.removeEventListener("touchstart", enableAudio);
  };

  document.addEventListener("click", enableAudio);
  document.addEventListener("touchstart", enableAudio);
});


const images = [
  "./assets/sri.jpg"
];

let current = 0;
const carouselImg = document.getElementById("carousel-img");

setInterval(() => {
  current = (current + 1) % images.length;
  carouselImg.style.opacity = 0;

  setTimeout(() => {
    carouselImg.src = images[current];
    carouselImg.style.opacity = 1;
  }, 300);
}, 3000);
