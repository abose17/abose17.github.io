// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navTrigger = document.querySelector('.nav-trigger');
  const navLinks = document.querySelector('.nav-links');
  
  if (navTrigger) {
    navTrigger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.site-nav') && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  });
  
  // Add fade-in animation to project cards
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('fade-in');
      }
    });
  };
  
  // Initial check
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);
});
