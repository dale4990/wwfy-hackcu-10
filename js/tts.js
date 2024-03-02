const text = "GOOD MEME YOU AIN'T DOING YOUR HOMEWORK BOY!!!!"; // Text you want to convert to speech

// Create a new instance of SpeechSynthesisUtterance
const utterance = new SpeechSynthesisUtterance(text);

// Optional: Set the voice to Aaron US if available
speechSynthesis.getVoices().forEach(voice => {
  if (voice.name === "Aaron (en-US)") {
    utterance.voice = voice;
  }
});

// Optional: Set other properties
utterance.pitch = 1; // Range between 0 and 2
utterance.rate = 1; // Range between 0.1 and 10
utterance.volume = 1; // Range between 0 and 1

// Speak the text
speechSynthesis.speak(utterance);