const radio = document.getElementById("radio");
const area = document.getElementById("area");
const boton2 = document.getElementById("boton2");

function calcularArea() {
    area.innerHTML=`<p>el area es: ${Math.PI*Math.pow(radio.value, 2)}</p>`;
}