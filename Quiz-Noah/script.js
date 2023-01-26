
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
    punten = 0;

    if (vraag1 == "Watermeloen" || vraag1 == "watermeloen"){
        alert("Je hebt vraag 1 goed!" + " " + naam + "" + " " + "Je hebt 1 punt verdiend!");
        punten ++;
    }else{
        alert("Vraag 1 is fout!" + " " + naam)
    }
    if (vraag2 == "21 april 2010" || vraag2 == "21 April 2010"){
        alert("Je hebt vraag 2 goed!" + " " + naam + "" + " " + "Je hebt 1 punt verdiend!");
        punten ++;
    }else{
        alert("Vraag 2 is fout!" + " " + naam)
    }
    if (vraag3 == "Halfbrick" || vraag3 == "halfbrick"){
        alert("Je hebt vraag 3 goed!" + " " + naam + "" + " " + "Je hebt 1 punt verdiend!");
        punten ++;
    }else{
        alert("Vraag 3 is fout!" + " " + naam)
    }
    if (vraag4 == "Ja" || vraag4 == "ja"){
        alert("Je hebt vraag 4 goed!" + " " + naam + "" + " " + "Je hebt 1 punt verdiend!");
        punten ++;
    }else{
        alert("Vraag 4 is fout!" + " " + naam)
    }
    if (vraag5 == "Ja" || vraag5 == "ja"){
        alert("Je hebt vraag 5 goed!" + " " + naam + "" + " " + "Je hebt 1 punt verdiend!");
        punten ++;
    } else{
        alert("Vraag 5 is fout!" + " " + naam)
    }
    if (vraag6 == "15" || vraag6 == "vijftien"){
        alert("Je hebt vraag 6 goed!" + " " + naam + "" + " " + "Je hebt 1 punt verdiend!");
        punten ++;
    } else{
        alert("Vraag 6 is fout!" + " " + naam)
    }
    if (vraag7 == "Ja" || vraag7 == "ja"){
        alert("Je hebt vraag 7 goed!" + " " + naam + "" + " " + "Je hebt 1 punt verdiend!");
        punten ++;
    } else{
        alert("Vraag 7 is fout!" + " " + naam)
    }
    if (vraag8 == "Ja" || vraag8 == "ja"){
        alert("Je hebt vraag 8 goed!" + " " + naam + "" + " " + "Je hebt 1 punt verdiend!");
        punten ++;
    } else{
        alert("Vraag 8 is fout!" + " " + naam)
    }
    if (vraag9 == "Arcade" || vraag9 == "arcade"){
        alert("Je hebt vraag 9 goed!" + " " + naam + "" + " " + "Je hebt 1 punt verdiend!");
        punten ++;
    } else{
        alert("Vraag 9 is fout!" + " " + naam)
    }
    if (vraag10 == "200.000" || vraag10 == "200000"){
        alert("Je hebt vraag 10 goed!" + " " + naam + "" + " " + "Je hebt 1 punt verdiend!");
        punten ++;
    }else{
        alert("Vraag 10 is fout!" + " " + naam)
    }
    alert("Je hebt" + " " + punten + " " + "punten behaald!" + " " + naam);
    document.getElementById("punten").innerHTML = punten + " " + "Punten";
}

function zieantwoord(){
    alert(" Vraag 1: Watermeloen \n Vraag 2: 21 april 2010 \n Vraag 3: Halfbrick \n Vraag 4: Ja \n Vraag 5: Ja \n Vraag 6: 15 \n Vraag 7: Ja \n Vraag 8: Ja \n Vraag 9: Arcade \n Vraag 10: 200.000");
}