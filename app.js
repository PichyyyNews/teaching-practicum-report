// Modern Swiss Design System — Interactive logic

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initSmoothScroll();
});

/**
 * Navigation Bar Scroll Effect
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const checkScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.remove('navbar--top');
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
      navbar.classList.add('navbar--top');
    }
  };

  // Initial check
  checkScroll();
  window.addEventListener('scroll', checkScroll);
}

/**
 * Mobile Navigation Menu
 */
function initMobileMenu() {
  const burger = document.querySelector('.navbar__burger');
  const menu = document.querySelector('.mobile-menu');
  const links = document.querySelectorAll('.mobile-menu__link');

  if (!burger || !menu) return;

  const toggleMenu = () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  };

  burger.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      // Close menu when a link is clicked
      burger.classList.remove('active');
      menu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
}

/**
 * Scroll Reveal Animations using IntersectionObserver
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once animated, no need to track again
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    reveals.forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    reveals.forEach(element => {
      element.classList.add('is-visible');
    });
  }
}

/**
 * Stat Counters animation
 */
function initCounters() {
  const stats = document.querySelectorAll('.stat-block__number');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
  } else {
    // Fallback: don't animate, just keep final values
  }
}

function animateCounter(element) {
  const targetAttr = element.getAttribute('data-target');
  const suffix = element.getAttribute('data-suffix') || '';
  if (!targetAttr) return;

  const target = parseFloat(targetAttr);
  const duration = 1500; // ms
  const frameRate = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameRate);
  let currentFrame = 0;

  const updateCounter = () => {
    currentFrame++;
    const progress = currentFrame / totalFrames;
    // EaseOutQuad function
    const easeProgress = progress * (2 - progress);
    const currentValue = Math.round(easeProgress * target);

    if (suffix === '%') {
      element.textContent = `${currentValue}%`;
    } else if (suffix === '+') {
      element.textContent = `${currentValue}+`;
    } else {
      element.textContent = currentValue.toLocaleString();
    }

    if (currentFrame < totalFrames) {
      requestAnimationFrame(updateCounter);
    } else {
      // Set final value precisely
      if (suffix === '%') {
        element.textContent = `${target}%`;
      } else if (suffix === '+') {
        element.textContent = `${target}+`;
      } else {
        element.textContent = target.toLocaleString();
      }
    }
  };

  requestAnimationFrame(updateCounter);
}

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
}
