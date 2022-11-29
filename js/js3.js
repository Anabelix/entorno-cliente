const contenido = document.getElementsByTagName("contenido");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("email");
const texto = document.getElementById("texto");
const boton = document.getElementsByTagName("boton");

function escribir () {
    texto.innerHTML=`<p>El nombre es: <span>${nombre.value}</span> y el correo es: <span>${correo.value}</span></p>`;
    document.getElementById("texto").style.padding="1%";
}

const radio = document.getElementById("radio");
const area = document.getElementById("area");

function calcularArea() {
    area.innerHTML=`<p>El área de tu circunferencia es: <span>${(Math.PI*Math.pow(radio.value, 2)).toFixed(2)}</span></p>`;
    document.getElementById("area").style.padding="1%";
}


const edad_uno = document.getElementById("edad_uno");
const edad_dos = document.getElementById("edad_dos");
const edad_tres = document.getElementById("edad_tres");
const edad_cuatro = document.getElementById("edad_cuatro");
const edades = document.getElementById("edades");

function calcularEdad() {
    let edadesArray = [edad_uno.value, edad_dos.value, edad_tres.value, edad_cuatro.value];
    edadesArray.sort(function compare(a,b) {return a-b});
    edades.innerHTML=`<p>Edades ordenadas de manera ascendente: <span>${edadesArray}</span></p>`;

    let menor = edadesArray[0];
    let mayor = edadesArray[edadesArray.length-1];
    let suma = parseInt(menor)+parseInt(mayor);
    edades.innerHTML+=`<p>Suma: <span>${menor} + ${mayor} = ${suma}</span></p>`;

    let segundo = edadesArray[1];
    let tercero = edadesArray[2];
    let producto = parseInt(segundo)*parseInt(tercero);
    edades.innerHTML+=`<p>Producto: <span>${tercero} * ${segundo} = ${producto}</span></p>`;
    document.getElementById("edades").style.padding="1%";
}


const lado = document.getElementById("lado");
const perimetro = document.getElementById("perimetro");

function calcularPerimetro() {
    perimetro.innerHTML=`<p>El perímetro es: <span>${lado.value*4}</span></p>`;
    document.getElementById("perimetro").style.padding="1%";
}


const precio = document.getElementById("precio");
const cantidad = document.getElementById("cantidad");
const cuenta = document.getElementById("cuenta");

function calcularCuenta() {
    cuenta.innerHTML=`<p>El total a pagar es: <span>${precio.value*cantidad.value}</span></p>`;
    document.getElementById("cuenta").style.padding="1%";
}