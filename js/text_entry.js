localStorage.setItem("text", "");

function submitOnClick() {
    let text = localStorage.getItem("text");
    if (text === "") {
        console.log(document.getElementById('textbox').value);
        localStorage.setItem("text", document.getElementById('textbox').value);
    }
    console.log(localStorage.getItem("text"));
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
      localStorage.setItem("text", fr.result);
      console.log(localStorage.getItem("text"));
    }
    
    fr.onerror = () => {
      console.log(fr.error)
    }

});