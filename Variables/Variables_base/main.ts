// Variable de tipo string (cadena)
let nombre: string = "Luis";

// Variable de tipo number (número)
let edad: number = 34;

// Variable de tipo boolean (booleano)
let desarrollador: boolean = true;

// Variable que puede ser undefined o string
let mes: undefined | string;

console.log(`Hola ${nombre}`);
console.log("Mes inicial:", mes); // Resultado: undefined

mes = "enero";
console.log("Mes actualizado:", mes); // Resultado: enero