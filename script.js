document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    
    // Cambiar ícono entre menú y cerrar
    const icon = menuToggle.querySelector('i');
    if (nav.classList.contains('active')) {
      icon.classList.remove('bi-list');
      icon.classList.add('bi-x');
    } else {
      icon.classList.remove('bi-x');
      icon.classList.add('bi-list');
    }
  });
  
  // Cerrar menú al hacer clic en un enlace (para móviles)
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
      }
    });
  });
});