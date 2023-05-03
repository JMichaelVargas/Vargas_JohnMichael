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

// Email JS
function validate() {
  let name1 = document.querySelector(".name1");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name1.value === "" || email.value === "" || msg.value === "") {
      emptyerror();
    } else {
      sendmail(name1.value, email.value, msg.value);
      success();
    }
  });
}

function sendmail(name1, email, msg) {
  emailjs.send("service_7dhdhbt", "template_gceucwk", {
    to_name: name1,
    from_name: email,
    message: msg,
  }).then((response) => {
    console.log("SUCCESS!", response.status, response.text);
  }, (error) => {
    console.log("FAILED...", error);
  });
}

function emptyerror() {
  swal({
    title: "Oh No...",
    text: "Fields Cannot Be Empty",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Email Sent Successfully",
    text: "We will try to reply within 24hrs",
    icon: "success",
  });
}