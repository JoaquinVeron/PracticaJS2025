//Ingresar tres valores e indicar cual es el mayor y cual el menor.

let n1 = 10;
let n2 = 20;
let n3 = 30;

if (n1 >= n2 & n1 >= n3 & n2 >= n3) {
    console.log("El mayor es " + n1 + " y el menor es " + n3)}
else if (n1 >= n2 & n1 >= n3 & n3 >= n2)
     console.log("El mayor es " + n1 + " y el menor es " + n2)

else if (n2 >= n1 & n2 >= n3 & n1 >= n3) 
     console.log("El mayor es " + n2 + " y el menor es " + n3)
else if (n2 >= n1 & n2 >= n3 & n3 >= n1)
     console.log("El mayor es " + n2 + " y el menor es " + n1)

else if (n3 >= n1 & n3 >= n2 & n1 >= n2) 
     console.log("El mayor es " + n3 + " y el menor es " + n2)
else if (n3 >= n1 & n3 >= n2 & n2 >= n1)
     console.log("El mayor es " + n3 + " y el menor es " + n1)