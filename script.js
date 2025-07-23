// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll for Internal Links
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
}

// Form Submission (using Formspree)
const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you for your message!');
        form.reset();
      } else {
        alert('There was a problem with your submission. Please try again.');
      }
    })
    .catch(error => {
      alert('There was a problem with your submission. Please try again.');
    });
  });
}
