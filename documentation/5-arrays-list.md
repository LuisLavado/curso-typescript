**Clase 5 de 26 • Curso de TypeScript**
# Colecciones de Datos en TypeScript: Arreglos, Tuplas y Enumeradores

### Resumen

Las colecciones de datos en TypeScript son fundamentales para manejar múltiples valores de manera estructurada y eficiente. Cuando trabajamos con aplicaciones reales, necesitamos organizar información relacionada, y TypeScript nos ofrece herramientas poderosas para hacerlo con seguridad de tipos, lo que reduce errores y mejora la mantenibilidad del código.

### ¿Cómo trabajar con colecciones de datos en TypeScript?
Cuando tenemos múltiples variables del mismo tipo, podemos agruparlas en colecciones. TypeScript ofrece varias formas de trabajar con estas colecciones, cada una con características específicas que se adaptan a diferentes necesidades.

### ¿Qué son los arrays y cómo se implementan?
Los arrays son la forma más común de colección en TypeScript. Permiten almacenar múltiples valores del mismo tipo en una sola variable.

Para declarar un array de strings:
```
let nombres: string[] = ["Ana", "Juan", "María"];
console.log(nombres);
```
También podemos crear arrays de números:
```
let edades: number[] = [39, 25, 30];
console.log(edades);
```
**Una característica importante de los arrays es que pueden ser modificados en tiempo de ejecución**, añadiendo o eliminando elementos según sea necesario.

### ¿Cómo trabajar con arrays de tipo any?
Si necesitamos flexibilidad en los tipos de datos que almacenamos, podemos usar arrays de tipo any:
```
let mixto: any[] = ["Hola", 42, true];
console.log(mixto);
```
Este tipo de array puede contener cualquier tipo de dato, lo que es útil en ciertos escenarios, pero **sacrifica la seguridad de tipos** que TypeScript ofrece.

### ¿Qué son los arrays de interfaces?
Cuando necesitamos estructuras de datos más complejas, podemos crear arrays basados en interfaces:
```
interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let personas: Persona[] = [
    {
        nombre: "Luis",
        edad: 30,
        esDesarrollador: true
    }
];

// Podemos añadir elementos que cumplan con la interfaz
personas.push({
    nombre: "Miranda",
    edad: 28,
    esDesarrollador: true
});

console.log(personas);
```
Estos arrays garantizan que todos los elementos tengan la misma estructura, lo que hace el código más predecible y fácil de mantener.

### ¿Qué son las tuplas y en qué se diferencian de los arrays?
Las tuplas son colecciones con un número fijo de elementos, donde cada posición puede tener un tipo específico:
```
let personaTupla: [string, number, boolean] = ["Luis", 30, true];
console.log(personaTupla);
```

La diferencia crucial entre tuplas y arrays es que __las tuplas no pueden ser modificadas después de su creación__. Una vez definidas, su estructura permanece inmutable, lo que proporciona mayor seguridad en ciertos escenarios.

Para recorrer los elementos de una tupla, podemos usar un bucle forEach:
```
// Tuplas
let personaTupla: [string, number, boolean] = ["Luis", 30, true];
console.log("Persona Tupla:", personaTupla);

let personasTupla: [string, number, boolean][] = [];

personasTupla.push(["Miranda", 28, true]);
personasTupla.push(["Luis", 30, true]);
personasTupla.push(["Juan", 25, false]);
personasTupla.push(["María", 28, false]);

// Recorriendo tuplas
personasTupla.forEach(persona => {
    console.log("Persona:", persona);

    let nombre = persona[0];
    let edad = persona[1];
    let esDesarrollador = persona[2];

    console.log(`Nombre: ${nombre}, Edad: ${edad}, Desarrollador: ${esDesarrollador}`);    
});
```
### ¿Cómo utilizar enumeradores para limitar valores?
Los enumeradores (enums) son una característica poderosa que permite definir un conjunto de constantes con nombre:
```
enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: DiaSemana = DiaSemana.Domingo;
console.log(dia); // Muestra: 6 (índice numérico)
console.log(DiaSemana[dia]); // Muestra: "Domingo" (nombre)
```
Los enumeradores son especialmente útiles para **limitar las opciones disponibles** y hacer el código más legible. Si intentamos asignar un valor que no está en el enumerador, TypeScript mostrará un error:
```
// Esto generaría un error
// let diaInvalido: DiaSemana = DiaSemana.Enero;
```
### ¿Por qué son importantes las colecciones tipadas en TypeScript?
El uso de colecciones tipadas en TypeScript ofrece múltiples ventajas:

* __Prevención de errores:__ El sistema de tipos detecta inconsistencias antes de ejecutar el código.
* __Mejor documentación:__ El tipo de una colección comunica claramente qué datos contiene.
* __Autocompletado mejorado:__ Los editores pueden ofrecer sugerencias más precisas.
* __Refactorización más segura:__ Los cambios en la estructura de datos se propagan a todo el código.

Trabajar con colecciones de datos en TypeScript resulta más cómodo gracias al fuerte tipado. Esto evita problemas comunes como mezclar tipos de datos inadvertidamente, lo que hace que nuestras aplicaciones sean más robustas y estructuradas.

Las colecciones tipadas son una herramienta fundamental para cualquier desarrollador que busque escribir código más mantenible y menos propenso a errores. ¿Has experimentado con estas diferentes formas de manejar colecciones en tus proyectos? 