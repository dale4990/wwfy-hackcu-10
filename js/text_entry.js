let text = "";

function submitOnClick() {
    if (text === "") {
        text = document.getElementById('textbox').value;
    }
    console.log(text);
}

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener("click", submitOnClick);

let uploadButton = document.querySelector('#upload');
uploadButton.addEventListener("input", function() {
    const file = this.files[0]
  
    let fr = new FileReader()
    
    fr.readAsText(file)
    
    fr.onload = () => {
      console.log(fr.result)
      text = fr.result;
    }
    
    fr.onerror = () => {
      console.log(fr.error)
    }
});