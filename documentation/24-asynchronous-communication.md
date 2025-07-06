**Clase 24 de 26 • Curso de TypeScript**
# Comunicación Asíncrona en TypeScript con Fetch y JSON

### Resumen

La comunicación asíncrona en TypeScript es una herramienta poderosa que permite ejecutar operaciones fuera del hilo principal de ejecución, mejorando significativamente la experiencia del usuario al mantener la interfaz responsiva mientras se procesan datos en segundo plano. Esta funcionalidad es fundamental para desarrolladores que buscan crear aplicaciones web modernas y eficientes.

### ¿Cómo implementar comunicación asíncrona en TypeScript?
La comunicación asíncrona en TypeScript es muy similar a la que se utiliza en Node.js, lo que facilita su implementación si ya tienes experiencia previa con JavaScript. Para demostrar cómo funciona, crearemos un pequeño proyecto que utiliza el método `fetch` para obtener datos de una API y mostrarlos en una página web.

Primero, necesitamos crear la estructura básica de nuestro proyecto:

1. Crear una carpeta llamada "fetch"
2. Dentro de esta carpeta, crear un archivo HTML básico
3. Crear un archivo TypeScript para manejar la lógica

### Preparando el HTML
Nuestro archivo HTML será simple, con solo un botón para solicitar información y un párrafo para mostrar los resultados:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch Example</title>
</head>
<body>
    <button class="btnInfo">Solicitar información</button>
    <p class="info">Aquí aparecerá la información...</p>
    <script src="main.js"></script>
</body>
</html>
```
### Implementando la lógica en TypeScript
Ahora, crearemos un archivo `main.ts` que contendrá la lógica para obtener los datos y mostrarlos en la página:
```
const fetchData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

let button = document.querySelector('.btnInfo') as HTMLButtonElement;
let paragraph = document.querySelector('.info') as HTMLParagraphElement;

button.addEventListener('click', async () => {
    const data = await fetchData('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
    paragraph.textContent = JSON.stringify(data);
});
```
En este código:

1. Creamos una función asíncrona `fetchData` que recibe una URL y devuelve los datos en formato JSON
2. Seleccionamos los elementos HTML con los que interactuaremos
3. Agregamos un evento de clic al botón que, cuando se active, obtendrá los datos y los mostrará en el párrafo

**El uso del operador** `await` **es fundamental** aquí, ya que permite que la aplicación continúe ejecutándose mientras espera la respuesta de la API, sin bloquear el hilo principal.

### Configurando TypeScript para la interoperabilidad con HTML
Para que nuestro código TypeScript funcione correctamente con el HTML, necesitamos crear un archivo de configuración `tsconfig.json`:
```
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "ES2015",
    "lib": ["DOM", "ES2015"],
    "esModuleInterop": true
  }
}
```
Esta configuración es crucial porque:

1. Incluye la librería DOM para poder interactuar con elementos HTML
2. Establece el target de compilación adecuado
3. Configura la interoperabilidad de módulos

### ¿Cómo compilar correctamente el código TypeScript?
Un error común al trabajar con código asíncrono en TypeScript es encontrarse con problemas durante la compilación. Si intentas compilar el archivo con un simple `tsc main.ts`, podrías recibir errores relacionados con promesas o funciones asíncronas.

Para evitar estos problemas, debes compilar utilizando el archivo de configuración:
```
tsc -p tsconfig.json
```
Este comando le indica al compilador que utilice las opciones definidas en el archivo `tsconfig.json`, lo que permitirá que el código asíncrono se compile correctamente.

### ¿Cómo extender esta práctica para aplicaciones reales?
El ejemplo mostrado es básico, pero puedes expandirlo para crear aplicaciones más complejas:

* Procesar los datos JSON para extraer información específica
* Crear elementos HTML dinámicamente para mostrar los datos de forma estructurada
* Implementar manejo de errores para las solicitudes fetch
* Agregar indicadores de carga mientras se obtienen los datos

Por ejemplo, podrías modificar el código para mostrar los datos en una tabla o en tarjetas, en lugar de simplemente volcar todo el JSON en un párrafo:
```
button.addEventListener('click', async () => {
    try {
        const data = await fetchData('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
        
        // Procesar los datos y mostrarlos de forma estructurada
        let formattedOutput = '';
        for (const [key, value] of Object.entries(data)) {
            formattedOutput += `<strong>${key}:</strong> ${value}<br>`;
        }
        
        paragraph.innerHTML = formattedOutput;
    } catch (error) {
        paragraph.textContent = `Error al obtener datos: ${error.message}`;
    }
});
```
La comunicación asíncrona es una habilidad esencial para cualquier desarrollador de TypeScript, ya que permite crear aplicaciones más rápidas y receptivas. Practicar con estos conceptos te ayudará a dominar una de las características más poderosas del desarrollo web moderno.