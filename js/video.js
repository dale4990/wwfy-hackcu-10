let fullText = "New pipeline structure: F, DS, IS, EX, WB DS from fetch to the scoreboard (no scoreboard or WAW) -> stallIS for functional units. RAW -> read registers, go directly to EX EX: notify scoreboard when done WB: WAR hazard -> wait"
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



