let parrafo = document.querySelector("p");
function abrir() {
    let confirmacion = prompt("¿Seguro que quieres abrir una ventana nueva? S/N").toUpperCase().substring(0,1);
    if (confirmacion=='S') {
        window.open("https://www.w3schools.com/", "_blank", "width=300, height=200, top=500, left=500");
    } else if (confirmacion=='N') {
        alert("No se abrirá una nueva ventana");
    } else {
        alert("Introduce S o N");
    }
}

function numRandom() {
    let random = Math.floor(Math.random()*4);
    switch (random) {
        case 0:
            window.open("https://www.google.com/intl/es/gmail/about/", "_blank", "width=500, height=500");
            break;
        case 1:
            window.open("https://correoweb.educa.madrid.org/", "_blank", "width=500, height=500");
            break;
        case 2:
            window.open("https://es.yahoo.com/", "_blank", "width=500, height=500");
            break;
        case 3:
            window.open("https://outlook.live.com/owa/", "_blank", "width=500, height=500");
            break;
    }
}

function abrirAlert() {
    let anchoMonitor = window.innerWidth/2;
    let altoMonitor = window.innerHeight/2;
    window.open("https://www.google.es/", "_blank", "width="+anchoMonitor+", height="+altoMonitor);

    if(!navigator.cookieEnabled) alert("Las cookies estás desactivadas");
	else alert("Las cookies estás activadas");
}