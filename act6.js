//Ingresar dos valores enteros y enumerar los elementos que los separan. 

let n1 = 10;
let n2 = 1;
console.log("Los números que separan " + n1 + " y " + n2 + " son: ");
if (n1 < n2) {
for (let i = n1 + 1; i < n2; i++) 
  console.log(i);}
else if (n1 > n2)
    for (let i = n1 - 1; i > n2; i--) 
      console.log(i);