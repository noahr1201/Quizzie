let i = 0;
let txt = ''; /* The text */
let speed = 90;
let delay = 700; /* The speed/duration of the effect in milliseconds */
let timeout;
let quistion =0;
let awnser = 0;
let totaal = 0;
let awnser1 = document.getElementById('knop1');
let awnser2 = document.getElementById('knop2');
let awnser3 = document.getElementById('knop3');
let awnser4 = document.getElementById('knop4');
console.log(quistion);
console.log(awnser);



function onClick(num){
  // anwoord4();
  awnser = num;
  next();
  writeagain2(); 
  correct1();
}



function vraag1() {
  timeout = setTimeout(typeWriter, 2000);
}
function typeWriter() {
  if (i < txt.length) {
    if (i == 40 || i == 80 || i==120) {
      document.getElementById("vraagtext").innerHTML += ',<br/>';
    }
    let audio = new Audio('../media/media-Dander/gameboy-pluck-41265.mp3');
audio.play();

    document.getElementById("vraagtext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
  }
  
}

function writeagain2() {
  timeout = setTimeout(writeagain, delay);
}

function writeagain(){
  i=0;
    document.getElementById("vraagtext").innerHTML ="";
    typeWriter();

}

function vraagdeeleen(){
  document.getElementById("nummer1").innerHTML = "+"; 
    document.getElementById("nummer2").innerHTML = "-";
    document.getElementById("nummer3").innerHTML = "-";
    document.getElementById("nummer4").innerHTML = "-";
    txt="welk jaar is pacman gemaakt"; 
}



function next(){
  quistion++;
  console.log(quistion);
  if (quistion==1){
    txt="wie heeft pacman gemaakt"; 
    document.getElementById("nummer1").innerHTML = "-"; 
    document.getElementById("nummer2").innerHTML = "-";
    document.getElementById("nummer3").innerHTML = "+";
    document.getElementById("nummer4").innerHTML = "-";
  }

  if (quistion==2){
    txt="hoe is pacman gemaakt";
    document.getElementById("nummer1").innerHTML = "-"; 
    document.getElementById("nummer2").innerHTML = "+";
    document.getElementById("nummer3").innerHTML = "-";
    document.getElementById("nummer4").innerHTML = "-";
  }

  if (quistion==3){
    txt="is er een pacman serie";
    document.getElementById("nummer1").innerHTML = "-"; 
    document.getElementById("nummer2").innerHTML = "-";
    document.getElementById("nummer3").innerHTML = "-";
    document.getElementById("nummer4").innerHTML = "+";
  }

  if (quistion==4){
    txt="de quiz is klaar";
    document.getElementById("nummer1").innerHTML = "info"; 
    document.getElementById("nummer2").innerHTML = "info";
    document.getElementById("nummer3").innerHTML = "info";
    document.getElementById("nummer4").innerHTML = "info";
  }

  if (quistion==5){
    document.getElementById("vraagtext").style.fontSize = "3vw";
    txt="nu kan je lezen over de guiz en de maker";
    document.getElementById("nummer1").innerHTML = "next"; 
    document.getElementById("nummer2").innerHTML = "next";
    document.getElementById("nummer3").innerHTML = "next";
    document.getElementById("nummer4").innerHTML = "next";
  }

  if (quistion==6){
    document.getElementById("vraagtext").style.fontSize = "3vw";
    txt="deze quiz is gemaakt door Dander Siegers uit klas D1B";
    document.getElementById("nummer1").innerHTML = "next"; 
    document.getElementById("nummer2").innerHTML = "next";
    document.getElementById("nummer3").innerHTML = "next";
    document.getElementById("nummer4").innerHTML = "next";
  }

  if (quistion==7){
    document.getElementById("vraagtext").style.fontSize = "3vw";
    txt="de quiz ging over pacman. pacman is een oude game uit de jaren 80. In het spel moet je allen snoepjes eten terwijl je de spokjes moet ontwijken. ";
    document.getElementById("nummer1").innerHTML = "next"; 
    document.getElementById("nummer2").innerHTML = "next";
    document.getElementById("nummer3").innerHTML = "next";
    document.getElementById("nummer4").innerHTML = "next";
  }

  if (quistion==8){
    document.getElementById("textheader").innerHTML = "home"
    txt="klaar";
    document.getElementById("nummer1").innerHTML = "..."; 
    document.getElementById("nummer2").innerHTML = "...";
    document.getElementById("nummer3").innerHTML = "...";
    document.getElementById("nummer4").innerHTML = "...";
    textnormaal2();
  }

}

function textnormaal2() {
  timeout = setTimeout(textnormaal, delay);
}

function textnormaal(){
  document.getElementById("vraagtext").style.fontSize = "4vw";
}




function correct1(){
  if (quistion==1&& awnser == 1){
    totaal++;
    console.log(totaal);
    console.log("correct");
  }else if (quistion==2&& awnser == 3){
    totaal++;
    console.log(totaal);
    console.log("correct");
  }else if (quistion==3&& awnser == 2){
    totaal++;
    console.log(totaal);
    console.log("correct");
  }else if (quistion==4&& awnser == 4){
    totaal++;
    console.log("correct");
    document.getElementById("textheader").innerHTML = "je hebt "+totaal+" punten"
  }else if (quistion==4){
    document.getElementById("textheader").innerHTML = "je hebt "+totaal+" punten"
  }else{
    console.log("incorrect");
  }
  

}


// function anwoord1()
// {
//   awnser =1;
// }

// function anwoord2()
// {
//   awnser =2;
// }

// function anwoord3()
// {
//   awnser =3;
// }

// function anwoord4()
// {
//   awnser =4;
// }

