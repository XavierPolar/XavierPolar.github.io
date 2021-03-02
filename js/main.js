$(document).ready(function(){

// Cambiar el texto 
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("texto_cambio").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "..text/info.txt", true);
  xhttp.send();
}

// Calcular el tamaño de la pantalla
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("tamaño");
x.innerHTML = "Ancho del navegador: " + w + ", alto: " + h + ".";

});