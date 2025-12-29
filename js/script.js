// Phase 2 – Basic interaction
console.log("Official Film Website – Phase 2 loaded");

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("fullscreenMenu");
const body = document.body;

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");

    // 改用最穩定的符號
    toggle.textContent = isOpen ? "×" : "☰";

    body.classList.toggle("menu-open", isOpen);
  });
}
