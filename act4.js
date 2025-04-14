//Ingresar un número e indicar si es par.

function esPar(numero) {
    if (numero % 2 == 0) {
        return " es par";
    } else {
        return " no es par";
    }
}
let numero = 6;
console.log("El número " + numero + esPar(numero));