const menuBtn = document.getElementById("menu-btn");
const menuContainer = document.querySelector(".menu-container");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menuContainer.classList.toggle("open");
});

lucide.createIcons();
