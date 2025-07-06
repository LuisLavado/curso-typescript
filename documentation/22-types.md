**Clase 22 de 26 • Curso de TypeScript**
# Tipos y Mapeo de Datos en TypeScript

### Resumen

Los tipos de datos en TypeScript representan una herramienta poderosa para estructurar información de manera eficiente. A diferencia de otros elementos del lenguaje, los types tienen características únicas que los hacen especialmente útiles para el desarrollo de aplicaciones robustas. Aunque no se traducen directamente a JavaScript, su valor en la fase de desarrollo es incalculable para mantener la integridad de los datos.

### ¿Qué son los types en TypeScript y por qué son tan especiales?
Los types en TypeScript son una forma de estructurar datos que, curiosamente, no tienen equivalencia directa en JavaScript. Esto significa que puedes utilizarlos ampliamente durante el desarrollo, pero al compilar tu código a JavaScript, estos desaparecen sin dejar rastro, a menos que crees un objeto basado en ellos.

Para entender mejor este concepto, podemos crear un archivo básico:
```
type PersonaType = {
  nombre: string;
  edad: number;
}

class PersonaClass {
  nombre: string;
  edad: number;

  constructor() {
    this.nombre = "";
    this.edad = 0;
  }
}
```
La diferencia fundamental entre un type y una clase es que **el type solo puede tener propiedades, mientras que una clase puede tener tanto propiedades como métodos y constructor**. Los types sirven principalmente para estructurar datos de manera clara y consistente.

Al compilar este código a JavaScript, notarás algo sorprendente: solo la clase se traduce al archivo resultante, mientras que el type simplemente desaparece. Esto demuestra que los types son herramientas exclusivas de TypeScript para la fase de desarrollo.

### ¿Cómo aprovechar los mapped types para transformar estructuras de datos?
Los mapped types son una característica avanzada que permite transformar tipos existentes siguiendo patrones específicos. Son especialmente útiles cuando necesitas crear variaciones de un tipo base.

### Types parciales
Puedes crear un tipo que haga que todas las propiedades de otro tipo sean opcionales:
```
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type PersonaParcial = Partial<PersonaType>;
// Resultado equivalente a:
// {
//   nombre?: string;
//   edad?: number;
// }
```
Este mapped type recorre todas las propiedades del tipo original y les añade un signo de interrogación, indicando que pueden aceptar valores nulos.

### Types de solo lectura
De manera similar, puedes crear un tipo que haga que todas las propiedades sean de solo lectura:
```
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type PersonaSoloLectura = ReadOnly<PersonaType>;
// Resultado equivalente a:
// {
//   readonly nombre: string;
//   readonly edad: number;
// }
```
Para utilizar estos tipos en código que se compile a JavaScript, necesitas crear objetos basados en ellos:
```
const persona: PersonaSoloLectura = {
  nombre: "Min",
  edad: 30
};

console.log(persona.nombre); // Esto sí se compilará a JavaScript
```
### ¿Qué otros tipos avanzados ofrece TypeScript?
TypeScript proporciona varios tipos avanzados que aumentan significativamente la expresividad y seguridad del código.

### Template literal types
Estos tipos permiten crear variantes basadas en cadenas literales:
```
type Variantes = "pequeño" | "mediano" | "grande";
type ClaseCSS = `boton-${Variantes}`;

// let botonPequeño: ClaseCSS = "boton-pequeño";
// let botonMediano: ClaseCSS = "boton-mediano";
// let botonGrande: ClaseCSS = "boton-grande";
```
Los template literal types son perfectos para trabajar con convenciones de nomenclatura consistentes, como clases CSS o identificadores de elementos.

### Conditional types
Los tipos condicionales permiten realizar evaluaciones y determinar el tipo resultante basado en condiciones:
```
type EsNumero<T> = T extends number ? true : false;

function esNumero<T>(valor: T): EsNumero<T> {
  return (typeof valor === "number") as any;
}

const resultado1 = esNumero(42);       // true
const resultado2 = esNumero("hello");  // false

console.log(resultado1);
console.log(resultado2);
```
Este ejemplo demuestra cómo **los tipos condicionales pueden utilizarse para validar datos antes de enviarlos a una base de datos o servicio**, mejorando la robustez de las aplicaciones.

Los types en TypeScript representan una herramienta fundamental para garantizar la integridad de los datos en tus aplicaciones. Aunque no se traducen directamente a JavaScript, proporcionan una capa adicional de seguridad durante el desarrollo que ayuda a prevenir errores comunes.