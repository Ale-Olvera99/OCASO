document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  // Función para alternar el menú
  function toggleMenu() {
    nav.classList.toggle('active');
    
    // Cambiar ícono entre menú y cerrar
    const icon = menuToggle.querySelector('i');
    if (nav.classList.contains('active')) {
      icon.classList.remove('bi-list');
      icon.classList.add('bi-x');
      document.body.style.overflow = 'hidden'; // Evitar scroll cuando el menú está abierto
    } else {
      icon.classList.remove('bi-x');
      icon.classList.add('bi-list');
      document.body.style.overflow = ''; // Restaurar scroll
    }
  }
  
  // Evento para el botón del menú
  menuToggle.addEventListener('click', toggleMenu);
  
  // Cerrar menú al hacer clic en un enlace (para móviles)
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        toggleMenu();
      }
    });
  });
  
  // Cerrar menú al hacer clic fuera de él
  document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768 && nav.classList.contains('active')) {
      if (!nav.contains(event.target) && event.target !== menuToggle) {
        toggleMenu();
      }
    }
  });
});