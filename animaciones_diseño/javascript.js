let teclas=document.querySelectorAll(".blancas");

teclas.forEach(tecla => {
    tecla.addEventListener("click", function(){
        let musica = new Audio('piano.mp3');
        musica.play();
        console.log("Tocado");
    });
});