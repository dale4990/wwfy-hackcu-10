let fullText = localStorage.getItem("text")
const wordsDisplayed = 4;
const msDelayed = 500;
const words = fullText.split(' ');

let overlayText = document.querySelector("#overlay-text");
for (let i = 0; i < words.length; i+=wordsDisplayed) {
    setTimeout(() => {
            let text = words.slice(i, i + wordsDisplayed).join(' ');
            overlayText.textContent = text;
    }, i * msDelayed);
}



