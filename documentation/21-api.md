**Clase 21 de 26 • Curso de TypeScript**
# Creación de APIs con TypeScript y Express paso a paso

### Resumen

La creación de APIs con TypeScript y Express representa una poderosa combinación para desarrolladores que buscan robustez y seguridad en sus aplicaciones. El sistema de tipado estático de TypeScript complementa perfectamente las capacidades de Express, permitiendo construir servicios web más confiables y mantenibles. Esta sinergia no solo mejora la experiencia de desarrollo, sino que también fortalece la calidad del producto final.

### ¿Por qué crear APIs con TypeScript?
TypeScript ofrece ventajas significativas cuando se trata de desarrollar APIs, especialmente cuando trabajamos con Express como framework. El tipado estático nos permite definir claramente la estructura de los datos que fluyen a través de nuestra aplicación, lo que resulta en:
* Mayor seguridad en el manejo de datos.
* Mejor experiencia de desarrollo con autocompletado y detección temprana de errores.
* Código más mantenible y autodocumentado.
* Mayor facilidad para trabajar en equipos grandes.

Cuando tipamos los datos que obtenemos de cualquier fuente de información, podemos manejarlos con mayor confianza y precisión a través de toda nuestra aplicación web, reduciendo errores en tiempo de ejecución.

### ¿Cómo configurar un proyecto de API con TypeScript y Express?
Para comenzar a desarrollar una API con TypeScript y Express, necesitamos configurar adecuadamente nuestro entorno de desarrollo. Este proceso implica varios pasos importantes:

### Inicialización del proyecto
Primero, creamos una estructura de carpetas adecuada y inicializamos nuestro proyecto con npm:
```
mkdir API
cd API
npm init -y
```
Este comando crea un archivo `package.json` básico que nos permitirá gestionar las dependencias de nuestro proyecto.

### Instalación de dependencias
A continuación, necesitamos instalar Express y las dependencias relacionadas con TypeScript:
```
npm install express cors dotenv
npm install typescript ts-node @types/node @types/express @types/cors --save-dev
```
Estas dependencias son fundamentales:

* __Express:__ El framework para crear nuestra API.
* __cors:__ Para manejar solicitudes de origen cruzado.
* __dotenv:__ Para gestionar variables de entorno.
* __TypeScript y ts-node:__ Para compilar y ejecutar código TypeScript.
* __@types/...:__ Definiciones de tipos para las bibliotecas que usamos.

### Configuración de TypeScript
Creamos un archivo `tsconfig.json` para configurar TypeScript:
```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```
Esta configuración establece:

* El directorio de salida para los archivos compilados (dist).
* El tipo de módulo que utilizaremos (commonjs).
* La interoperabilidad entre módulos ES y CommonJS.

### Estructura del proyecto
Es recomendable organizar nuestro código en una estructura clara. Por ejemplo:
```
API/
├── src/
│   └── server.ts
├── package.json
└── tsconfig.json
```
### ¿Cómo implementar un servidor básico con Express y TypeScript?
Una vez configurado el entorno, podemos crear nuestro servidor Express con TypeScript. La implementación básica es similar a Node.js puro, pero con la ventaja del tipado estático.

Creación del servidor
En el archivo `src/server.ts`, implementamos nuestro servidor:
```
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Configuración de variables de entorno
dotenv.config();

// Inicialización de la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/hello', (req, res) => {
  res.send('Hola desde la API con TypeScript');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```
### Configuración de scripts en package.json
Para facilitar el desarrollo y la compilación, configuramos scripts en nuestro `package.json`:
```
{
  "scripts": {
    "start": "node dist/server.js",
    "dev": "ts-node src/server.ts",
    "build": "tsc"
  }
}
```
Estos scripts nos permiten:

* __dev:__ Ejecutar la aplicación en modo desarrollo con ts-node.
* __build:__ Compilar el código TypeScript a JavaScript.
* __start:__ Ejecutar la versión compilada de la aplicación.

### Ejecución del servidor
Para iniciar el servidor en modo desarrollo, ejecutamos:
```
npm run dev
```
Si todo está configurado correctamente, veremos el mensaje "Servidor corriendo en http://localhost:3000" y podremos acceder a la ruta `/hello` en nuestro navegador para ver el mensaje "Hola desde la API con TypeScript".

La sintaxis para crear rutas en Express con TypeScript es prácticamente idéntica a la de JavaScript puro, pero con la ventaja adicional del tipado. Podemos implementar fácilmente los métodos HTTP estándar:
```
// GET - Obtener datos
app.get('/recursos', (req, res) => {
  // Lógica para obtener recursos
});

// POST - Crear datos
app.post('/recursos', (req, res) => {
  // Lógica para crear un recurso
});

// PUT - Actualizar datos
app.put('/recursos/:id', (req, res) => {
  // Lógica para actualizar un recurso
});

// DELETE - Eliminar datos
app.delete('/recursos/:id', (req, res) => {
  // Lógica para eliminar un recurso
});
```
El verdadero poder de TypeScript se manifiesta cuando empezamos a tipar nuestros datos, parámetros de solicitud y respuestas, lo que nos permite crear APIs más seguras y mantenibles.

La combinación de TypeScript y Express ofrece un equilibrio perfecto entre flexibilidad y seguridad para el desarrollo de APIs modernas.