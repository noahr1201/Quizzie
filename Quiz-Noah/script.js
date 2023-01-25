
function antwoord(){
    vraag1 = document.getElementById("vraag1").value;
    vraag2 = document.getElementById("vraag2").value;
    vraag3 = document.getElementById("vraag3").value;
    vraag4 = document.getElementById("vraag4").value;
    vraag5 = document.getElementById("vraag5").value;

    if (vraag1 == "Watermeloen" || vraag1 == "watermeloen" || vraag2 == "21 april 2010" || vraag2 == "21 April 2010" || vraag3 == "Halfbrick" || vraag3 == "halfbrick" || vraag4 == "Ja" || vraag4 == "ja" || vraag5 == "Ja" || vraag5 == "ja"){
        alert("Je hebt het goed!");
    }else{
        alert("Je hebt een of meerdere fouten!");
        alert("Wil je de antwoorden zien? Druk dan op 'Zie antwoorden'")
    }
}

function zieantwoord(){
    alert(" Vraag 1: Watermeloen \n Vraag 2: 21 april 2010 \n Vraag 3: Halfbrick \n Vraag 4: Ja \n Vraag 5: Ja");
}