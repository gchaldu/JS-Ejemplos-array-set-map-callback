const emptySlots = new Array(10); // Constructor Array

let miArray = [1, 2, 3, 4, 5];
miArray = [...miArray, 1000];

/* console.log(miArray); */

///referencias

let arreglo1 = [20, 30, 40];

let arreglo2 = arreglo1;

arreglo1 = [...arreglo1, 50];

/* console.log("Arreglo 1", arreglo1);
console.log("Arreglo 2", arreglo2); */

arreglo2[1] = 1000;
/* console.log(arreglo2); */

//Ojo con esto!!!

const numeros = [20, 30, 40, [1, 2, 3], 60];

const queTiene = [...numeros];

queTiene[3][0]=10;

console.log("Numeros: ", numeros);
console.log("queTiene: ", queTiene);


//Ojo con esto otro

const cosas = [10, 20, {id: 2, nombre: "Gabriel"}]

const otrasCosas = [...cosas];

otrasCosas[2].nombre = "Martin";

console.log("cosas: ", cosas);
console.log("otrasCosas: ", otrasCosas);
