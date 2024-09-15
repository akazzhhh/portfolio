// Smooth scrolling with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const offset = 80; // height of the fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = target.getBoundingClientRect().top;
      const targetPosition = targetRect - bodyRect - offset;

      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });
  });
});

// Dark Mode Toggle
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};

// Optionally: Create a button somewhere to enable dark mode
const darkModeButton = document.createElement('button');
darkModeButton.innerText = 'Toggle Dark Mode';
darkModeButton.classList.add('dark-mode-btn');
document.body.appendChild(darkModeButton);

darkModeButton.addEventListener('click', toggleDarkMode);
