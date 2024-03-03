localStorage.clear();
localStorage.setItem("text", "");

function submitOnClick() {
    event.preventDefault();
    let text = localStorage.getItem("text");
    if (text === "") {
        console.log(document.getElementById('textbox').value);
        localStorage.setItem("text", document.getElementById('textbox').value);
    }
    console.log(localStorage.getItem("text"));
    window.location.href = "Video.html";
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
      window.location.href = "Video.html";
    }
    
    fr.onerror = () => {
      console.log(fr.error)
    }

});