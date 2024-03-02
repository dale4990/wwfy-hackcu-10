function submitOnClick() {
    // Update `text` with the current value from the textbox
    text = document.getElementById('textbox').value;
    console.log(text);

    // Create a new instance of SpeechSynthesisUtterance with the updated `text`
    const utterance = new SpeechSynthesisUtterance(text);

    // Optional: Attempt to set the voice to Aaron US if available
    speechSynthesis.onvoiceschanged = function() {
    // Now it's safe to call speechSynthesis.getVoices()
    // Optional: Set the voice to Aaron US if available
    voices = speechSynthesis.getVoices();
    };
    const aaronVoice = voices.find(voice => voice.name === "Aaron");
    if (aaronVoice) {
        utterance.voice = aaronVoice;
    }

    // Optional: Set other properties
    utterance.pitch = 1; // Range between 0 and 2
    utterance.rate = 1; // Range between 0.1 and 10
    utterance.volume = 1; // Range between 0 and 1

    // Speak the text
    speechSynthesis.speak(utterance);
}

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener("click", submitOnClick);
