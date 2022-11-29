const boton = document.querySelector("input[type='button']");
let ej1 = document.querySelector("#ej1");

function hora(tipo) {
    let horaAhora = new Date ();
    let formato="";

    let horas = horaAhora.getHours()<10?"0"+horaAhora.getHours():horaAhora.getHours();
    let minutos = horaAhora.getUTCMinutes()<10?"0"+horaAhora.getUTCMinutes():horaAhora.getUTCMinutes();
    let segundos = horaAhora.getUTCSeconds()<10?"0"+horaAhora.getUTCSeconds():horaAhora.getUTCSeconds();

    if (tipo==='detallada') {
        formato=horas+":"+minutos+":"+segundos;
        ej1.innerHTML=`<p>Opción detallada: ${formato}</p>`;
    } else {
        formato=horas+":"+minutos;
        formato+=(horas>=0 && horas<=12)?" AM":" PM";
        ej1.innerHTML=`<p>Opción AM/PM: ${formato}</p>`;
    }
}

let ej2 = document.querySelector("#ej2");
let titulo = document.querySelector("#titulo");
let director = document.querySelector("#director");
let year = document.querySelector("#year");

function cadenas () {
    if (titulo.value=='' && director.value=='' && year.value=='') {
        alert("Rellena los campos!!!");
    } else {
        let numtitulo=titulo.value.replaceAll(" ", "").trim().length;
        let numdirector=director.value.replaceAll(" ", "").trim().length;
        ej2.innerHTML=`
        <p>Numero de letras que tiene Titulo y Director sin contar espacios: ${numtitulo+numdirector}</p>
        <p>Título en minúsculas ${titulo.value.toLowerCase()} y en mayúsculas ${titulo.value.toUpperCase()}</p>
        <p>Director en minúsculas ${director.value.toLowerCase()} y en mayúsculas ${director.value.toUpperCase()}</p>
        <ol>
            <li>Título: ${titulo.value}</li>
            <li>Director: ${director.value}</li>
            <li>Año de Estreno: ${year.value}</li>
        </ol>`;

    }
    
}