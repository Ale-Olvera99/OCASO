document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  // Verificar si los elementos existen
  if (!menuToggle || !nav) {
    console.error("No se encontraron los elementos del menú");
    return;
  }

  // Función para alternar el menú
  function toggleMenu() {
    nav.classList.toggle("active");

    // Cambiar ícono entre menú y cerrar
    const icon = menuToggle.querySelector("i");
    if (nav.classList.contains("active")) {
      icon.classList.remove("bi-list");
      icon.classList.add("bi-x");
      document.body.style.overflow = "hidden";
    } else {
      icon.classList.remove("bi-x");
      icon.classList.add("bi-list");
      document.body.style.overflow = "";
    }
  }

  // Evento para el botón del menú
  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // Evita que el evento se propague al documento
    toggleMenu();
  });

  // Cerrar menú al hacer clic en un enlace (para móviles)
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768 && nav.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Cerrar menú al hacer clic fuera de él
  document.addEventListener("click", function (event) {
    if (window.innerWidth <= 768 && nav.classList.contains("active")) {
      if (!nav.contains(event.target) && event.target !== menuToggle) {
        toggleMenu();
      }
    }
  });

  // Cerrar menú al cambiar el tamaño de la pantalla
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && nav.classList.contains("active")) {
      toggleMenu();
    }
  });
});
