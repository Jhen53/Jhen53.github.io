// Phase 2 – Basic interaction
// Navigation menu, future expansion ready

console.log("Official Film Website – Phase 2 loaded");

// ===== Fullscreen Menu Toggle =====
const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("fullscreenMenu");
const body = document.body;

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");

    // 切換 icon
    toggle.textContent = isOpen ? "✕" : "☰";

    // 給 body 一個狀態（for CSS）
    body.classList.toggle("menu-open", isOpen);
  });
}
