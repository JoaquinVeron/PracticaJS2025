//Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.
function resultado() {
  console.log("El promedio de edad es: " + promedioGeneral);
  console.log("La mujer de mayor edad es: " + mujerMayor.nombre);
  console.log("El hombre de menor edad es: " + hombreMenor.nombre);
  console.log("El promedio de edad de las mujeres es: " + promedioMujeres);
}
let personas = [
  { nombre: "Juana", sexo: "F", edad: 25 },
  { nombre: "Pedro", sexo: "M", edad: 30 },
  { nombre: "Maria", sexo: "F", edad: 40 },
  { nombre: "Jorge", sexo: "M", edad: 22 },
  { nombre: "Maira", sexo: "F", edad: 28 },
  { nombre: "Jesus", sexo: "M", edad: 45 },
  { nombre: "Rosa", sexo: "F", edad: 32 },
  { nombre: "Joaquin", sexo: "M", edad: 19 }
];

let sumaEdades = 0;
let sumaEdadesMujeres = 0;
let cantidadMujeres = 0;
let mujerMayor = null;
let hombreMenor = null;

for (let i = 0; i < personas.length; i++) {
  sumaEdades += personas[i].edad;

  if (personas[i].sexo === "F") {
    sumaEdadesMujeres += personas[i].edad;
    cantidadMujeres++;
    if (mujerMayor === null || personas[i].edad > mujerMayor.edad) {
      mujerMayor = personas[i];
    }
  }

  if (personas[i].sexo === "M") {
    if (hombreMenor === null || personas[i].edad < hombreMenor.edad) {
      hombreMenor = personas[i];
    }
  }
}

let promedioGeneral = sumaEdades / personas.length;
let promedioMujeres = sumaEdadesMujeres / cantidadMujeres;

resultado();