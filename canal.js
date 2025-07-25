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

  const text = "COMMISSIONNAIRE AGRÉÉ EN DOUANE";
  const el = document.getElementById("typewriter");
  let index = 0;

  el.textContent = ""; // On vide d'abord

  function typeLetter() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetter, 80); // Vitesse de frappe
    } else {
      el.classList.add("finished"); // On ajoute la classe pour cacher le curseur
    }
  }

  window.addEventListener("load", typeLetter);


  document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const refuseBtn = document.getElementById("refuse-cookies");
    const closeBtn = document.getElementById("close-banner");

    const cookiesAccepted = localStorage.getItem("cookiesAccepted");

    if (cookiesAccepted !== "true") {
      banner.style.display = "block";
    }

    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      banner.style.display = "none";
    });

    function refuse() {
      localStorage.removeItem("cookiesAccepted");
      banner.style.display = "none";
    }

    refuseBtn.addEventListener("click", refuse);
    closeBtn.addEventListener("click", refuse);
  });

