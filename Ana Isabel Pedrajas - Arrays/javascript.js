    let botones = document.querySelectorAll(".btn");
    botones.forEach(element => {
        element.addEventListener("click", function() {
            let ciudad=element.value.toLowerCase();
            introDatos(ciudad);
        });
    });

    let array = {
        "sevilla": {"nombres": [], "sueldos":[]},
        "huelva": {"nombres": [], "sueldos":[]},
        "cadiz": {"nombres": [], "sueldos":[]},
    };

    function introDatos (ciudad) {
        console.log("La delegación escogida es: "+ciudad);
        let nombre="";
        let sueldo;

        while (array[ciudad]["nombres"].length<=3 || nombre!="0") {
            nombre=prompt("Intro nombre: ");
            nombre=nombre.charAt(0).toUpperCase()+nombre.slice(1);
            array[ciudad]["nombres"].push(nombre);
            
            sueldo=parseFloat(prompt("Intro sueldo: "));
            array[ciudad]["sueldos"].push(sueldo);
            
            if (nombre=="0" && sueldo==0) {
                array[ciudad]["nombres"].pop();
                array[ciudad]["sueldos"].pop();
            }
        }
    }

    let informe = document.querySelector("#informe");
    function totalEmpleados () {
        for (const key in array) {
            if (Object.hasOwnProperty.call(array, key)) {
                //Total de empleados por delegación:
                let tamañoArray=array[key]["nombres"].length;
                let media=0;
                let tipoOrdenacion;
                let menor;
                let mayor;

                for (const dinero of array[key]["sueldos"]) {
                    //Media de los sueldos por delegación:
                    media+=dinero;

                    //Ordenación del array sueldos y saber cual es el menor y el mayor por delegación:
                    if (key=='huelva') {
                        tipoOrdenacion="de menor a mayor";
                        array[key]["sueldos"].sort((a,b)=>a-b);
                        menor=array[key]["sueldos"][0];
                        mayor=array[key]["sueldos"][tamañoArray-1];

                    } else {
                        tipoOrdenacion="de mayor a menor";
                        array[key]["sueldos"].sort((a,b)=>b-a);
                        mayor=array[key]["sueldos"][0];
                        menor=array[key]["sueldos"][tamañoArray-1];
                    }
                }

                //Informacion:
                informe.innerHTML+=`
                En la delegación de ${key.toUpperCase()} hay un total de: ${tamañoArray} empleados.<br>
                La media de los sueldos es de: ${(media/tamañoArray).toFixed(2)}€.<br>
                Sueldos ordenados ${tipoOrdenacion}: ${array[key]["sueldos"]}<br>
                El menor sueldo es: ${menor}€.<br>
                El mayor sueldo es: ${mayor}€.<br><br>`;
            }
        }
    }