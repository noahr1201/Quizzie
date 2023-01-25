
function antwoord(){
    vraag1 = document.getElementById("vraag1").value;
    vraag2 = document.getElementById("vraag2").value;
    vraag3 = document.getElementById("vraag3").value;
    vraag4 = document.getElementById("vraag4").value;
    vraag5 = document.getElementById("vraag5").value;
    vraag6 = document.getElementById("vraag6").value;
    vraag7 = document.getElementById("vraag7").value;
    vraag8 = document.getElementById("vraag8").value;
    vraag9 = document.getElementById("vraag9").value;
    vraag10 = document.getElementById("vraag10").value;
    naam = document.getElementById("name").value;

    if (vraag1 == "Watermeloen" || vraag1 == "watermeloen" || vraag2 == "21 april 2010" || vraag2 == "21 April 2010" || vraag3 == "Halfbrick" || vraag3 == "halfbrick" || vraag4 == "Ja" || vraag4 == "ja" || vraag5 == "Ja" || vraag5 == "ja" || vraag6 == "15" || vraag6 == "vijftien" || vraag7 == "Ja" || vraag7 == "ja" || vraag8 == "Ja" || vraag8 == "ja" || vraag9 == "Arcade" || vraag9 == "arcade" || vraag10 == "200.000" || vraag10 == "200000"){
        alert("Je hebt het goed!" + " " + naam);
    }else{
        alert("Je hebt een of meerdere fouten!" + " " + naam);
        alert("Wil je de antwoorden zien? Druk dan op 'Zie antwoorden'" + " " + naam);
    }
}

function zieantwoord(){
    alert(" Vraag 1: Watermeloen \n Vraag 2: 21 april 2010 \n Vraag 3: Halfbrick \n Vraag 4: Ja \n Vraag 5: Ja \n Vraag 6: 15 \n Vraag 7: Ja \n Vraag 8: Ja \n Vraag 9: Arcade \n Vraag 10: 200.000");
}