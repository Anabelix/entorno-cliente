function reproducirSonidos (tecla) {
    let audio="";
    switch (tecla) {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3") ;
            audio.play();
            break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3") ;
            audio.play();
            break;
        case 's':
            audio = new Audio("sounds/tom-3.mp3") ;
            audio.play();
            break;
        case 'd':
            audio = new Audio("sounds/tom-4.mp3") ;
            audio.play();
            break;
        case 'j':
            audio = new Audio("sounds/snare.mp3") ;
            audio.play();
            break;
        case 'k':
            audio = new Audio("sounds/crash.mp3") ;
            audio.play();
            break;
        case 'l':
            audio = new Audio("sounds/kick-bass.mp3") ;
            audio.play();
            break;
        default:
            break;
    }
}

for (const seleccionado of document.querySelectorAll(".drum")) {
    seleccionado.addEventListener("click", function () {
        let botonInnerHTML = this.innerHTML;
        reproducirSonidos(botonInnerHTML);
        animacionBoton(botonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    reproducirSonidos(event.key);
    animacionBoton(event.key);
});

function animacionBoton (event) {
    let botonPresionado = document.querySelector("."+event);
    botonPresionado.classList.add("pressed");
    setTimeout(function () {
        botonPresionado.classList.remove("pressed");
    }, 100);

}

/* 
//Creamos un objeto nuevo de tipo audio al que le enviamos por parametro la ruta del audio y lo asignamos todo a una variable.
let audio = new Audio("sounds/tom-1.mp3");
audio.play(); //Reproducimos el sonido 
*/

/*JS OBJECT:
    var nombre = {
        propiedad1: valor,
        propiedad2: valor,
        propiedad3: valor,
        propiedad4: valor,
        propiedad5: function () {

        }
    }

    para acceder: nombre.propiedad1
    para acceder a la funcion que esta almacenada como atributo: nombre.propiedadX();

    var houseKeeper1 = {
        name: "Marina",
        nacimiento: "20/12/1999",
        puesto: "limpieza",
        idiomas: ["Ingles", "Español"],
        añosExperiencia: 5,

    }
*/