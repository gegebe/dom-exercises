/**
 * Completa cada ejercicio. Solo necesitas una línea de código JavaScript para cada ejercicio.
 *
 *  * REsultado deseado: https://oscarm.tinytake.com/msc/ODgxNzI5N18yMjI0ODE2OQ
 *
 **/

/**
 * Cambia el título de la página a rojo usando un estilo en línea
 */

let titular;
titular = document.querySelector("h1").style.color = "#FF0000";

/**
 * Cambia el tamaño del título de la página a 48px usando un estilo en línea
 */

let tamanyo;
tamanyo = document.querySelector("h1").style.fontSize = 48 + "px";

/**
 * Muestra por console.log el texto de la caja 2
 */

console.log(document.querySelector("#caja-2").textContent);

/**
 * Cambia el color del borde del párrafo p.intro a verde usando un estilo en línea
 */
let borderIntro;
borderIntro = document.querySelector(".intro").style.borderColor = "green";

/**
 * Elimina la clase "estilo-3" de la última caja.
 * Ayuda: https://www.w3schools.com/howto/howto_js_remove_class.asp
 */

let eliminarClass;
eliminarClass = document.getElementById("ultimo").classList.remove("estilo-3");

/**
 * Añade la clase CSS "ocultar" al penúltimo párrafo
 * Ayuda: https://simpledev.io/lesson/add-class-js/
 * 
 * BONUS: Haz el ejercicio sin modificar el ex1.html
 */

let encuentraNodo;
let anyadeClass;

encuentraNodo = document.querySelector("#ultimo").previousElementSibling;
anyadeClass = encuentraNodo.classList.add("ocultar");