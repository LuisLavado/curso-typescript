**Clase 6 de 26 • Curso de TypeScript**
# Creación de Funciones y Métodos en TypeScript

### Resumen

La programación en TypeScript se vuelve más poderosa cuando dominas sus funciones y métodos, elementos fundamentales que permiten organizar y reutilizar código de manera eficiente. Estas estructuras son la columna vertebral de cualquier aplicación bien diseñada, permitiéndote crear soluciones elegantes y mantenibles. Veamos cómo implementar y aprovechar estas herramientas esenciales en tus proyectos.

### ¿Cómo crear funciones básicas en TypeScript?
Las funciones en TypeScript siguen una estructura clara que permite definir su comportamiento y los datos que manejan. Para crear una función básica, necesitamos utilizar la palabra reservada `function`, seguida del nombre que queremos asignarle y los parámetros que recibirá.

Una función simple que no devuelve ningún valor (tipo `void`) se puede implementar así:
```
function imprimeMensaje(mensaje: string): void {
    console.log(mensaje);
}

imprimeMensaje("Hola, soy un mensaje");
```
En este ejemplo:

* Definimos una función llamada `imprimeMensaje`
* Recibe un parámetro de tipo `string` llamado `mensaje`
* No devuelve ningún valor (tipo `void`)
* Dentro de la función, utilizamos `console.log` para mostrar el mensaje recibido
* Finalmente, invocamos la función pasándole una cadena de texto

Para ejecutar este código, primero debemos compilarlo con el comando `tsc` y luego ejecutarlo con `node`:
```
tsc metodos.ts
node metodos.js
```

El resultado será la impresión del mensaje "Hola, soy un mensaje" en la consola.

### ¿Cómo crear funciones que devuelven valores?
Una de las ventajas principales de las funciones es su capacidad para procesar datos y devolver resultados. En TypeScript, podemos especificar claramente el tipo de dato que devolverá nuestra función.

Veamos un ejemplo de una función que suma dos números:
```
function sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

let resultado: number;
resultado = sumar(5, 10);
console.log("Tu resultado es", resultado);
```

En este caso:

* La función `sumar` recibe dos parámetros de tipo `number`
* Especificamos que devolverá un valor de tipo `number`
* Creamos una variable `resultado` para almacenar el valor devuelto
* Invocamos la función con los valores 5 y 10
* Mostramos el resultado en la consola

El tipado estricto de TypeScript nos ayuda a prevenir errores al asegurarse de que los valores que pasamos y recibimos son del tipo correcto.

### Alternativas para utilizar el resultado de una función
Existen diferentes formas de utilizar el valor devuelto por una función:

1. **Asignándolo a una variable:**
    ```
    let resultado: number = sumar(5, 10);
    console.log("Tu resultado es", resultado);
    ```
2. **Utilizándolo directamente:**
    ```
    console.log("Tu resultado es", sumar(5, 10));
    ```
La primera opción suele hacer que el código sea más legible, especialmente cuando necesitamos utilizar el resultado en múltiples lugares o cuando la llamada a la función es compleja.

### ¿Por qué son importantes los métodos en TypeScript?
Los métodos y funciones en TypeScript ofrecen ventajas significativas sobre JavaScript tradicional gracias al sistema de tipos:

1. __Mayor claridad:__ El tipado explícito hace que sea más fácil entender qué espera recibir una función y qué devolverá.

2. __Detección temprana de errores:__ El compilador de TypeScript puede identificar problemas antes de ejecutar el código.

3. __Mejor documentación:__ Los tipos actúan como una forma de documentación integrada en el código.

4. __Mejor autocompletado:__ Los editores como Visual Studio Code pueden ofrecer sugerencias más precisas.

5. __Refactorización más segura:__ Al cambiar una función, el compilador te ayudará a identificar todos los lugares que necesitan actualizarse.

**El uso de funciones bien tipadas establece una secuencia lógica** en el flujo de trabajo de tu aplicación, haciendo que el código sea más mantenible y menos propenso a errores.

Las funciones y métodos son herramientas fundamentales en cualquier lenguaje de programación, y TypeScript las mejora significativamente con su sistema de tipos. Dominar su creación y uso te permitirá desarrollar aplicaciones más robustas y fáciles de mantener. ¿Has experimentado con funciones más complejas en TypeScript?