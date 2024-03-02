let text = "";

function submitOnClick() {
    text = document.getElementById('textbox').value;
    console.log(text);
}

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener("click", submitOnClick)