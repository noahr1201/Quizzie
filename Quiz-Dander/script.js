var i = 0;
var txt = ''; /* The text */
var speed = 90; /* The speed/duration of the effect in milliseconds */
let timeout;
var quistion =0;
var awnser = 0;
var totaal = 0;
var awnser1 = document.getElementById('knop1');
var awnser2 = document.getElementById('knop2');
var awnser3 = document.getElementById('knop3');
var awnser4 = document.getElementById('knop4');
console.log(quistion);
console.log(awnser);




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

function writeagain2() {
  timeout = setTimeout(writeagain, 1000);
}

function writeagain(){
  i=0;
    document.getElementById("vraagtext").innerHTML ="";
    typeWriter();

}

function vraagdeeleen(){
  document.getElementById("nummer1").innerHTML = "..."; 
    document.getElementById("nummer2").innerHTML = "...";
    document.getElementById("nummer3").innerHTML = "...";
    document.getElementById("nummer4").innerHTML = "...";
    txt="welk jaar is pacman gemaakt"; 
}



function next(){
  quistion++;
  if (quistion==1){
    txt="wie heeft pacman gemaakt"; 
    document.getElementById("nummer1").innerHTML = "jan"; 
    document.getElementById("nummer2").innerHTML = "henk";
    document.getElementById("nummer3").innerHTML = "piet";
    document.getElementById("nummer4").innerHTML = "binchilling";
  }

  if (quistion==2){
    txt="hoe is pacman gemaakt";
    document.getElementById("nummer1").innerHTML = "animatie"; 
    document.getElementById("nummer2").innerHTML = "carton";
    document.getElementById("nummer3").innerHTML = "unreal";
    document.getElementById("nummer4").innerHTML = "unity";
  }

  if (quistion==3){
    txt="is er een pacman serie";
    document.getElementById("nummer1").innerHTML = "ja"; 
    document.getElementById("nummer2").innerHTML = "nee";
    document.getElementById("nummer3").innerHTML = "mischien";
    document.getElementById("nummer4").innerHTML = "PFFFF";
  }

  if (quistion==4){
    txt="je moeder";
    document.getElementById("nummer1").innerHTML = "jan"; 
    document.getElementById("nummer2").innerHTML = "henk";
    document.getElementById("nummer3").innerHTML = "piet";
    document.getElementById("nummer4").innerHTML = "binchilling";
  }

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
    console.log(totaal);
    console.log("correct");
  }else if (quistion>=4){
    console.log(totaal);
  }else{
    console.log("incorrect");
  }
  

}


function anwoord1()
{
  awnser =1;
}

function anwoord2()
{
  awnser =2;
}

function anwoord3()
{
  awnser =3;
}

function anwoord4()
{
  awnser =4;
}

