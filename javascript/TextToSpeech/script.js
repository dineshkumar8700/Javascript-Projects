let speech = new SpeechSynthesisUtterance();
let txt = document.querySelector("textarea")

document.querySelector("button").addEventListener("click", ()=>{
    speech.text = txt.value;
    window.speechSynthesis.speak(speech);
})