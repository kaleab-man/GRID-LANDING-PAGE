
const toggleBtn = document.getElementById("toggleBtn");
const navMenu = document.getElementById("navMenu");

toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    toggleBtn.setAttribute("aria-expanded", isOpen);
    toggleBtn.textContent = isOpen ? "✕" : "☰";
});
