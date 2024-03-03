let fullText = localStorage.getItem("text");
const wordsDisplayed = 6; 
const msDelayed = 280; 
const sentences = fullText.split(/[.!?]/).filter(sentence => sentence.trim() !== '');
let currentSentenceIndex = 0;
let currentWordIndex = 0;

function ttsOnLoad() {
    const currentSentence = sentences[currentSentenceIndex];

    if (!currentSentence || currentSentence.split(' ').length === 1) {
        currentSentenceIndex++;
        ttsOnLoad();
        return;
    }

    const utterance = new SpeechSynthesisUtterance(currentSentence);

    let voices = [];
    
    speechSynthesis.onvoiceschanged = function() {
        voices = speechSynthesis.getVoices();
        const aaronVoice = voices.find(voice => voice.name === "Aaron");
        utterance.voice = aaronVoice;
    };

    utterance.pitch = 1;
    utterance.rate = 1.1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
}


window.addEventListener("load", () => {
    document.body.click();
    ttsOnLoad(); 
});

let overlayText = document.querySelector("#overlay-text");

function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);

    utterance.pitch = 1;
    utterance.rate = 1.1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
}

function displayNextWords() {
    if (currentSentenceIndex >= sentences.length) {
        videoElement.pause();
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
    
    // If there are around 6 words left in the sentence, speak the remaining words
    if (words.length - currentWordIndex <= 6) {
        let remainingWords = words.slice(currentWordIndex).join(' ');
        setTimeout(() => {
            overlayText.textContent = remainingWords;
            speakWord(remainingWords);
        }, msDelayed * remainingWords.split(' ').length); 
    } else {
        setTimeout(displayNextWords, msDelayed * 2); 
    }
}

displayNextWords();

const videoSource = localStorage.getItem("videoSource");
const videoElement = document.querySelector('.Video');
videoElement.src = videoSource;
