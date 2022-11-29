/*Tienes que sacar por pantalla 10 palabras, 5 repetidas.
Tienes un array con las 5 palabras repetidas y vas a ir recorriendo ese array para pintarlas. A cada palabra que saques le asignas un numero que no puede ir más alla del 5*/
let caca = [1,2,3,4,5,1,2,3,4,5];
let indice;
let comodin;
for (let i = (caca.length-1); i > 0; i--) {
    indice=Math.floor(Math.random()*(i+1)); //5
    comodin=caca[i]; //valor de caca[9] 
    caca[i]=caca[indice]; //valor de caca[9]=caca[5]  
    caca[indice]=comodin; //caca[5]=caca[9] 
}

console.log(caca);
for (const numeros of caca) {
    console.log("Elemento del array: "+numeros+" id:"+numeros);
}