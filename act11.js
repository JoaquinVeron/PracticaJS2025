//Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal

<<<<<<< HEAD
function contarLetras(palabra) {
    
=======
let palabra = "OTORRINOLARINGOLOGIA";
let letras = {};
console.log("Las letras de la palabra " + palabra + " son: ");
>>>>>>> d02548ba1a5daa5b37d533af8f4d82e25a1753f1
for (let i = 0; i < palabra.length; i++) {
    if (letras[palabra[i]]) {
        letras[palabra[i]]++;
    } else {
        letras[palabra[i]] = 1;
    }
}
<<<<<<< HEAD
console.log(letras);
}

let palabra = "OTORRINOLARINGOLOGIA";
let letras = {};
console.log("Las letras de la palabra " + palabra + " son: ");
contarLetras(palabra);
=======
console.log(letras);
>>>>>>> d02548ba1a5daa5b37d533af8f4d82e25a1753f1
