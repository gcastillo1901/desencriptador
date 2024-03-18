//Función que realiza la encriptación de la palabra o frase ingresada
function encrypt() {
  let inputText = document.getElementById("inputText").value.trim();

  if (inputText === "") {
    let outputText = document.getElementById("outputText");
    outputText.style.backgroundImage = 'url("images/searching.png")';
    outputText.style.backgroundSize = "contain";
    outputText.style.backgroundRepeat = "no-repeat";
    outputText.style.backgroundPosition = "center";
    outputText.style.color = "transparent";
  } else {
    document.getElementById("inputText").value.toLowerCase();
    let outputText = inputText
      .replace(/a/g, "ai")
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    document.getElementById("outputText").value = outputText;
    displayResult(outputText);
  }
}

//Función que realiza la desencriptación de la palabra o frase ingresada
function decrypt() {
  let inputText = document.getElementById("inputText").value.trim();

  if (inputText === "") {
    let outputText = document.getElementById("outputText");
    outputText.style.backgroundImage = 'url("images/searching.png")';
    outputText.style.backgroundSize = "contain";
    outputText.style.backgroundRepeat = "no-repeat";
    outputText.style.backgroundPosition = "center";
    outputText.style.color = "transparent";
  } else {
    let inputText = document.getElementById("inputText").value.toLowerCase();
    let outputText = inputText
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    document.getElementById("outputText").value = outputText;
    displayResult(outputText);
  }
}

function displayResult(result) {
  let resultBox = document.getElementById("resultBox");
  outputText.style.backgroundImage = "none"; 
  outputText.style.color = "#000"; 
}


function copyToClipboard() {
  var outputText = document.getElementById("outputText").value.trim();
  if (outputText === "") {
      alert("No hay texto para copiar.");
      return;
  } else {
      navigator.clipboard.writeText(outputText)
          .then(function() {
              alert("Texto copiado al portapapeles: " + outputText);
          })
          .catch(function(error) {
              console.error("Error al copiar texto al portapapeles: ", error);
              alert("Error al copiar texto al portapapeles. Por favor, inténtalo nuevamente. Disculpa las molestias.");
          });
  }
}


function resetText() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
  // Volver a mostrar la imagen del engranaje
  let outputText = document.getElementById("outputText");
  outputText.style.backgroundImage = 'url("images/engranajes.png")';
  outputText.style.backgroundSize = "60%";
  outputText.style.backgroundRepeat = "no-repeat";
  outputText.style.backgroundPosition = "center";
  outputText.style.color = "transparent";
}
