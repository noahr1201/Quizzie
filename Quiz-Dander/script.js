let i = 0;
let txt = ''; /* The text */
let speed = 90;
let delay = 700;
let delay2 = 1000; /* The speed/duration of the effect in milliseconds */
let timeout;
let timeout2;
let timeout3;
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
   

if(i % 2 == 0) { let audio = new Audio('../media/media-Dander/gameboy-pluck-41265.mp3');
audio.play();
  
}

    document.getElementById("vraagtext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
  }
  
}

function writeagain2() {
  timeout2 = setTimeout(writeagain, delay);
}

function writeagain(){
  i=0;
    document.getElementById("vraagtext").innerHTML ="";
    typeWriter();

}

function vraagdeeleen(){
  document.getElementById("nummer1").innerHTML = "1980"; 
    document.getElementById("nummer2").innerHTML = "1990";
    document.getElementById("nummer3").innerHTML = "1975";
    document.getElementById("nummer4").innerHTML = "2010";
    txt="welk jaar is pacman gemaakt"; 
    //wanser=1980
}



function next(){
  quistion++;
  console.log(quistion);
  if (quistion==1){
    txt="wie heeft pacman gemaakt"; 
    document.getElementById("nummer1").innerHTML = "Kichiro"; 
    document.getElementById("nummer2").innerHTML = "Yoshiro";
    document.getElementById("nummer3").innerHTML = "Tōru";
    document.getElementById("nummer4").innerHTML = "Takuya";
    //wanser=Toru
  }

  if (quistion==2){
    txt="hoe idee van is pacman gemaakt";
    document.getElementById("nummer1").innerHTML = "taart diagram"; 
    document.getElementById("nummer2").innerHTML = "pizza";
    document.getElementById("nummer3").innerHTML = "gele M&M";
    document.getElementById("nummer4").innerHTML = "voedbal";
    //wanser=pizza
  }

  if (quistion==3){
    txt="wat het wereld recoor in pac man";
    document.getElementById("nummer1").innerHTML = "492"; 
    document.getElementById("nummer2").innerHTML = "255";
    document.getElementById("nummer3").innerHTML = "364";
    document.getElementById("nummer4").innerHTML = "729";
    //wanser=255
  }
  
  if (quistion==4){
    txt="wat was de eerste game release";
    document.getElementById("nummer1").innerHTML = "Xbox"; 
    document.getElementById("nummer2").innerHTML = "bord spel";
    document.getElementById("nummer3").innerHTML = "game boy";
    document.getElementById("nummer4").innerHTML = "arcade kast";
    //wanser=arcade kast
  }

  if (quistion==5){
    textklijn2();
    txt="hoe veel afleveringen heeft de pac man serie";
    document.getElementById("nummer1").innerHTML = "52"; 
    document.getElementById("nummer2").innerHTML = "12";
    document.getElementById("nummer3").innerHTML = "37";
    document.getElementById("nummer4").innerHTML = "61";
    //wanser=52
  }

  if (quistion==6){
    txt="wat was de orginele naam van pac man";
    document.getElementById("nummer1").innerHTML = "paku-manu"; 
    document.getElementById("nummer2").innerHTML = "pac-man";
    document.getElementById("nummer3").innerHTML = "pach-mon";
    document.getElementById("nummer4").innerHTML = "Puck-Man";
    //wanser=puckman
  }

  if (quistion==7){
    txt="welk fruit eet pac man";
    document.getElementById("nummer1").innerHTML = "perzik"; 
    document.getElementById("nummer2").innerHTML = "kiwi";
    document.getElementById("nummer3").innerHTML = "kers";
    document.getElementById("nummer4").innerHTML = "banaan";
    textnormaal2();
    //wanser=kers
  }

  if (quistion==8){
    textklijn2();
    txt="hoe veel spoken zitten er in pac man";
    document.getElementById("nummer1").innerHTML = "1"; 
    document.getElementById("nummer2").innerHTML = "4";
    document.getElementById("nummer3").innerHTML = "3";
    document.getElementById("nummer4").innerHTML = "2";
    //wanser=4
  }

  if (quistion==9){
    txt="welk land is pac man gemaakt";
    document.getElementById("nummer1").innerHTML = "japan"; 
    document.getElementById("nummer2").innerHTML = "china";
    document.getElementById("nummer3").innerHTML = "VS";
    document.getElementById("nummer4").innerHTML = "belgie";
    textnormaal2();
    //wanser=japan
  }

  if (quistion==10){
    textklijn2();
    txt="hoe veel pac man games zijn er in totaal";
    document.getElementById("nummer1").innerHTML = "10"; 
    document.getElementById("nummer2").innerHTML = "2";
    document.getElementById("nummer3").innerHTML = "6";
    document.getElementById("nummer4").innerHTML = "15";
    //wanser=6
  }

  if (quistion==11){
    txt="de quiz is klaar";
    document.getElementById("nummer1").innerHTML = "info"; 
    document.getElementById("nummer2").innerHTML = "info";
    document.getElementById("nummer3").innerHTML = "info";
    document.getElementById("nummer4").innerHTML = "info";
    textnormaal2();
  }

  if (quistion==12){
    textklijn2();
    txt="nu kan je lezen over de guiz en de maker";
    document.getElementById("nummer1").innerHTML = "next"; 
    document.getElementById("nummer2").innerHTML = "next";
    document.getElementById("nummer3").innerHTML = "next";
    document.getElementById("nummer4").innerHTML = "next";
  }

  if (quistion==13){
    
    txt="deze quiz is gemaakt door Dander Siegers uit klas D1B";
    document.getElementById("nummer1").innerHTML = "next"; 
    document.getElementById("nummer2").innerHTML = "next";
    document.getElementById("nummer3").innerHTML = "next";
    document.getElementById("nummer4").innerHTML = "next";
  }

  if (quistion==14){
    
    txt="de quiz ging over pacman. pacman is een oude game uit de jaren 80. In het spel moet je allen snoepjes eten terwijl je de spokjes moet ontwijken. ";
    document.getElementById("nummer1").innerHTML = "next"; 
    document.getElementById("nummer2").innerHTML = "next";
    document.getElementById("nummer3").innerHTML = "next";
    document.getElementById("nummer4").innerHTML = "next";
  }

  if (quistion==15){
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
  timeout2 = setTimeout(textnormaal, delay);
}

function textnormaal(){
  document.getElementById("vraagtext").style.fontSize = "4vw";
}

function textklijn2(){
  timeout2 = setTimeout(textklijn,delay)
}

function textklijn(){
  document.getElementById("vraagtext").style.fontSize = "3vw";
}




function correct1(){
  if (quistion==1&& awnser == 1){
    totaal++;
    goed();
    remove2()
    console.log(totaal);
    console.log("correct");
  }else if (quistion==2&& awnser == 3){
    totaal++;
    goed();
    remove2()
    console.log(totaal);
    console.log("correct");
  }else if (quistion==3&& awnser == 2){
    totaal++;
    goed();
    remove2()
    console.log(totaal);
    console.log("correct");
  }else if (quistion==4&& awnser == 2){
    totaal++;
    goed();
    remove2()
    console.log(totaal);
    console.log("correct");
  }else if (quistion==5&& awnser == 4){
    totaal++;
    goed();
    remove2()
    console.log(totaal);
    console.log("correct");
  }else if (quistion==6&& awnser == 1){
    totaal++;
    goed();
    remove2()
    console.log(totaal);
    console.log("correct");
  }else if (quistion==7&& awnser == 4){
    totaal++;
    goed();
    remove2()
    console.log(totaal);
    console.log("correct");
  }else if (quistion==8&& awnser == 3){
    totaal++;
    goed();
    remove2()
    console.log(totaal);
    console.log("correct");
  }else if (quistion==9&& awnser == 2){
    totaal++;
    goed();
    remove2()
    console.log(totaal);
    console.log("correct");
  }else if (quistion==10&& awnser == 1){
    totaal++;
    goed();
    remove2()
    console.log(totaal);
    console.log("correct");
  }else if (quistion==11&& awnser == 3){
    totaal++;
    goed();
    remove2()
    console.log("correct");
    document.getElementById("textheader").innerHTML = "je hebt "+totaal+" punten"
  }else if (quistion==11){
    document.getElementById("textheader").innerHTML = "je hebt "+totaal+" punten"
  }else{
    console.log("incorrect");
    fout()
    remove2()
  }
  

}

function remove2() {
  timeout3 = setTimeout(remove, delay2);
}

function goed(){
  document.getElementById('body').classList.add("goed");
  console.log("dit werkt")
}

function fout(){
  document.getElementById('body').classList.add("fout");
  console.log("dit werkt ook")
}
function remove(){
  document.getElementById('body').classList.remove("fout");
  document.getElementById('body').classList.remove("goed");
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

