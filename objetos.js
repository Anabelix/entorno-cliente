/* function Persona (nombre, apellido, edad, sexo) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.sexo=sexo;
    this.saludar=function () {
        console.log("Hola! Me llamo "+this.nombre);
    }
} */

class Persona {
    constructor (name, age) {
        this.name=name;
        this.age=age;
    }

    get name() { return this._name; }
    get age() { return this._age; }
    set name(name) { this._name=name; }
    set age(age) { this._age=age; }

    saludar () { return "Hola! Me llamo "+this.name; }
}

let manuel = new Persona ("Manuel", 23);
console.log(manuel);
console.log(manuel.name);
console.log(manuel.age);
console.log(manuel.saludar());