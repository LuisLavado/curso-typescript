**Clase 19 de 26 • Curso de TypeScript**
# Creación de Proyectos React con TypeScript y Plantillas NPM

### Resumen

La creación de aplicaciones web modernas se ha simplificado enormemente gracias a los frameworks de desarrollo frontend. Estos entornos de trabajo nos permiten construir interfaces interactivas y dinámicas con mayor facilidad, reduciendo el tiempo de configuración y permitiéndonos enfocarnos en lo que realmente importa: la lógica de negocio y la experiencia de usuario. React, desarrollado por Facebook, se ha posicionado como uno de los frameworks más populares y potentes del mercado, especialmente cuando se combina con TypeScript para obtener un desarrollo más robusto y con menos errores.

### ¿Cómo crear un proyecto de React con TypeScript?
React es un framework destacado en el desarrollo frontend que permite crear interfaces de usuario interactivas de manera eficiente. Combinarlo con TypeScript nos brinda ventajas adicionales como el tipado estático, lo que reduce errores en tiempo de desarrollo. Crear un proyecto que integre ambas tecnologías es sorprendentemente sencillo gracias a herramientas como Vite.

Para iniciar un proyecto de React con TypeScript, seguimos estos pasos:

1. Abrimos VS Code y creamos una carpeta para nuestro proyecto.
2. Abrimos la terminal y nos ubicamos en la carpeta creada.
3. Ejecutamos el comando: `npm create vite@latest`.
4. Seguimos el asistente interactivo para configurar nuestro proyecto.

El asistente nos pedirá información básica como:

* Nombre del proyecto
* Nombre del paquete
* Framework a utilizar (seleccionamos React)
* Variante (seleccionamos TypeScript + SWC para mejor rendimiento)

Una vez completado este proceso, tendremos una estructura de proyecto lista para empezar a desarrollar. La magia de estas plantillas es que toda la configuración compleja ya está hecha por nosotros, permitiéndonos concentrarnos en escribir código productivo desde el primer momento.

### Estructura y ejecución del proyecto generado
Después de crear el proyecto, encontraremos una estructura de archivos organizada que incluye:

* Carpeta `src`: contiene el código fuente de nuestra aplicación
* Carpeta `public`: para archivos estáticos
* Archivos de configuración como `package.json` y `tsconfig.json`

Para poner en marcha nuestro proyecto, debemos:
```
# Movernos a la carpeta del proyecto
cd nombre-del-proyecto

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```
Al ejecutar estos comandos, nuestro proyecto estará disponible en una dirección local (generalmente `http://localhost:5173/`) y podremos ver una página de bienvenida con un contador funcional.

### ¿Qué son los archivos TSX y cómo funcionan?
Una de las particularidades de trabajar con React y TypeScript es la extensión de archivos `.tsx`. **Esta extensión especial combina TypeScript con JSX** (JavaScript XML), permitiéndonos escribir código HTML directamente dentro de nuestros archivos de TypeScript.

Si exploramos el archivo `App.tsx` generado en nuestro proyecto, veremos código como este:
```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <div className="App">
      <h1>Plantilla Platzi</h1>
      <div className="card">
        <button onClick={() => setContador((contador) => contador + 1)}>
          contador: {contador}
        </button>
      </div>
    </div>
  )
}

export default App
```
Este archivo muestra la sintaxis JSX, donde podemos escribir elementos HTML como `<div>`, `<h1>` y `<button>` directamente en nuestro código TypeScript. **La magia ocurre cuando modificamos este archivo**: los cambios se reflejan instantáneamente en el navegador gracias al hot reloading que proporciona Vite.

### Configuración de TypeScript en el proyecto
El proyecto generado incluye archivos de configuración específicos para TypeScript:

* `tsconfig.json`: el archivo principal que referencia a otros archivos de configuración
* `tsconfig.app.json`: configuración específica para la aplicación
* `tsconfig.node.json`: configuración para el entorno Node.js

Estos archivos contienen las opciones del compilador de TypeScript (`compilerOptions`) que determinan cómo se compila nuestro código. **La ventaja de usar una plantilla es que estas configuraciones ya están optimizadas** para trabajar con React, evitándonos tener que configurarlas manualmente.

### ¿Cómo funciona el proceso de compilación?
El proceso de compilación en un proyecto React con TypeScript está automatizado gracias a los scripts definidos en el archivo `package.json`. Cuando ejecutamos `npm run dev`, se activa una cadena de procesos que:

1. Inicia el servidor de desarrollo de Vite
2. Compila los archivos TypeScript/TSX a JavaScript
3. Sirve la aplicación en un servidor local
4. Observa cambios en los archivos para recompilar automáticamente

**El comando** `tsc` **(TypeScript Compiler) es el responsable de transformar nuestro código TypeScript en JavaScript** que el navegador puede entender. Este proceso está configurado en el script build del package.json:
```
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview"
}
```
La belleza de este sistema es que todo ocurre de manera transparente para el desarrollador. No necesitamos preocuparnos por ejecutar manualmente el compilador o configurar herramientas adicionales.

Las plantillas como la que hemos creado nos permiten comenzar rápidamente con un proyecto React y TypeScript sin tener que lidiar con la configuración inicial. Podemos personalizar esta base según nuestras necesidades específicas, agregando o eliminando componentes y funcionalidades. **Este enfoque nos ahorra tiempo valioso** que podemos invertir en desarrollar las características únicas de nuestra aplicación en lugar de configurar el entorno de desarrollo.
