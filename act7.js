//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.

<<<<<<< HEAD
function mostrarMultiplosDeTres(num1, num2) {
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            if (i % 3 == 0) {
                console.log(i);
            }
        }
    } else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            if (i % 3 == 0) {
                console.log(i);
            }
        }
    } else {
        console.log("Los números son iguales.");
    }
}

let num1 = 100;
let num2 = 1;
console.log("Los múltiplos de 3 entre " + num1 + " y " + num2 + " son: ");
mostrarMultiplosDeTres(num1, num2);
=======
let num1 = 100;
let num2 = 1;
console.log("Los múltiplos de 3 entre " + num1 + " y " + num2 + " son: ");
if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
else if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
else {
    console.log("Los números son iguales.");
}
>>>>>>> d02548ba1a5daa5b37d533af8f4d82e25a1753f1
