/* const operacion = (num1, num2) => {
  return num1 + num2;
};
console.log(operacion(2, 2));
 */
/* const op = (num1, num2, callback) => {
  return callback(num1, num2);
};

let sumar = op(
  10, 
  20, 
  (n1, n2) => {
    return n1 + n2;
  }
);

console.log(sumar);

let restar = op(10, 20, (n1, n2) => {
  return n1 - n2;
});  */

/* console.log(restar); */

const estudiantes = [
  { id: 1, nombre: "Maria" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "july" },
  { id: 4, nombre: "Valen" },
  { id: 5, nombre: "Pepe" },
];

const getStudentsById = function(id, callback) {
  const estudiante = estudiantes.find((est) => est.id === id);

  console.log("Antes del setTimeout");

  setTimeout(() => {
    if (estudiante) {
      callback(estudiante);
    } else {
      callback(`El estudiante con id: ${id} NO existe`);
    }
  }, 5000);

  console.log("Linea 41 despues del setTimeout");
};

getStudentsById(
  4, 
  (estudiante) => {
    /* if (notFound) {
      return console.log(notFound);
    } */
    console.log(estudiante);
  }
);
