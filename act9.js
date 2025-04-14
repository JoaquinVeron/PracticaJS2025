//Obtener la suma de los elementos de un array.

function sumarElementosArray(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}
let numeros = [1, 2, 3, 4, 5];
let resultado = sumarElementosArray(numeros);
console.log("La suma de los elementos del array es: " + resultado);