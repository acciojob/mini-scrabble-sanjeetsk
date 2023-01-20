//your code here
let evaluatedText = document.getElementById("evaluatedText");
let letterCount = document.getElementById("letterCount");

evaluatedText.addEventListener("input", calculateLength);

function calculateLength(){
    let word = evaluatedText.value;
    //if you want to remove space 
    // let newWord = word.replaceAll(" ","")
    let wordLength = word.length;
    letterCount.innerHTML = wordLength;
}
