**Clase 3 de 26 • Curso de TypeScript**
# "Introducción a TypeScript: Variables y Compilación Básica"

### Resumen

La programación con TypeScript ofrece una experiencia robusta y segura para desarrolladores que buscan evitar errores comunes en JavaScript. Este lenguaje de programación, que extiende JavaScript con tipado estático, permite crear aplicaciones más mantenibles y escalables. Vamos a explorar los conceptos básicos para comenzar a programar con TypeScript.

### ¿Cómo crear tu primer programa "Hola mundo" en TypeScript?
Para comenzar a programar en TypeScript, lo primero que necesitamos es crear nuestro clásico "Hola mundo". Este ejercicio nos permitirá entender el proceso básico de compilación y ejecución de código TypeScript.

Primero, creamos un nuevo archivo con extensión `.ts`:
```
console.log("Hola mundo");
```

Una vez escrito nuestro código, necesitamos compilarlo para convertirlo a JavaScript, ya que TypeScript no se ejecuta directamente en los navegadores o en Node.js:

1. Abre la terminal
2. Navega hasta la carpeta donde está tu archivo
3. Ejecuta el comando `tsc` seguido del nombre de tu archivo:
```
tsc main.ts
```

Este comando generará un archivo JavaScript equivalente (`main.js`). Para ejecutarlo, simplemente usamos Node.js:
```
node main.js
```

Y veremos en la terminal nuestro mensaje "Hola mundo". **Este proceso de compilación es fundamental en TypeScript**, ya que transforma nuestro código con tipos a JavaScript puro que puede ser interpretado por cualquier entorno.

### ¿Qué son las variables tipadas en TypeScript?
La principal característica de TypeScript es el sistema de tipos. A diferencia de JavaScript, donde las variables pueden cambiar de tipo durante la ejecución, TypeScript nos permite definir explícitamente qué tipo de datos contendrá cada variable.

Veamos algunos ejemplos básicos:
```
// Variable de tipo string (cadena)
let nombre: string = "Luis";

// Variable de tipo number (número)
let edad: number = 34;

// Variable de tipo boolean (booleano)
let desarrollador: boolean = true;

// Variable que puede ser undefined o string
let mes: undefined | string;

console.log(`Hola ${nombre}`);
console.log(mes); // Resultado: undefined

mes = "enero";
console.log("Mes actualizado:", mes); // Resultado: enero
```

En el ejemplo anterior, podemos observar cómo declaramos variables con diferentes tipos:

* `nombre` solo puede contener texto
* `edad` solo puede contener números
* `desarrollador` solo puede ser verdadero o falso
* `mes` puede ser una cadena de texto o estar indefinido

### ¿Cómo trabajar con cadenas de texto en TypeScript?
TypeScript ofrece diferentes formas de trabajar con cadenas de texto, similar a JavaScript. Podemos concatenar variables usando el operador `+` o utilizar template literals (plantillas de cadena) con backticks (``).
```
let nombre: string = "Luis";

// Opción 1: Concatenación tradicional
console.log("Hola " + nombre);

// Opción 2: Template literals (recomendado)
console.log(`Hola ${nombre}`);
```

Ambas opciones producen el mismo resultado, pero los template literals son más legibles cuando trabajamos con cadenas largas o necesitamos insertar múltiples variables.

### ¿Cómo funcionan los tipos de datos en TypeScript?
TypeScript incluye varios tipos de datos básicos que nos ayudan a definir claramente la estructura de nuestro código:

* __string:__ Para textos
* __number:__ Para números (enteros y decimales)
* __boolean:__ Para valores verdadero/falso
* __undefined:__ Para variables sin valor asignado
* __null:__ Para valores nulos explícitos

También podemos crear tipos unión combinando varios tipos con el operador `|`:
```
// Esta variable puede ser undefined o string
let mes: undefined | string;

console.log("Mes inicial", mes); // undefined

mes = "enero";
console.log("Mes actualizado", mes); // enero
```

En este ejemplo, mes puede contener un texto o ser undefined. Esto es útil cuando una variable puede tener diferentes tipos de valores dependiendo del contexto.

### ¿Cómo experimentar con TypeScript?
La mejor manera de aprender TypeScript es experimentando con diferentes tipos de variables y observando cómo se comportan. Te recomendamos:

1. Crear variables con diferentes tipos
2. Intentar asignar valores incorrectos para ver los errores de compilación
3. Usar `console.log()` para visualizar los valores
4. Compilar y ejecutar el código para ver los resultados

El proceso de desarrollo en TypeScript siempre incluye estos pasos: escribir código tipado, compilar a JavaScript y ejecutar el resultado. Este ciclo te ayudará a familiarizarte con el lenguaje y sus características.

La práctica constante con estos conceptos básicos te dará una base sólida para avanzar hacia características más complejas de TypeScript. Te animo a experimentar con los ejemplos mostrados y crear tus propias variaciones para consolidar tu aprendizaje. ¿Qué otros tipos de datos te gustaría explorar en TypeScript?