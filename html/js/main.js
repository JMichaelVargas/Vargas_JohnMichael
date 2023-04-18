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


function loadSection(sectionId, htmlFile) {
  const section = document.querySelector(`#${sectionId}`);
  fetch(htmlFile)
    .then(response => response.text())
    .then(data => {
      section.innerHTML = data;
    });
}

  // Hidden Section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe (el));

// About Section Education
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
  if(e.target.classList.contains("tab-items") && !e.target.classList.contains("active")){
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});