//Sumar solo los elementos pares de un array.

<<<<<<< HEAD
function sumarElementosPares(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      suma += array[i];
    }
  }
  return suma;
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
let resultado = sumarElementosPares(numeros);
console.log("La suma de los elementos pares del array es: " + resultado);
=======
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
let total = 0;
{
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      total += numeros[i];
    }
  }
}
  console.log(total);
>>>>>>> d02548ba1a5daa5b37d533af8f4d82e25a1753f1
