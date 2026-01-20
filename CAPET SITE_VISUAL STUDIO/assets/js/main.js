/* ========================================
   CAPET SITE - MAIN JAVASCRIPT
   Formulaires, validation, navigation
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
  initializeNavigation();
  initializeFormValidation();
  initializeAnimations();
  setActiveNavLink();
});

/* ========================================
   NAVIGATION MOBILE
   ======================================== */
function initializeNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
      });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.navbar')) {
        navMenu.classList.remove('active');
      }
    });
  }
}

/* ========================================
   DÉFINIR LE LIEN ACTIF DU MENU
   ======================================== */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ========================================
   VALIDATION DES FORMULAIRES
   ======================================== */
function initializeFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Réinitialiser les erreurs
      clearFormErrors(form);

      if (validateForm(form)) {
        // Simuler l'envoi (backend nécessaire pour vrai envoi)
        handleFormSubmit(form);
      }
    });

    // Validation en temps réel
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', function () {
        validateField(this);
      });

      input.addEventListener('change', function () {
        validateField(this);
      });
    });
  });
}

/* ========================================
   VALIDER UN CHAMP INDIVIDUEL
   ======================================== */
function validateField(field) {
  const value = field.value.trim();
  const type = field.getAttribute('type') || field.tagName.toLowerCase();
  const name = field.getAttribute('name');
  const required = field.hasAttribute('required');

  let isValid = true;
  let errorMessage = '';

  // Vérifier si le champ est requis
  if (required && !value) {
    isValid = false;
    errorMessage = 'Ce champ est obligatoire.';
  }

  // Validations spécifiques
  if (value && isValid) {
    if (type === 'email') {
      if (!isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Veuillez entrer une adresse email valide.';
      }
    }

    if (type === 'tel') {
      if (!isValidPhone(value)) {
        isValid = false;
        errorMessage = 'Veuillez entrer un numéro de téléphone valide.';
      }
    }

    if (name === 'password' && value.length < 6) {
      isValid = false;
      errorMessage = 'Le mot de passe doit contenir au moins 6 caractères.';
    }

    if (name === 'confirm_password') {
      const passwordField = field.form.querySelector('input[name="password"]');
      if (passwordField && value !== passwordField.value) {
        isValid = false;
        errorMessage = 'Les mots de passe ne correspondent pas.';
      }
    }
  }

  // Afficher ou masquer l'erreur
  if (isValid) {
    field.classList.remove('error');
    removeErrorMessage(field);
  } else {
    field.classList.add('error');
    showErrorMessage(field, errorMessage);
  }

  return isValid;
}

/* ========================================
   VALIDER TOUT LE FORMULAIRE
   ======================================== */
function validateForm(form) {
  const fields = form.querySelectorAll('input, textarea, select');
  let isFormValid = true;

  fields.forEach(field => {
    if (!validateField(field)) {
      isFormValid = false;
    }
  });

  return isFormValid;
}

/* ========================================
   UTILITAIRES DE VALIDATION
   ======================================== */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-+()]+$/;
  return phone.length >= 8 && phoneRegex.test(phone);
}

function showErrorMessage(field, message) {
  let errorElement = field.parentElement.querySelector('.form-error');

  if (!errorElement) {
    errorElement = document.createElement('span');
    errorElement.className = 'form-error';
    field.parentElement.appendChild(errorElement);
  }

  errorElement.textContent = message;
}

function removeErrorMessage(field) {
  const errorElement = field.parentElement.querySelector('.form-error');
  if (errorElement) {
    errorElement.remove();
  }
}

function clearFormErrors(form) {
  const errorElements = form.querySelectorAll('.form-error');
  const errorFields = form.querySelectorAll('.error');

  errorElements.forEach(el => el.remove());
  errorFields.forEach(el => el.classList.remove('error'));
}

/* ========================================
   GESTION DE L'ENVOI DU FORMULAIRE
   ======================================== */
function handleFormSubmit(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Afficher un message de succès simulé
  showSuccessMessage(form);

  // Réinitialiser le formulaire
  setTimeout(() => {
    form.reset();
  }, 2000);
}

function showSuccessMessage(form) {
  // Chercher ou créer une alerte
  let alertElement = form.parentElement.querySelector('.alert-success');

  if (!alertElement) {
    alertElement = document.createElement('div');
    alertElement.className = 'alert alert-success';
    form.parentElement.insertBefore(alertElement, form);
  }

  alertElement.textContent = '✓ Votre message a été envoyé avec succès ! Nous vous recontacterons très bientôt.';
  alertElement.classList.remove('hidden');

  // Masquer après 5 secondes
  setTimeout(() => {
    alertElement.classList.add('hidden');
  }, 5000);
}

/* ========================================
   ANIMATIONS AU SCROLL
   ======================================== */
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Animer les cartes
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    observer.observe(card);
  });

  // Animer les sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    if (index % 2 === 0) {
      section.classList.add('animate-slide-left');
    } else {
      section.classList.add('animate-slide-right');
    }
  });
}

/* ========================================
   UTILITAIRE : SMOOTHSCROLL À UN ÉLÉMENT
   ======================================== */
function scrollToElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ========================================
   UTILITAIRE : FORMATER LES NOMBRES
   ======================================== */
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

/* ========================================
   UTILITAIRE : COPIER DANS LE PRESSE-PAPIERS
   ======================================== */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copié dans le presse-papiers');
  }).catch(err => {
    console.error('Erreur lors de la copie', err);
  });
}

/* ========================================
   GALERIE LIGHTBOX
   ======================================== */
function initializeLightbox() {
  const lightboxLinks = document.querySelectorAll('[data-lightbox]');

  lightboxLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      openLightbox(this.href);
    });
  });

  // Fermer la lightbox avec la touche Échap
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

function openLightbox(imageSrc) {
  let lightbox = document.querySelector('.lightbox');

  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close">&times;</button>
        <img src="" alt="" class="lightbox-image">
      </div>
    `;
    document.body.appendChild(lightbox);

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  lightbox.querySelector('.lightbox-image').src = imageSrc;
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
  }
}

/* ========================================
   COMPTEUR DE STATISTIQUES
   ======================================== */
function initializeCounters() {
  const counters = document.querySelectorAll('.counter');

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const speed = parseInt(counter.getAttribute('data-speed')) || 50;

        animateCounter(counter, target, speed);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target, speed) {
  let current = 0;
  const increment = target / speed;

  const updateCounter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = formatNumber(target);
      clearInterval(updateCounter);
    } else {
      element.textContent = formatNumber(Math.floor(current));
    }
  }, 30);
}

/* ========================================
   CHARGEMENT PARESSEUX DES IMAGES
   ======================================== */
function initializeLazyLoading() {
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, observerOptions);

    lazyImages.forEach(img => observer.observe(img));
  }
}

/* ========================================
   INITIALISATION GLOBALE AU CHARGEMENT
   ======================================== */
window.addEventListener('load', function () {
  initializeLightbox();
  initializeCounters();
  initializeLazyLoading();
});
