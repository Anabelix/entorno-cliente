/* Los Arrays en JavaScript son estructuras de datos importantes y tienen muchos usos dentro del
desarrollo de software. Además, poseen métodos con los cuales puedes hacer que tu código sea más
legible y con menos líneas. */
let array = [1,'hola', 3, 'manzana', 'pera', 6];
console.log(array);

console.log("\nLENGTH: Tamaño del array. "+array.length);

array.push('anabel');
console.log("\nPUSH(): Añadir al final.");
console.log(array);

console.log("\nPOP(): Eliminar el último y devuelve ese elemento. ["+array.pop()+"]");
console.log(array);

array.unshift(2,4,5)
console.log("\nUNSHIFT: Añadir al inicio.");
console.log(array);

console.log("\nSHIFT(): Elimina el primero y devuelve ese elemento. ["+array.shift()+"]");
console.log(array);

let array2 = ['a', 'b', 'c'];
let concatenados = array.concat(array2);
console.log("\nCONCAT(): Concatena dos arrays.")
console.log(concatenados);

console.log("\nSLICE(): Crea un array a partir de los elementos de otro.");
console.log(array.slice(0, 5));

console.log("\nJOIN(): Construye una cadena, uniendo los elementos del array mediante el separador.");
console.log(array.join(';'));

console.log("\nSPLIT(): Construye un array, a partir de una cadena y un separador.");
let cadena = "LUNES-MARTES-MIERCOLES-JUEVES-VIERNES-SABADO-DOMINGO";
console.log(cadena);
cadena=cadena.split('-');
console.log(cadena);

console.log("\nISARRAY(): Comprueba si un objeto/elemento es un array. Devuelve true o false.");
console.log(Array.isArray(array));

console.log("\nINCLUDES(): Comprueba si un elemento esta en el array. Devuelve true o false.");
console.log(array.includes('manzana'));

console.log("\nINDEXOF(): Devuelve el indice/key de un elemento de un array.");
console.log(array.indexOf('manzana'));

console.log("\nREVERSE(): Invierte el orden de un array.");
array2=[12,5,6,23,80,4,-7,-5,0,8];
console.log(array2);
console.log(array2.reverse());

console.log("\nSORT(): Ordena por orden alfabetico.");
console.log(cadena.sort());
console.log("\nSORT(): Ordena de menor a mayor.");
console.log(array2.sort((a,b)=>a-b));
console.log("\nSORT(): Ordena de mayor a menor.");
console.log(array2.sort((a,b)=>b-a));