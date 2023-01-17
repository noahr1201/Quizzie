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
    document.getElementById("nummer1").innerHTML = "..."; 
    document.getElementById("nummer2").innerHTML = "...";
    document.getElementById("nummer3").innerHTML = "...";
    document.getElementById("nummer4").innerHTML = "...";
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
    console.log("correct");
    document.getElementById("textheader").innerHTML = "je hebt "+totaal+" punten"
  }else if (quistion>=4){
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

