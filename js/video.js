let fullText = localStorage.getItem("text")
const wordsDisplayed = 4;
const msDelayed = 500;
const words = fullText.split(' ');

function ttsOnLoad() {

    console.log("test");

    // Create a new instance of SpeechSynthesisUtterance with the updated `text`
    const utterance = new SpeechSynthesisUtterance(fullText);

    let voices = [];
    
    speechSynthesis.onvoiceschanged = function() {
        console.log("test2");
        voices = speechSynthesis.getVoices();
        console.log(voices);
        const aaronVoice = voices.find(voice => voice.name === "Aaron");
        utterance.voice = aaronVoice;
        // console.log(utterance.voice);
    };
    console.log(voices);
    // const aaronVoice = voices.find(voice => voice.name === "Aaron");
    // if (aaronVoice) {
    //     utterance.voice = aaronVoice;
    // }
    console.log("printing utterance voice below")
    console.log(utterance.voice);
    // Optional: Set other properties
    utterance.pitch = 1; // Range between 0 and 2
    utterance.rate = 0.8; // Range between 0.1 and 10
    utterance.volume = 1; // Range between 0 and 1

    // Speak the text
    speechSynthesis.speak(utterance);
}

window.addEventListener("pointerdown", ttsOnLoad);

let overlayText = document.querySelector("#overlay-text");
for (let i = 0; i < words.length; i+=wordsDisplayed) {
    setTimeout(() => {
            let text = words.slice(i, i + wordsDisplayed).join(' ');
            overlayText.textContent = text;
    }, i * msDelayed);
}



