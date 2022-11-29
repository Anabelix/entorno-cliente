const bt1 = document.querySelector("#bt1");

let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
const apartado1 = document.querySelector("#apartado1");

bt1.addEventListener("click", funcion1);

function funcion1 () {
    let cosa = [parseInt(num1.value), parseInt(num2.value), parseInt(num3.value)];

    cosa.sort((a,b)=> b-a);
    document.querySelectorAll(".resultado")[0].style.display="block";
    apartado1.innerHTML=`${cosa.join(" > ")}`;
}

const boton = document.querySelector(".boton");
const apartado2 = document.getElementById("apartado2");
const numero = document.getElementById("numero");

function cifras () {
    document.querySelectorAll(".resultado")[1].style.display="block";
    apartado2.innerHTML=`<p>${(numero.value).toString().length}</p>`;
}

const apartado3 = document.getElementById("apartado3");
const numero2 = document.getElementById("numero2");

function alReves () {
    let numCadena = numero2.value.toString();
    let final="";

    for (let i=numCadena.length; i>0; i--) {
        final+=numCadena.substring(i, i-1);
    }
    document.querySelectorAll(".resultado")[2].style.display="block";
    apartado3.innerHTML=`<p>${final}</p>`;
}

const apartado4 = document.getElementById("apartado4");
const numero3 = document.getElementById("numero3");

function capicua () {
    let numCadena = numero3.value.toString();
    let final="";

    for (let i=numCadena.length; i>0; i--) {
        final+=numCadena.substring(i, i-1);
    }

    document.querySelectorAll(".resultado")[3].style.display="block";
    apartado4.innerHTML=(numCadena==final)?`<p>Es capicua</p>`:`<p>No es capicua</p>`;
}