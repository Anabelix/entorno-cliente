document.getElementsByTagName(""); //Retorna una coleccion/array de todos los elementos que coinciden con la etiqueta especificada.
document.getElementsByClassName(""); //Retorna una coleccion/array de todos los elementos que coinciden con la clase especificada, no importa el numero de elementos que existan, siempre devuelve un array.
document.getElementById(""); //Retorna un solo elemento id que coincida con la busqueda especificada.
document.querySelector(""); //Retorna un solo elemento que coincida con el selector especificado. Se pueden combinar. Ej: #title .elementos -- li a
document.querySelectorAll(""); //Retorna una coleccion/array de elementos que coincidan con el selector especificado. Se pueden combinar.

/* MANIPULAR EL TEXTO DEL HTML
innerHTML te devuelve literalmente todo lo que hay dentro del elemento especificado, por lo que se puede modificar el contenido y añadir nuevas etiquetas. Ej:
HTML original: <h1 id="titulo">Hello</h1>*/
/*JS: document.querySelector("h1").innerHTML;*/
//Salida: 'Hello'

/*JS:*/ document.querySelector("h1").innerHTML="<em>Good Bye</em>";
/*Salida: '<em>Good Bye</em>'
En html: <h1 id="titulo"><em>Good Bye</em></h1>*/

/*textContent: te devuelve el texto plano.
document.querySelector("h1").textContent;
Salida: 'Hello'*/

/*MANIPULAR LOS ATRIBUTOS DE LOS ELEMENTOS HTML:*/
//document.querySelector("a").attributes; Nos devuelve una lista de los atributos que hay en el selector especificado.
//SALIDA: NamedNodeMap {0: href, href: href, length: 1}
document.querySelector("a").getAttribute("href"); //Nos devuelve el contenido del atributo especificado del selector especificado.
//SALIDA: 'https://www.google.com'
document.querySelector("a").setAttribute("href", "https://www.bing.com"); //Modificamos el contenido del atributo especificado del selector especificado.
//SALIDA: undefined