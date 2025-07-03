**Clase 16 de 26 • Curso de TypeScript**
# Integración de TypeScript en Proyectos Web con HTML y JavaScript

### Resumen

La integración de TypeScript en proyectos web es una habilidad fundamental para los desarrolladores modernos. Este lenguaje de programación, que mejora el tipado en JavaScript, puede potenciar significativamente tus aplicaciones web al proporcionar detección temprana de errores y mejor documentación del código. Aprender a unificar TypeScript con HTML te permitirá aprovechar lo mejor de ambos mundos: el tipado estático de TypeScript y la universalidad de JavaScript en el navegador.

### ¿Cómo integrar TypeScript en un proyecto web?
Hasta ahora, es posible que hayas trabajado con TypeScript de manera aislada, pero el verdadero poder de este lenguaje se manifiesta cuando lo incorporas a proyectos web reales. La integración es sorprendentemente sencilla y requiere solo unos pocos pasos.

Para comenzar, necesitamos crear una estructura básica para nuestro proyecto web:

* Crea una carpeta llamada "web" dentro de tu proyecto TypeScript.
* Dentro de esta carpeta, crea un archivo HTML básico llamado "index.html".
* Añade la estructura HTML estándar a este archivo.

El HTML puede ser tan simple como este:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript Web Project</title>
</head>
<body>
    <!-- Tu contenido HTML aquí -->
    
    <script src="main.js"></script>
</body>
</html>
```
**Es importante notar** que en el HTML estamos referenciando un archivo JavaScript (`main.js`), no un archivo TypeScript. Esto es porque los navegadores no pueden interpretar directamente archivos TypeScript.

### ¿Cómo convertir TypeScript a JavaScript para el navegador?
El siguiente paso es crear un archivo TypeScript que luego compilaremos a JavaScript:

1. Crea un archivo llamado "main.ts" en la misma carpeta que tu HTML.
2. Escribe algún código TypeScript simple, por ejemplo:
```
console.log("Hola desde mi explorador");
```
3. Compila el archivo TypeScript a JavaScript usando el compilador de TypeScript (tsc): 
```
tsc main.ts
```
Este comando generará un archivo `main.js` que es exactamente lo que nuestro HTML está esperando. La magia de TypeScript es que nos permite escribir código con tipado estático, pero luego se compila a JavaScript puro que cualquier navegador puede entender.

### ¿Cómo visualizar y probar tu proyecto web con TypeScript?
Una vez que tienes tu HTML y tu archivo TypeScript compilado, necesitas una forma de ver tu proyecto en acción. Hay varias extensiones de Visual Studio Code que facilitan este proceso: _**Live Server o Live Preview**_  .

Estas extensiones te permiten ejecutar un servidor local para visualizar tu proyecto web en tiempo real:

1. __Live Server de Ritwick Dey:__ Con más de 60 millones de descargas, esta popular extensión añade un botón "Go Live" a VS Code.
2. __Live Preview de Microsoft:__ Una alternativa que proporciona una vista previa integrada dentro del editor.

Para usar estas extensiones:

1. Instala una de ellas desde el marketplace de VS Code.
2. Abre tu archivo HTML.
3. Haz clic en el botón "Go Live" o "Show Preview" según la extensión que hayas instalado.
4. Se abrirá una URL local (similar a localhost) mostrando tu página web.

### Verificando la integración de TypeScript
Para confirmar que tu código TypeScript está funcionando correctamente:

1. Abre las herramientas de desarrollo del navegador (F12 o clic derecho → Inspeccionar).
2. Ve a la pestaña "Console".
3. Deberías ver el mensaje "Hola desde mi explorador" que definiste en tu archivo TypeScript.

**Este proceso demuestra** que TypeScript ha transferido su funcionalidad a JavaScript, y este código está siendo ejecutado correctamente por el navegador a través del archivo HTML.

### ¿Por qué es importante esta integración?
La capacidad de unificar TypeScript con proyectos web tradicionales ofrece numerosas ventajas:

* __Mejor detección de errores:__ TypeScript identifica problemas potenciales antes de que lleguen al navegador.
* __Autocompletado mejorado:__ Los editores de código ofrecen sugerencias más precisas gracias al sistema de tipos.
* __Refactorización más segura:__ Los cambios en el código son más seguros con la verificación de tipos.
* __Documentación implícita:__ Los tipos sirven como documentación para otros desarrolladores.

Esta integración no representa un obstáculo en el desarrollo de aplicaciones web, sino que proporciona una capa adicional de seguridad y eficiencia en tu flujo de trabajo.

La combinación de TypeScript con HTML es solo el comienzo. A medida que avances, podrás integrar frameworks como React, Angular o Vue.js, todos los cuales se benefician enormemente del sistema de tipos de TypeScript.

¿Has intentado integrar TypeScript en tus proyectos web?