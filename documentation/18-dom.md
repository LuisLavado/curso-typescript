**Clase 18 de 26 • Curso de TypeScript**
# Manipulación del DOM con TypeScript y Query Selector

### Resumen

La integración de TypeScript con HTML abre un mundo de posibilidades para manipular el DOM de manera segura y eficiente. A través de esta poderosa combinación, podemos acceder a elementos HTML, modificar su contenido y responder a eventos del usuario con la seguridad de tipos que TypeScript nos ofrece. Veamos cómo podemos aprovechar estas capacidades para crear aplicaciones web más robustas y mantenibles.

### ¿Cómo interactuar con el DOM desde TypeScript?
TypeScript nos permite acceder y manipular elementos del DOM con la misma facilidad que JavaScript, pero con la ventaja adicional de la verificación de tipos. Esto significa que podemos detectar errores potenciales durante el desarrollo, antes de que lleguen a producción.

Para comenzar a interactuar con el DOM desde TypeScript, necesitamos:

1. Un archivo HTML con los elementos que queremos manipular.
2. Un archivo TypeScript que accederá a estos elementos.
3. Compilar el archivo TypeScript a JavaScript para que el navegador pueda interpretarlo.

### Accediendo a elementos HTML mediante querySelector
Existen varias formas de seleccionar elementos del DOM en TypeScript, siendo `querySelector` uno de los métodos más versátiles. Este método nos permite seleccionar elementos por:

* Nombre de etiqueta
* Clase
* ID
```
// Seleccionando por nombre de etiqueta
const h1 = document.querySelector('h1');
console.log(h1?.textContent);

// Seleccionando por clase
let titulo: HTMLHeadingElement = document.querySelector('.title') as HTMLHeadingElement;
console.log(titulo?.textContent);

// Seleccionando por ID
const message = document.querySelector('#message') as HTMLInputElement;
console.log(message.placeholder);
```
Es importante notar que al usar `querySelector`, TypeScript no puede inferir automáticamente el tipo de elemento que estamos seleccionando. Por eso, es recomendable usar la aserción de tipos (`as HTMLHeadingElement`) para indicarle a TypeScript qué tipo de elemento esperamos.

### Manejo de valores potencialmente nulos
Cuando seleccionamos elementos del DOM, siempre existe la posibilidad de que el elemento no exista. TypeScript nos ayuda a manejar estos casos con el operador de encadenamiento opcional (`?`):
```
// El signo ? indica que h1 podría ser null
console.log(h1?.textContent);
```
Este operador nos permite acceder a propiedades de un objeto que podría ser nulo sin causar errores en tiempo de ejecución.

### ¿Cómo optimizar el flujo de trabajo con TypeScript y HTML?
Trabajar con TypeScript y HTML implica un ciclo constante de:

1. Escribir código TypeScript
2. Compilar a JavaScript
3. Verificar resultados en el navegador

Este proceso puede volverse tedioso si tenemos que ejecutar manualmente el compilador cada vez que hacemos un cambio. Afortunadamente, TypeScript ofrece el modo "watch" que automatiza este proceso.

### Utilizando el modo watch para compilación automática
El modo watch de TypeScript monitorea los cambios en nuestros archivos `.ts` y los compila automáticamente cuando detecta modificaciones:
```
tsc main.ts --watch
# o la forma abreviada
tsc main.ts -w
```
Con este comando, TypeScript estará atento a cualquier cambio en nuestro archivo y lo compilará instantáneamente, lo que nos permite centrarnos en escribir código sin preocuparnos por el proceso de compilación.

### Integrando la terminal en el editor
Para hacer nuestro flujo de trabajo aún más eficiente, podemos utilizar la terminal integrada en Visual Studio Code:

1. Abrir una nueva terminal en VS Code (Terminal > Nueva Terminal)
2. Navegar hasta la carpeta de nuestro proyecto
3. Ejecutar el comando `tsc` con la opción `--watch`

Esto nos permite tener todo en una sola ventana: nuestro código, la terminal y, en otra pestaña del navegador, los resultados.

### ¿Qué consideraciones debemos tener al trabajar con el DOM en TypeScript?
Al manipular el DOM con TypeScript, hay algunas consideraciones importantes que debemos tener en cuenta para evitar errores y aprovechar al máximo las ventajas del tipado estático.

### Tipado correcto de elementos HTML
TypeScript proporciona interfaces específicas para cada tipo de elemento HTML:

* `HTMLHeadingElement` para elementos de encabezado (h1, h2, etc.)
* `HTMLInputElement` para elementos de entrada
* `HTMLButtonElement` para botones
* Y muchos más

Usar el tipo correcto nos permite acceder a propiedades específicas de cada elemento sin errores de compilación:
```
// Accediendo a propiedades específicas de un input
const inputElement = document.querySelector('#message') as HTMLInputElement;
console.log(inputElement.placeholder); // Propiedad específica de inputs
console.log(inputElement.value);       // Otra propiedad específica
```
### Carga del script en el momento adecuado
Es crucial asegurarse de que nuestro script se cargue después de que el DOM esté completamente cargado. Hay dos formas principales de lograrlo:

1. Usar el atributo `defer` en la etiqueta script:
```
<script src="main.js" defer></script>
```
2. Colocar la etiqueta script al final del body:
```
<body>
    <!-- Contenido HTML -->
    <script src="main.js"></script>
</body>
```
Ambas opciones garantizan que el DOM esté disponible cuando nuestro código intente acceder a él.

**La integración de TypeScript con HTML nos brinda una forma poderosa y segura de manipular el DOM**, aprovechando las ventajas del tipado estático para detectar errores temprano y mejorar la calidad de nuestro código. Con la práctica, el flujo de trabajo entre el editor, la terminal y el navegador se vuelve natural, permitiéndonos desarrollar aplicaciones web más robustas y mantenibles.
