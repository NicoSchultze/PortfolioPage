function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode'); // Toggle a class on the body

  const isDarkMode = body.classList.contains('dark-mode');
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const imgSrc = isDarkMode ? 'assets/sun.svg' : 'assets/moon.svg'; // Replace with your SVG file paths
  darkModeToggle.querySelector('img').src = imgSrc;
}

// Optional: Check for the user's preferred mode (light/dark) and set it initially
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  document.body.classList.add('dark-mode'); // Set initial dark mode if preferred
}