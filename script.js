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
  const imgSrc = isDarkMode ? 'assets/SVG/sun.svg' : 'assets/SVG/moon.svg'; // Replace with your SVG file paths
  darkModeToggle.querySelector('img').src = imgSrc;
}

// typewriter.js
document.addEventListener("DOMContentLoaded", function() {
  const app = document.getElementById('typewriter');
  const typewriter = new Typewriter(app, {
    loop: true
  });

  typewriter.typeString('Nico Schultze')
    .pauseFor(2000) // Wait for 2 seconds at the end
    .deleteAll() // Delete the text
    .start();
});