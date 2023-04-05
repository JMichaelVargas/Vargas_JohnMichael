const jobTitle = document.querySelector('.job');

// trigger the typing effect on page load
window.onload = function() {
  jobTitle.classList.add('typing');
};

// trigger the typing effect on button click
const button = document.querySelector('button');
button.addEventListener('click', function() {
  jobTitle.classList.add('typing');
});


const section = document.querySelector('#about-section');

fetch('about.html')
  .then(response => response.text())
  .then(data => {
    section.innerHTML = data;
  });