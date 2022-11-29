let boton = document.querySelector("boton");
let tablaUno = document.querySelector("#perimetros");

function perimetroRectangulo (a, b) {
    let base = parseFloat(a);
    let altura = parseFloat(b);
    let perimetro = (base * altura);

    tablaUno.innerHTML=`<tr><th>ENTRADA</th><th>SALIDA</th></tr>`;
    tablaUno.innerHTML+=`<tr><td>${base.toFixed(2)}, ${altura.toFixed(2)}</td><td>${perimetro.toFixed(2)}</td></tr>`;
    
}

perimetroRectangulo(12,4);

/* ---------------------------------------------------------------------------------- */
let numAlumnos=document.querySelector("#numAlumnos");
let formulario=document.querySelector(".formulario");
let tablaDos=document.querySelector("#alumnos");

function listadoNotas () {
    if (numAlumnos.value>=8 && numAlumnos.value<=20) {
        formulario.innerHTML="";
        for (let i=0; i<numAlumnos.value; i++) {
            formulario.innerHTML+=`
            <label>Nombre del alumno: 
                <input type="text" class="nb">
            </label>
            <label>Nota del alumno: 
                <input type="number" class="nt" max="10" min="0">
            </label><br><br>`;
        }
        formulario.innerHTML+=`<input type="button" class="boton" value="Enviar" onclick="enviar()">`;
    } else {
        formulario.innerHTML="Intro valores validos";
    }
}

function enviar () {
    tablaDos.innerHTML=`<br><tr><th>Nombre</th><th>Nota</th></tr>`;
    let nombres=document.querySelectorAll(".nb");
    let notas=document.querySelectorAll(".nt");
    let contador=0;
    for (let f=0; f<nombres.length; f++) {
            tablaDos.innerHTML+=`<tr><td>${nombres[f].value}</td><td>${notas[f].value}</td></tr>`;
            contador+=parseFloat(notas[f].value);
    }
    tablaDos.innerHTML+=`<tr><th>Media</th><td>${(contador/nombres.length)}</td></tr>`;
    
}

/* ---------------------------------------------------------------------------------- */
function comprobar (arr) {
    let p1 = arr[0].toLowerCase().split(""); //array que contiene las letras [j,a,v,a]
    let p2 = arr[1].toLowerCase(); //palabra almacenada en el array principal
    
    let todoOki = true;
    for (let letra = 0; letra < p2.length && todoOki; letra++) {
        if (!p2.includes(p1[letra])) {todoOki=false;}
    }

    let texto = `<p>¿${arr[0]} contiene todas las letras de ${arr[1]}?<br>`;
    return (todoOki)?`${texto} Resultado: Sí</p>`:`${texto} Resultado: No</p>`;
}

let resul3 = document.querySelector("#resulEj3");
resul3.innerHTML=comprobar(['javascript', 'JavaScript']);
resul3.innerHTML+=comprobar(['java', 'JavaScript']);
resul3.innerHTML+=comprobar(['JavaScript', 'java']);
resul3.innerHTML+=comprobar(['tpircs', 'script']);
resul3.innerHTML+=comprobar(['java', 'avaj']);

/* ---------------------------------------------------------------------------------- */
let resul4 = document.querySelector("#resulEj4");
let fechaCadena = document.querySelector('input[type="date"]');

function calcularFechas () {
    const d = new Date(fechaCadena.value);
    let day = d.getTime();

    const dF = new Date("2022-12-31");
    let dayF = dF.getTime();
    
    let diasRestantes = (dayF-day)/86400000;

    resul4.innerHTML=`<p>Quedan ${parseInt(diasRestantes)} para fin de año</p>`;
}