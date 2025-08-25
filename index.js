document.addEventListener('DOMContentLoaded', () => {
  // smooth scroll nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // text scrolling / fading
  const texts = ["Web Developer", "Competetive Programmer", "Tech Enthusiast"];
  let index = 0;
  const span = document.querySelector(".hero-subtitle-highlight");

  if (span) {   //  extra safety
    setInterval(() => {
      span.style.opacity = 0; // fade out
      setTimeout(() => {
        index = (index + 1) % texts.length;
        span.textContent = texts[index];
        span.style.opacity = 1; // fade in
      }, 500);
    }, 2500);
  }
});

// scroll efffect-//
const slideInElements = document.querySelectorAll('.slide-in-element');

const observerOptions = {
  root: null, // relative to viewport
  rootMargin: '0px',
  threshold: 0.1 // trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the class to start the slide-in effect
      entry.target.classList.add('is-visible');
      
      // Stop observing once the element is visible
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Start observing all elements
slideInElements.forEach(element => {
  observer.observe(element);
});



