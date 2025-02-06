document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".links");
  const navItems = document.querySelectorAll(".links a");

  function toggleMenu() {
    if (menuToggle.checked) {
      navLinks.classList.add("active");
    } else {
      navLinks.classList.remove("active");
    }
  }

  menuToggle.addEventListener("change", toggleMenu);

  // Close menu when clicking a nav item
  navItems.forEach(link => {
    link.addEventListener("click", function () {
      menuToggle.checked = false;
      toggleMenu();
    });
  });

  // Ensure menu state updates on resize
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1000) {
      navLinks.classList.remove("active");
      menuToggle.checked = false;
    }
  });
});
