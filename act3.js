//Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.

function contarLetras(palabra) {
    return palabra.length;
}
let palabra = "Spiderman";
let cantidadLetras = contarLetras(palabra);
console.log(palabra + " tiene " + cantidadLetras + " letras.");