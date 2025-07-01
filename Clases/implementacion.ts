import { Persona } from "./clase";

// let persona = new Persona("Juan", 30, true);
// console.log(persona.saludar()); // Imprime: "Hola, mi nombre es Juan y tengo 30 años"

const persona = new Persona("Juan", 30, true);

// Podemos acceder a propiedades y métodos públicos
console.log(persona.nombre); // "Juan"
console.log(persona.saludar()); // "Hola, me llamo Juan"

// Pero no podemos acceder a elementos protegidos o privados
// console.log(persona.edad); // Error: Property 'edad' is protected
// console.log(persona.obtenerEdad()); // Error: Property 'obtenerEdad' is protected
// console.log(persona.desarrollador); // Error: Property 'desarrollador' is private
// console.log(persona.esDev()); // Error: Property 'esDev' is private