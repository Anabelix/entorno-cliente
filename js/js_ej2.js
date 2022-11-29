let cel=document.querySelector("#celsius");
let fah=document.querySelector("#fahrenheit");
let inicial = document.querySelector("#valorInicial");
let final = document.querySelector("#valorFinal");
let tabla = document.querySelector(".tabla");
const boton = document.querySelector(".boton");

function conversiones () {
    let resul=0;
    
        let limites = [parseInt(inicial.value), parseInt(final.value)];
        limites.sort((a,b)=> b-a);
        let rango=(limites[0] - limites[1])/9;
        
        if (cel.checked) { //Si selecciona Celsius es que: Fahr a Cel
            tabla.innerHTML=`<tr><th>Fahrenheit</th><th>Celsius</th></tr>`;
            for (let i=0; i<10; i++) {
                resul=((limites[1]-32)*5/9).toFixed(2); //RESULTADO EN CEL
                tabla.innerHTML+=`<tr><td>${limites[1].toFixed(2)} ºF</td><td>${resul} ºC</td></tr>`;
                limites[1]+=rango;
            }
    
        } else { //Selecciona Fahr asi que: Cel a Fahr
            tabla.innerHTML=`<tr><th>Celsius</th><th>Fahrenheit</th></tr>`;
            for (let i=0; i<10; i++) {
                resul=((limites[1]*9/5)+32).toFixed(2); //RESULTADO EN FAHR
                tabla.innerHTML+=`<tr><td>${limites[1].toFixed(2)} ºC</td><td>${resul} ºF</td></tr>`;
                limites[1]+=rango;
            }
        }
}

const equivalencias = {
    "euro" : {
        "dolar" : 0.98,
        "libra" : 0.87,
        "yen" : 144.82
    },
    "dolar" : {
        "euro" : 1.03,
        "libra" : 0.89,
        "yen" : 148.59
    },
    "libra" : {
        "euro" : 1.15,
        "dolar" : 1.12,
        "yen" : 166.96
    },
    "yen" : {
        "euro" : 0.0069,
        "dolar" : 0.0067,
        "libra" : 0.0060
    }
};

let resultado = document.querySelector("#resultado");

function divisas() {
    document.getElementById("resultado").style.padding="1%";
    let cantidad = document.querySelector("#cantidad").value;
    let origen = document.getElementById("origenSelect").value;
    let destino = document.getElementById('destinoSelect').value;
    
    if (cantidad>0 && origen!==destino) {
        let cantidad_convertida=cantidad*equivalencias[origen][destino];
        resultado.innerHTML=`<p>Su conversión es igual a: ${(cantidad_convertida).toFixed(2)} ${destino}.</p>`;
    } else if (origen===destino) {
        resultado.innerHTML=`<p>Su dinero ya está en la divisa deseada</p>`;
    } else {
        resultado.innerHTML=`<p>Introduce una cantidad válida</p>`;
    }
}