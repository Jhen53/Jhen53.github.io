// Phase 2 – Basic interaction
// Navigation menu, future expansion ready

console.log("Official Film Website – Phase 2 loaded");

// ===== Fullscreen Menu Toggle =====
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("fullscreenMenu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}
