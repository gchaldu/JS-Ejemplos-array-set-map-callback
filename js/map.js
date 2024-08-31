const estudiante1 = { legajo: 1, nombre: "Maria" };
const estudiante2 = { legajo: 2, nombre: "Juan" };
const estudiante3 = { legajo: 3, nombre: "Ana" };

const estudiantesMap = new Map();

// Añadir estudiantes al Map
estudiantesMap.set(estudiante1.legajo, estudiante1);
estudiantesMap.set(estudiante2.legajo, estudiante2);
estudiantesMap.set(estudiante3.legajo, estudiante3);

// Actualizar nombre directamente
estudiantesMap.get(1).nombre = "Mariana";

console.log(estudiantesMap.get(1));

estudiantesMap.delete(estudiante1.legajo);

estudiantesMap.forEach((e) => console.log(e));

const estudianteEncontrado = [...estudiantesMap.values()].find(
  (e) => e.legajo === 3
);
console.log(estudianteEncontrado);

//TEORIA DE CONJUNTO
// Crear dos mapas (los valores no son importantes aquí, solo las claves)
const mapA = new Map([
  [1, true],
  [2, true],
  [3, true],
  [4, true],
  [5, true],
]);
const mapB = new Map([
  [4, true],
  [5, true],
  [6, true],
  [7, true],
  [8, true],
]);

// Función para obtener claves de un mapa
const getKeys = (map) => [...map.keys()];

// Unión de conjuntos
const unionKeys = new Set([...getKeys(mapA), ...getKeys(mapB)]);
console.log("Unión:", [...unionKeys]); // [1, 2, 3, 4, 5, 6, 7, 8]

// Intersección de conjuntos
const intersectionKeys = new Set(
  [...getKeys(mapA)].filter((key) => mapB.has(key))
);
console.log("Intersección:", [...intersectionKeys]); // [4, 5]
