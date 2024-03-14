function encrypt() {
  let inputText = document.getElementById('inputText').value.toLowerCase();
  let outputText = inputText.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');

  document.getElementById('outputText').value = outputText;
  displayResult(outputText);
}

/*function decrypt() {
  let inputText = document.getElementById('outputText').value.toLowerCase();
  let originalText = inputText.replace(/enter/g, 'e')
                               .replace(/imes/g, 'i')
                               .replace(/ai/g, 'a')
                               .replace(/ober/g, 'o')
                               .replace(/ufat/g, 'u');

  document.getElementById('inputText').value = originalText;
  displayResult(originalText);
}*/

function decrypt() {
  let inputText = document.getElementById('inputText').value.toLowerCase();
  let outputText = inputText.replace(/enter/g, 'e')
                               .replace(/imes/g, 'i')
                               .replace(/ai/g, 'a')
                               .replace(/ober/g, 'o')
                               .replace(/ufat/g, 'u');

  document.getElementById('outputText').value = outputText;
  displayResult(outputText);
}

function displayResult(result) {
  let resultBox = document.getElementById('resultBox');
 outputText.style.backgroundImage = 'none';  // Elimina la imagen de fondo
 outputText.style.color = '#000';  // Cambia el color del texto a negro
}

function copyToClipboard() {
  let outputText = document.getElementById('outputText');
  outputText.select();
  document.execCommand('copy');
  alert('Texto copiado al portapapeles: ' + outputText.value);
}

function resetText() {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
  // Volver a mostrar la imagen del engranaje
  let outputText = document.getElementById('outputText');
  outputText.style.backgroundImage = 'url("images/engranajes.png")';
  outputText.style.backgroundSize = '60%'; // Puedes ajustar esto según tus preferencias
  outputText.style.backgroundRepeat = 'no-repeat';
  outputText.style.backgroundPosition = 'center';
  outputText.style.color = 'transparent'; // Hace que el texto sea transparente para mostrar la imagen de fondo

}
