const span = document.getElementById('typing-effect');
const text = "Software Engineer";

let index = 0;

function type() {
  if (index < text.length) {
    span.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

setTimeout(type, 1000);

