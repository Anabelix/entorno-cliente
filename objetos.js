//Funcion constructora, asi no se usa ya
/* function Personita (nombre, apellido, edad, sexo) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.sexo=sexo;
    this.saludar=function () {
        console.log("Hola! Me llamo "+this.nombre);
    }
} */
//Así si
class Personita {
    constructor(nombre, apellido, edad, sexo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
    }
    saludar () {
        console.log("Hola! Me llamo " + this.nombre);
    }
}

//objeto JSON
let tv = {
    nombre:'TV Samsung 42',
    categoria: 'Televisores',
    unidades: 4,
    precio: 345.95,
    importe: function () {
        return this.precio * this.unidades
    }
}
console.log(tv);
console.log("El importe total es de: "+tv.importe());

//Clases y tal
class Persona {
    constructor (name, age) {
        this.name=name;
        this.age=age;
    }

    get name() { return this._name; }
    get age() { return this._age; }
    set name(name) { this._name=name; }
    set age(age) { this._age=age; }

    printeo () { return "Hola! Me llamo "+this.name+" y tengo "+this.age+" años.";}
}

class Alumno extends Persona {
    constructor (name, age, country) {
        super(name, age);
        this.country=country;
    }

    printeo () {
        return super.printeo()+" Soy de "+this.country+".";
    }
}
let manuel = new Alumno ("Manuel", 23, 'España');
console.log(manuel);
console.log(manuel.name);
console.log(manuel.age);
console.log(manuel.printeo());