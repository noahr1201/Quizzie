var i = 0;
var txt = 'hier komt een vraag'; /* The text */
var speed = 90; /* The speed/duration of the effect in milliseconds */
let timeout;

function typen() {
  timeout = setTimeout(typeWriter, 3000);
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("vraagtext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}