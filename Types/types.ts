type PersonaType = {
  nombre: string;
  edad: number;
}

type Partial2<T> = {
  [P in keyof T]?: T[P];
};

type PersonaParcial = Partial2<PersonaType>;
// Resultado equivalente a:
// {
//   nombre?: string;
//   edad?: number;
// }

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type PersonaSoloLectura = ReadOnly<PersonaType>;
// Resultado equivalente a:
// {
//   readonly nombre: string;
//   readonly edad: number;
// }

const persona: PersonaSoloLectura = {
  nombre: "Juan",
  edad: 30
};

console.log(persona.nombre); // Esto sí se compilará a JavaScript

// persona.nombre = "Pedro"; // Error: Cannot assign to 'nombre' because it is a read-only property.

/**
 * Template literal types
 */
type Variantes = "pequeño" | "mediano" | "grande";
type ClaseCSS = `boton-${Variantes}`;

// let botonPequeño: ClaseCSS = "boton-pequeño";
// let botonMediano: ClaseCSS = "boton-mediano";
// let botonGrande: ClaseCSS = "boton-grande";

/**
 * Conditional types: Los tipos condicionales permiten realizar evaluaciones y determinar el tipo resultante basado en condiciones:
 */
type EsNumero<T> = T extends number ? true : false;

function esNumero<T>(valor: T): EsNumero<T> {
  return (typeof valor === "number") as any;
}

const resultado1 = esNumero(42);       // true
const resultado2 = esNumero("hello");  // false

console.log(resultado1);
console.log(resultado2);