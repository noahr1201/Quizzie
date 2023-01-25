let vraag1 = document.getElementsByName("vraag1")
let vraag2 = document.getElementsByName("vraag2")
let vraag3 = document.getElementsByName("vraag3")
let vraag4 = document.getElementsByName("vraag4")
let vraag5 = document.getElementsByName("vraag5")
let vraag6 = document.getElementsByName("vraag6")
let vraag7 = document.getElementsByName("vraag7")
let vraag8 = document.getElementsByName("vraag8")
let vraag9 = document.getElementsByName("vraag9")
let vraag10 = document.getElementsByName("vraag10")

function submit(){
    var checkRadio = document.querySelector('input[id="hpup"]:checked', 'input[id="knuckleduster"]:checked', 'input[id="cybergrind"]:checked', 'input[id="four"]:checked:checked', 'input[id="4"]:checked:checked', 'input[id="memyselfandi"]:checked', 'input[id="5"]:checked', 'input[id="ultrakill"]:checked', 'input[id="sins"]:checked', 'input[id="16"]:checked')
    
    if(checkRadio != null){
        document.getElementById("results").innerHTML = checkRadio.value + "hi"
    }
    
}