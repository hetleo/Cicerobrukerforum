// public/js/main.js

// Function to toggle active tab for schedule page
function openTab(evt, tabName) {
    // Hide all tab content
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("active");
    }
  
    // Remove active class from all tab buttons
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active");
    }
  
    // Show the selected tab content and add active class to the button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }
  
  // Form validation for contact page
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
          alert('Please fill in all required fields.');
          return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          return;
        }
        
        // If validation passes, show success message
        // In a real application, you would send the form data to a server
        alert('Form submitted successfully! We will contact you soon.');
        contactForm.reset();
      });
    }
  
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Add animation for cards
    const animateOnScroll = function() {
      const cards = document.querySelectorAll('.card');
      
      cards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
          card.classList.add('animated');
        }
      });
    };
    
    // Initial check for elements in view
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Mobile menu toggle
    const setupMobileMenu = function() {
      // Check if we need to create a mobile menu button
      const nav = document.querySelector('nav');
      const header = document.querySelector('header .container');
      
      if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
        // Create and add mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
        mobileMenuBtn.setAttribute('aria-label', 'Toggle mobile menu');
        
        // Insert before nav
        header.insertBefore(mobileMenuBtn, nav);
        
        // Add click event
        mobileMenuBtn.addEventListener('click', function() {
          nav.classList.toggle('active');
          this.classList.toggle('active');
        });
      } else if (window.innerWidth > 768 && document.querySelector('.mobile-menu-btn')) {
        // Remove mobile menu button on larger screens
        document.querySelector('.mobile-menu-btn').remove();
        nav.classList.remove('active');
      }
    };
    
    // Initial setup
    setupMobileMenu();
    
    // Update on window resize
    window.addEventListener('resize', setupMobileMenu);
    
    // Countdown timer for homepage if it exists
    const countdownElement = document.querySelector('.countdown');
    if (countdownElement) {
      // Set the conference date - April 15, 2025
      const conferenceDate = new Date('April 15, 2025 09:00:00').getTime();
      
      // Update the countdown every second
      const countdownTimer = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the conference date
        const distance = conferenceDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        countdownElement.innerHTML = `
          <div class="countdown-item">
            <span class="countdown-number">${days}</span>
            <span class="countdown-label">Days</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number">${hours}</span>
            <span class="countdown-label">Hours</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number">${minutes}</span>
            <span class="countdown-label">Minutes</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number">${seconds}</span>
            <span class="countdown-label">Seconds</span>
          </div>
        `;
        
        // If the countdown is over, display a message
        if (distance < 0) {
          clearInterval(countdownTimer);
          countdownElement.innerHTML = "The conference has started!";
        }
      }, 1000);
    }
  });
  
  // Add additional CSS styles for the animations and mobile menu
  const addStyles = function() {
    const style = document.createElement('style');
    style.textContent = `
      .card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      
      .card.animated {
        opacity: 1;
        transform: translateY(0);
      }
      
      .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        padding: 10px;
      }
      
      .mobile-menu-btn span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: var(--primary-color);
        margin: 5px 0;
        transition: all 0.3s;
      }
      
      .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      
      .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
      }
      
      .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }
      
      .countdown {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 40px 0;
      }
      
      .countdown-item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .countdown-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--primary-color);
      }
      
      .countdown-label {
        font-size: 0.9rem;
        color: var(--text-color);
      }
      
      @media (max-width: 768px) {
        .mobile-menu-btn {
          display: block;
          position: absolute;
          right: 20px;
          top: 20px;
        }
        
        nav {
          width: 100%;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        
        nav.active {
          max-height: 300px;
        }
        
        nav ul {
          flex-direction: column;
          align-items: center;
        }
        
        nav ul li {
          margin: 10px 0;
        }
        
        .countdown {
          flex-wrap: wrap;
        }
      }
    `;
    document.head.appendChild(style);
  };
  
  // Call the function to add styles
  document.addEventListener('DOMContentLoaded', addStyles);