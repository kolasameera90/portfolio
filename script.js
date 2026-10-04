document.addEventListener('DOMContentLoaded', () => {

  const sliderTrack = document.getElementById('slider-track');
  const slideSections = document.querySelectorAll('.slide-section');
  const navLinks = document.querySelectorAll('.nav-link');
  const navLogo = document.querySelector('.nav-logo');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navbar = document.getElementById('navbar');

  // Master Arrows & Control Bar
  const masterPrevBtn = document.getElementById('master-prev-btn');
  const masterNextBtn = document.getElementById('master-next-btn');
  const ctrlPrevBtn = document.getElementById('ctrl-prev-btn');
  const ctrlNextBtn = document.getElementById('ctrl-next-btn');
  const sliderDots = document.querySelectorAll('.slider-dot');
  const currentSlideNumEl = document.getElementById('current-slide-num');

  // Project Carousel Elements
  const projTrack = document.getElementById('projects-track');
  const projPrevArrow = document.getElementById('proj-prev-arrow');
  const projNextArrow = document.getElementById('proj-next-arrow');
  const projIndicator = document.getElementById('proj-indicator');
  const projectCards = document.querySelectorAll('.project-card');

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  // --------------------------------------------------------------------------
  // 2. MASTER SLIDER STATE & NAVIGATION (LEFT ↔ RIGHT)
  // --------------------------------------------------------------------------
  let currentSlide = 0;
  const totalSlides = slideSections.length; // 8 slides (0 to 7)

  const updateMasterControls = () => {
    // Update Slider Track Horizontal Position
    if (sliderTrack) {
      sliderTrack.style.transform = `translateX(-${currentSlide * 100}vw)`;
    }

    // Update Active Slide Section
    slideSections.forEach((section, idx) => {
      if (idx === currentSlide) {
        section.classList.add('active');
        // Reset internal scroll position to top when slide activates
        section.scrollTop = 0;
      } else {
        section.classList.remove('active');
      }
    });

    // Update Header Navigation Active Link
    navLinks.forEach((link, idx) => {
      if (idx === currentSlide) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update Bottom Indicator Dots
    sliderDots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update Slide Counter (e.g., 01 / 08)
    if (currentSlideNumEl) {
      currentSlideNumEl.textContent = String(currentSlide + 1).padStart(2, '0');
    }

    // Update Arrow Disabled States
    const isFirst = currentSlide === 0;
    const isLast = currentSlide === totalSlides - 1;

    if (masterPrevBtn) masterPrevBtn.classList.toggle('disabled', isFirst);
    if (ctrlPrevBtn) ctrlPrevBtn.classList.toggle('disabled', isFirst);

    if (masterNextBtn) masterNextBtn.classList.toggle('disabled', isLast);
    if (ctrlNextBtn) ctrlNextBtn.classList.toggle('disabled', isLast);
  };

  const goToSlide = (targetIndex) => {
    if (targetIndex < 0) targetIndex = 0;
    if (targetIndex >= totalSlides) targetIndex = totalSlides - 1;

    if (targetIndex !== currentSlide) {
      currentSlide = targetIndex;
      updateMasterControls();
    }
  };

  // Initial Control Update
  updateMasterControls();

  // --------------------------------------------------------------------------
  // 3. MASTER NAVIGATION ARROWS & BUTTON LISTENERS
  // --------------------------------------------------------------------------
  // Floating Side Arrows
  if (masterPrevBtn) {
    masterPrevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  }
  if (masterNextBtn) {
    masterNextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  }

  // Bottom Control Bar Buttons
  if (ctrlPrevBtn) {
    ctrlPrevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  }
  if (ctrlNextBtn) {
    ctrlNextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  }

  // Bottom Indicator Dots
  sliderDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const dotIndex = parseInt(dot.getAttribute('data-dot-index'), 10);
      if (!isNaN(dotIndex)) {
        goToSlide(dotIndex);
      }
    });
  });

  // Header Nav Links & Logo Click Handlers
  const handleNavTargetClick = (e, el) => {
    const target = el.getAttribute('data-slide-target');
    if (target !== null && target !== undefined) {
      e.preventDefault();
      closeMobileMenu();
      goToSlide(parseInt(target, 10));
    }
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => handleNavTargetClick(e, link));
  });

  if (navLogo) {
    navLogo.addEventListener('click', (e) => handleNavTargetClick(e, navLogo));
  }

  // Hero "View Projects" Button
  const btnViewProjects = document.getElementById('btn-view-projects');
  if (btnViewProjects) {
    btnViewProjects.addEventListener('click', (e) => handleNavTargetClick(e, btnViewProjects));
  }

  // --------------------------------------------------------------------------
  // 4. KEYBOARD NAVIGATION (Left ↔ Right Arrow Keys)
  // --------------------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    // Avoid interfering when user is typing in form inputs
    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (activeTag === 'input' || activeTag === 'textarea') return;

    if (e.key === 'ArrowRight') {
      goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
      goToSlide(currentSlide - 1);
    }
  });

  // --------------------------------------------------------------------------
  // 5. TOUCH / SWIPE GESTURE SUPPORT ON MOBILE (Left ↔ Right)
  // --------------------------------------------------------------------------
  const sliderViewport = document.getElementById('slider-viewport');
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  if (sliderViewport) {
    sliderViewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    sliderViewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleHorizontalSwipe();
    }, { passive: true });

    const handleHorizontalSwipe = () => {
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      // Only trigger horizontal slide if horizontal gesture is greater than vertical gesture
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
        if (diffX > 0) {
          // Swiped Left -> Move to Next slide
          goToSlide(currentSlide + 1);
        } else {
          // Swiped Right -> Move to Previous slide
          goToSlide(currentSlide - 1);
        }
      }
    };
  }

  // --------------------------------------------------------------------------
  // 6. PROJECTS SECTION - HORIZONTAL CAROUSEL CONTROLLER
  // --------------------------------------------------------------------------
  let currentProject = 0;
  const totalProjects = projectCards.length; // 4 projects

  const updateProjectCarousel = () => {
    if (projIndicator) {
      projIndicator.textContent = `${currentProject + 1} / ${totalProjects}`;
    }

    if (projTrack) {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        // Mobile: 1 card per view (100% width)
        projTrack.style.transform = `translateX(-${currentProject * 100}%)`;
      } else {
        // Desktop / Tablet: scroll smoothly to project
        const cardWidth = projectCards[0] ? projectCards[0].offsetWidth + 20 : 300;
        const maxScroll = Math.max(0, (totalProjects - (window.innerWidth > 1180 ? 4 : 2)));
        const targetScroll = Math.min(currentProject, maxScroll);
        projTrack.style.transform = `translateX(-${targetScroll * cardWidth}px)`;
      }
    }
  };

  if (projNextArrow && projPrevArrow) {
    projNextArrow.addEventListener('click', () => {
      if (currentProject < totalProjects - 1) {
        currentProject++;
      } else {
        currentProject = 0; // Loop around
      }
      updateProjectCarousel();
    });

    projPrevArrow.addEventListener('click', () => {
      if (currentProject > 0) {
        currentProject--;
      } else {
        currentProject = totalProjects - 1; // Loop around
      }
      updateProjectCarousel();
    });
  }

  // Touch Swipe for Projects Carousel on Mobile
  const projViewport = document.getElementById('projects-viewport');
  if (projViewport) {
    let projTouchStartX = 0;
    let projTouchEndX = 0;

    projViewport.addEventListener('touchstart', (e) => {
      projTouchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    projViewport.addEventListener('touchend', (e) => {
      projTouchEndX = e.changedTouches[0].screenX;
      const pDiffX = projTouchStartX - projTouchEndX;
      if (Math.abs(pDiffX) > 40) {
        if (pDiffX > 0 && currentProject < totalProjects - 1) {
          currentProject++;
        } else if (pDiffX < 0 && currentProject > 0) {
          currentProject--;
        }
        updateProjectCarousel();
      }
    }, { passive: true });
  }

  window.addEventListener('resize', updateProjectCarousel, { passive: true });

  // --------------------------------------------------------------------------
  // 7. MOBILE HAMBURGER MENU
  // --------------------------------------------------------------------------
  const toggleMobileMenu = () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('active');
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };

  const closeMobileMenu = () => {
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  };

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. CONTACT FORM VALIDATION & FEEDBACK
  // --------------------------------------------------------------------------
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    const isValidEmail = (emailStr) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(emailStr);
    };

    const setFieldError = (input, errorEl, message) => {
      input.classList.add('is-invalid');
      if (errorEl) {
        if (message) errorEl.textContent = message;
        errorEl.classList.add('active');
      }
    };

    const clearFieldError = (input, errorEl) => {
      input.classList.remove('is-invalid');
      if (errorEl) {
        errorEl.classList.remove('active');
      }
    };

    nameInput.addEventListener('input', () => clearFieldError(nameInput, nameError));
    emailInput.addEventListener('input', () => clearFieldError(emailInput, emailError));
    messageInput.addEventListener('input', () => clearFieldError(messageInput, messageError));

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // 1. Validate Name
      const nameVal = nameInput.value.trim();
      if (!nameVal) {
        setFieldError(nameInput, nameError, 'Please enter your name.');
        isValid = false;
      } else {
        clearFieldError(nameInput, nameError);
      }

      // 2. Validate Email
      const emailVal = emailInput.value.trim();
      if (!emailVal) {
        setFieldError(emailInput, emailError, 'Please enter your email address.');
        isValid = false;
      } else if (!isValidEmail(emailVal)) {
        setFieldError(emailInput, emailError, 'Please enter a valid email format.');
        isValid = false;
      } else {
        clearFieldError(emailInput, emailError);
      }

      // 3. Validate Message
      const messageVal = messageInput.value.trim();
      if (!messageVal) {
        setFieldError(messageInput, messageError, 'Please write your message.');
        isValid = false;
      } else {
        clearFieldError(messageInput, messageError);
      }

      if (!isValid) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Please fill out all required fields with valid details.';
        return;
      }

      // Successful demo submission
      formStatus.className = 'form-status success';
      formStatus.textContent = `Thank you, ${nameVal}! Your message has been received. (To contact Kola Sameera directly, please use the email or phone link provided.)`;

      contactForm.reset();

      setTimeout(() => {
        formStatus.className = 'form-status';
        formStatus.textContent = '';
      }, 7000);
    });
  }

});
