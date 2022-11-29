const contenido = document.getElementByClassName("contenido");
function bombillaEncender () {
    document.getElementById("bombilla").style.backgroundImage="url('bombilla_encendida.png')";
}
function bombillaApagar () {
    document.getElementById("bombilla").style.backgroundImage="url('bombilla_apagada.png')";
}