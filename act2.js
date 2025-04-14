//Ingresar tres valores e indicar cual es el mayor y cual el menor.

function mayorMenor(a, b, c) {
     const mayor = Math.max(a, b, c);
     const menor = Math.min(a, b, c);
     console.log("El mayor es " + mayor + " y el menor es " + menor);
 }
 let n1 = 10;
 let n2 = 20;
 let n3 = 30;
 mayorMenor(n1, n2, n3);