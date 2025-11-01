// BTECH Premium JavaScript

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  createStarField();
  initializeMobileMenu();
  initializeScrollEffects();
  initializeTypingEffect();
  initializeBanner();
  initializeModal();
  initializeBackToTop();
  initializeNavigation();
}

// ============================================
// STAR FIELD ANIMATION
// ============================================

function createStarField() {
  const container = document.getElementById('stars-container');
  if (!container) return;
  
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    star.style.animationDuration = `${2 + Math.random() * 2}s`;
    container.appendChild(star);
  }
}

// ============================================
// MOBILE MENU
// ============================================

function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  
  if (!mobileMenuBtn || !mobileNav) return;
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu when clicking on links
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenuBtn.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ============================================
// TYPING EFFECT
// ============================================

function initializeTypingEffect() {
  const typingElement = document.getElementById('typingText');
  if (!typingElement) return;
  
  const phrases = [
    "Innovate. Learn. Transform.",
    "Empowering Digital Futures.",
    "Your Tech Journey Starts Here.",
    "Professional Training Programs.",
    "Modern Business Solutions.",
    "Reliable Tech Support.",
    "Earn Money with Tasks."
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (!isDeleting) {
      typingElement.textContent = currentPhrase.slice(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
      }
    } else {
      typingElement.textContent = currentPhrase.slice(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
  
  typeEffect();
}

// ============================================
// SMOOTH SCROLLING & NAVIGATION
// ============================================

function initializeNavigation() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const etaBanner = document.getElementById('etaBanner');
        const header = document.querySelector('header');
        const bannerHeight = etaBanner && !etaBanner.classList.contains('hidden') ? etaBanner.offsetHeight : 0;
        const headerHeight = header.offsetHeight;
        const offsetTop = target.offsetTop - (bannerHeight + headerHeight) - 20;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Header background change on scroll
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.style.background = 'rgba(10, 14, 39, 0.98)';
      header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';
    } else {
      header.style.background = 'rgba(10, 14, 39, 0.9)';
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    }
  });

  // Active navigation highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a, .mobile-nav a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const etaBanner = document.getElementById('etaBanner');
    const bannerHeight = etaBanner?.classList.contains('hidden') ? 0 : etaBanner?.offsetHeight || 0;
    const headerHeight = header.offsetHeight;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - (headerHeight + bannerHeight);
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ============================================
// BANNER FUNCTIONALITY
// ============================================

function initializeBanner() {
  const etaBanner = document.getElementById('etaBanner');
  const closeBanner = document.getElementById('closeBanner');
  const header = document.querySelector('header');
  const mobileNav = document.getElementById('mobileNav');
  const hero = document.querySelector('.hero');
  
  if (!etaBanner || !closeBanner) return;

  function updateLayoutForBanner() {
    const isBannerHidden = etaBanner.classList.contains('hidden');
    header?.classList.toggle('header-no-banner', isBannerHidden);
    mobileNav?.classList.toggle('mobile-nav-no-banner', isBannerHidden);
    hero?.classList.toggle('hero-no-banner', isBannerHidden);
  }
  
  closeBanner.addEventListener('click', () => {
    etaBanner.classList.add('hidden');
    updateLayoutForBanner();
    localStorage.setItem('btechBannerClosed', 'true');
  });

  // Check if banner was previously closed
  if (localStorage.getItem('btechBannerClosed') === 'true') {
    etaBanner.classList.add('hidden');
    updateLayoutForBanner();
  } else {
    // Auto-hide banner after 8 seconds
    setTimeout(() => {
      if (!etaBanner.classList.contains('hidden')) {
        closeBanner.click();
      }
    }, 8000);
  }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initializeScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe elements for scroll animations
  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });

  // Service card interactions
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================

function initializeModal() {
  const modal = document.getElementById('loginModal');
  const openModalBtn = document.getElementById('openModal');
  const closeModalBtn = document.getElementById('closeModal');
  const alertContainer = document.getElementById('alertContainer');
  const loginForm = document.getElementById('loginForm');
  
  if (!modal || !openModalBtn || !closeModalBtn) return;
  
  function showAlert(message, type = 'error') {
    alertContainer.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
    setTimeout(() => {
      alertContainer.innerHTML = '';
    }, 5000);
  }
  
  openModalBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.getElementById('username')?.focus();
    }, 300);
  });
  
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    alertContainer.innerHTML = '';
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      alertContainer.innerHTML = '';
    }
  });

  // Form submission
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username')?.value.trim();
      const password = document.getElementById('password')?.value;
      const submitBtn = document.querySelector('.submit-btn');
      
      // Clear previous alerts
      alertContainer.innerHTML = '';
      
      // Validate format
      const validUsername = /^BTECH#([1-9]|10)$/.test(username);
      const validPassword = password === 'btech.ke';
      
      if (!validUsername) {
        showAlert('Invalid username format. Please use BTECH#1 through BTECH#10');
        document.getElementById('username')?.focus();
        return;
      }
      
      if (!validPassword) {
        showAlert('Incorrect password. Please try again.');
        document.getElementById('password')?.focus();
        return;
      }
      
      // Show loading state
      submitBtn.innerHTML = '<div class="spinner"></div> Authenticating...';
      submitBtn.disabled = true;
      
      // Simulate authentication
      setTimeout(() => {
        showAlert('Login successful! Redirecting to dashboard...', 'success');
        
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 2000);
      }, 1500);
    });
  }
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

function initializeBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  if (!backToTopBtn) return;
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('loginModal');
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (modal?.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      document.getElementById('alertContainer').innerHTML = '';
    }
    
    if (mobileNav?.classList.contains('active')) {
      mobileMenuBtn?.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});

// ============================================
// PREVENT FORM RESUBMISSION
// ============================================

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Performance optimization for scroll events
const optimizedScrollHandler = throttle(() => {
  // Add any additional scroll handling here
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

console.log('🚀 BTECH Premium Website Loaded Successfully!');