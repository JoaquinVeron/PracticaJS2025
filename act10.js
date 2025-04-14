//Sumar solo los elementos pares de un array.

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