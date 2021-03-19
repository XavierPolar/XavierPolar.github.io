$(document).ready(function(){

// Cambiar el texto 
function loadDoc() {
  var peticion = new XMLHttpRequest();
  url = 'http://polarxavier.me/text/info.html';
  peticion.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("texto_cambio").innerHTML =
      this.responseText;
      $("#id_ajax").hide(1000);
      $("#texto_cambio").show(1000);
      // $("#id_ajax").hide();
    }

  };
  peticion.open("GET", url, true);
  peticion.send();
}
document.getElementById("id_ajax").addEventListener("click", function(){loadDoc();});

let sugerencias
(function($){
  sugerencias = (sugerencias) =>{
    var peticion;
    url = "http://polarxavier.me/text/lista.php?q=";
    x= document.getElementsById("txt1");
    x.value = str;
    console.log(x);
    console.log( document.getElementsById("txt1"));
    if (str.length == 0){
      document.getElementsById("sugerencias").innerHTML = "";
      return;
    }
    peticion = new XMLHttpRequest();
    peticion.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) 
        document.getElementsById("sugerencia").innerHTML = this.responseText;
    };
    peticion.open("GET", ulr+str, true);
    peticion.send();

   }
})(jQuery)

  

// document.getElementById("sugerencia").addEventListener("keyup", function(){mostrar_sugerencias(str);});

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