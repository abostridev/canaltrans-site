document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
          new bootstrap.Collapse(navbarCollapse).toggle();
        }
      });
    });
  });
  document.addEventListener('click', function (event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');

    // Si le menu est ouvert
    if (navbarCollapse.classList.contains('show')) {
      // Si le clic n’est pas dans le menu NI sur le bouton
      if (!navbarCollapse.contains(event.target) && !toggler.contains(event.target)) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    }
  });