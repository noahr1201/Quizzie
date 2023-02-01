function getResults() {

    //CORRECT ANSWERS
    var amountCorrect = 0;
  
    for(var i = 1; i <= 10; i++) {
      var radiosName = document.getElementsByName('vraag'+i);
  
      for(var j = 0; j < radiosName.length; j++) {
        var radiosValue = radiosName[j];
        if(radiosValue.value == "juist" && radiosValue.checked) {
          amountCorrect++;
        }
      }
    }
  document.getElementById('results').innerHTML =
    "Aantal correct: " + amountCorrect;
  
  }