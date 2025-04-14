// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create the toggle button element
    const navToggle = document.createElement('button');
    navToggle.className = 'mobile-nav-toggle';
    navToggle.innerHTML = '<i class="bx bx-menu"></i>';
    
    // Add the toggle button to the header
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    header.insertBefore(navToggle, nav);
    
    // Toggle navigation when button is clicked
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      
      // Change icon based on menu state
      const icon = navToggle.querySelector('i');
      if (nav.classList.contains('active')) {
        icon.className = 'bx bx-x';
      } else {
        icon.className = 'bx bx-menu';
      }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        navToggle.querySelector('i').className = 'bx bx-menu';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('nav') && 
          !event.target.closest('.mobile-nav-toggle') && 
          nav.classList.contains('active')) {
        nav.classList.remove('active');
        navToggle.querySelector('i').className = 'bx bx-menu';
      }
    });
  });