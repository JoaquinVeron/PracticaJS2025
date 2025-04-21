//Ingresar dos valores enteros y enumerar los elementos que los separan. 

<<<<<<< HEAD
function separarNumeros(n1, n2) {
    if (n1 < n2) {
        for (let i = n1 + 1; i < n2; i++) {
            console.log(i);
        }
    } else if (n1 > n2) {
        for (let i = n1 - 1; i > n2; i--) {
            console.log(i);
        }
    } else {
        console.log("Los números son iguales.");
    }
}

let n1 = 10;
let n2 = 1;

console.log ("los elementos que separan ", n1 , " y ", n2, " son:");
separarNumeros(n1, n2);
=======
let n1 = 10;
let n2 = 1;
console.log("Los números que separan " + n1 + " y " + n2 + " son: ");
if (n1 < n2) {
for (let i = n1 + 1; i < n2; i++) 
  console.log(i);}
else if (n1 > n2)
    for (let i = n1 - 1; i > n2; i--) 
      console.log(i);
>>>>>>> d02548ba1a5daa5b37d533af8f4d82e25a1753f1
