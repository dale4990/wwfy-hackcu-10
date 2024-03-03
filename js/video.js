let fullText = localStorage.getItem("text");
const wordsDisplayed = 5; // Number of words to display at a time
const msDelayed = 310; 
const sentences = fullText.split(/[.!?]/).filter(sentence => sentence.trim() !== '');
let currentSentenceIndex = 0;
let currentWordIndex = 0;

function ttsOnLoad() {
    const utterance = new SpeechSynthesisUtterance(sentences[currentSentenceIndex]);

    let voices = [];
    
    speechSynthesis.onvoiceschanged = function() {
        voices = speechSynthesis.getVoices();
        const aaronVoice = voices.find(voice => voice.name === "Aaron");
        utterance.voice = aaronVoice;
    };

    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
}

window.addEventListener("pointerdown", ttsOnLoad);

let overlayText = document.querySelector("#overlay-text");

function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);

    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
}

function displayNextWords() {
    if (currentSentenceIndex >= sentences.length) {
        return; 
    }

    const currentSentence = sentences[currentSentenceIndex];
    const words = currentSentence.split(' ');

    while (currentWordIndex < words.length) {
        let endWordIndex = Math.min(currentWordIndex + wordsDisplayed, words.length);
        let text = words.slice(currentWordIndex, endWordIndex).join(' ');
        overlayText.textContent = text;
        speakWord(text); // Trigger TTS for the displayed words
        currentWordIndex = endWordIndex;
        setTimeout(displayNextWords, msDelayed * wordsDisplayed);
        return;
    }

    currentSentenceIndex++;
    currentWordIndex = 0;
    
    setTimeout(displayNextWords, msDelayed * 2); // Add a delay between sentences
}

displayNextWords();

const videoSource = localStorage.getItem("videoSource");
const videoElement = document.querySelector('.Video');
videoElement.src = videoSource;
