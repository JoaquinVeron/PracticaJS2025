//Filtrar los elementos de un array de números para obtener solo los pares.

<<<<<<< HEAD
function filtrarPares(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = filtrarPares(numeros); 
console.log("Los números pares del array son: " + resultado);
=======
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}
>>>>>>> d02548ba1a5daa5b37d533af8f4d82e25a1753f1
