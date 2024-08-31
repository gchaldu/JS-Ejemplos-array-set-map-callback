// Creamos un nuevo Set
const numeros = new Set();

// Añadimos algunos números al Set
numeros.add(1);
numeros.add(2);
numeros.add(3);

// Comprobamos si un número está en el Set
console.log(numeros.has(2)); // true, el número 2 está en el Set
console.log(numeros.has(4)); // false, el número 4 no está en el Set

// Agregamos un número al Set
numeros.add(4);
console.log(numeros.has(4)); // true, ahora el número 4 está en el Set

// Creamos el Set
const estudiantes = new Set();

// Creamos algunos objetos estudiante
const estudiante1 = { legajo: 1, nombre: "Maria" };
const estudiante2 = { legajo: 2, nombre: "Juan" };
const estudiante3 = { legajo: 3, nombre: "Ana" };

// Añadimos los objetos al Set
estudiantes.add(estudiante1);
estudiantes.add(estudiante2);
estudiantes.add(estudiante3);

// Para comprobar si un objeto específico existe en el Set
console.log(estudiantes.has(estudiante1)); // true
console.log(estudiantes.has({ legajo: 1, nombre: "Maria" })); // false, es un objeto diferente

// Para verificar si existe un estudiante con un legajo específico
const legajoABuscar = 2;
const existeEstudiante = [...estudiantes].some(
  (est) => est.legajo === legajoABuscar
);
console.log(existeEstudiante); // true

//Buscando un estudiante con array method y operador de propagación
const estudianteEncontrado = [...estudiantes].find(
  (estudiante) => estudiante.legajo === legajoABuscar
);

console.log(estudianteEncontrado);

// Eliminando
estudiantes.delete(estudiante1);

//Actualizando
estudiante1.nombre = "Pepe Lapua";

//agregando
estudiantes.add(estudiante1);

estudiantes.forEach((e) => console.log(e));

//operaciones de conjunto

// Crear dos conjuntos
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

// Unión de conjuntos
const union = new Set([...setA, ...setB]);
console.log("Unión:", [...union]); // [1, 2, 3, 4, 5, 6, 7, 8]

// Intersección de conjuntos
const intersection = new Set([...setA].filter((item) => setB.has(item)));
console.log("Intersección:", [...intersection]); // [4, 5]

// Diferencia de conjuntos (Elementos en setA que no están en setB)
const difference = new Set([...setA].filter((item) => !setB.has(item)));
console.log("Diferencia:", [...difference]); // [1, 2, 3]

// Diferencia simétrica (Elementos en setA o setB, pero no en ambos)
const symmetricDifference = new Set([
  ...[...setA].filter((item) => !setB.has(item)),
  ...[...setB].filter((item) => !setA.has(item)),
]);
console.log("Diferencia Simétrica:", [...symmetricDifference]); // [1, 2, 3, 6, 7, 8]
