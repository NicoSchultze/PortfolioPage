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
  const iconImg = document.getElementById('icon-img');
  const middleArrowImages = document.querySelectorAll('.middle-arrow');
  const rightArrowImages = document.querySelectorAll('.right-arrow');
  const githubIcon = document.querySelector('.github-icon');
  const linkedinIcons = document.querySelectorAll('.linkedin-icon');
  const emailIcon = document.querySelector('.email-icon');
  const studyIcon = document.querySelector('.study-icon');
  const experienceIcon = document.querySelector('.experience-icon');


  let imgSrc;
  let arrowSrc;
  let githubSrc;
  let linkedinSrc;
  let emailSrc;
  let studySrc;
  let experienceSrc;

  if (isDarkMode) {
    imgSrc = 'assets/SVG/sun.svg'; // Dark mode icon
    arrowSrc = 'assets/img/arrow-white.png'; // Dark mode arrow icon
    githubSrc = 'assets/SVG/github-white.svg';
    linkedinSrc = 'assets/SVG/linked-white.svg';
    emailSrc = 'assets/img/email-white.png';
    studySrc = 'assets/img/study-white.png';
    experienceSrc = 'assets/img/experience-white.png';
  } else {
    imgSrc = 'assets/SVG/moon.svg'; // Light mode icon
    arrowSrc = 'assets/img/arrow-black.png'; // light mode arrow icon
    githubSrc = 'assets/SVG/github-black.svg';
    linkedinSrc = 'assets/SVG/linked-black.svg';
    emailSrc = 'assets/img/email-black.png';
    studySrc = 'assets/img/study-black.png';
    experienceSrc = 'assets/img/experience-black.png';
  }

  iconImg.src = imgSrc;
  githubIcon.src = githubSrc;
  emailIcon.src = emailSrc;
  studyIcon.src = studySrc;
  experienceIcon.src = experienceSrc;

  linkedinIcons.forEach((linkIcon) => {
    linkIcon.src = linkedinSrc;
  });

  // Change source for middle arrows
  middleArrowImages.forEach((arrowImage) => {
    arrowImage.src = arrowSrc;
  });

  // Change source for right arrows
  rightArrowImages.forEach((arrowImage) => {
    arrowImage.src = arrowSrc;
  });
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