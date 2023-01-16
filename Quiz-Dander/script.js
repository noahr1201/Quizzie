var i = 0;
var txt = 'welk jaar is pac man gemaakt'; /* The text */
var speed = 90; /* The speed/duration of the effect in milliseconds */
let timeout;
var quistion =0;
var awnser = 0;

function vraag1() {
  timeout = setTimeout(typeWriter, 2000);
}
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("vraagtext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
  }
  
}



function next(){
  quistion++;
  if (quistion==1){
    txt="wie heeft pacman gemaakt";
    awnser = 3;
  }

  if (quistion==2){
    txt="hoe is pacman gemaakt";
  }

  if (quistion==3){
    txt="is er een pacman serie";
  }

}

function writeagain(){
  i=0;
    document.getElementById("vraagtext").innerHTML ="";
    typeWriter();

}
