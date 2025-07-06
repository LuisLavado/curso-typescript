**Clase 20 de 26 • Curso de TypeScript**
# Creación de Proyectos Angular con TypeScript Paso a Paso

### Resumen

La integración de TypeScript con Angular representa una poderosa combinación para el desarrollo front-end moderno. Este framework, reconocido por su eficiencia en la presentación de datos, aprovecha al máximo las capacidades de tipado que ofrece TypeScript, creando una sinergia perfecta para construir aplicaciones web robustas y mantenibles. Veamos cómo estos dos elementos trabajan juntos y cómo podemos comenzar a utilizarlos.

### ¿Qué hace que Angular y TypeScript sean una combinación ideal?
Angular es uno de los frameworks más populares para el desarrollo front-end, destacándose por su capacidad para presentar datos de manera eficiente en sitios web. Lo que hace que TypeScript sea el compañero perfecto para Angular es precisamente su sistema de tipado, que permite estructurar y validar los datos que se manejan en la aplicación.

**La ventaja principal** es que todos los proyectos de Angular trabajan con TypeScript de forma nativa, lo que significa que no necesitas configuraciones adicionales para comenzar a disfrutar de los beneficios de ambas tecnologías.

Esta integración natural facilita:

* Mayor seguridad en el código
* Detección temprana de errores
* Mejor documentación implícita
* Autocompletado y sugerencias más precisas en el editor

### ¿Cómo crear y configurar un proyecto de Angular con TypeScript?
Para comenzar a trabajar con Angular, necesitamos instalar su CLI (Command Line Interface) que nos permitirá crear y gestionar proyectos fácilmente.

### Instalación del CLI de Angular
El primer paso es instalar la herramienta de línea de comandos:
```
sudo npm install -g @angular/cli
```
Una vez instalada, podemos verificar que todo esté correcto con:
```
ng version
```
Si la instalación fue exitosa, veremos la versión del CLI y un logo de Angular en ASCII.

### Creación de un nuevo proyecto
Para crear un nuevo proyecto, utilizamos el comando:
```
ng new proyecto-angular
```
Durante la creación, Angular nos preguntará algunas opciones de configuración:

* Qué tipo de hojas de estilo queremos usar (CSS, SCSS, etc.)
* Si queremos habilitar Server-Side Rendering
Una vez completada la instalación, podemos ejecutar el proyecto con:
```
cd proyecto-angular
ng serve
```
Este comando compilará el proyecto y lo servirá en `http://localhost:4200/`, donde podremos ver la página de inicio predeterminada de Angular.

### Estructura del proyecto y archivos clave
La estructura de un proyecto Angular incluye varios archivos y carpetas importantes:

* src/: Contiene el código fuente de la aplicación
    * main.ts: Punto de entrada de la aplicación
    * app/: Carpeta con los componentes principales
        * app.component.html: Plantilla HTML del componente principal
        * app.component.ts: Lógica del componente en TypeScript

* tsconfig.json: Archivo de configuración de TypeScript

**El archivo tsconfig.json** merece especial atención, ya que contiene la configuración específica de TypeScript para el proyecto Angular. Entre sus características destacadas encontramos:

* Configuración de `outDirectory` para los archivos compilados
* Habilitación de `decoradores`, que son fundamentales para la comunicación entre Angular y TypeScript
* Otras configuraciones específicas que Angular necesita para funcionar correctamente

### ¿Cómo modificar la plantilla inicial de Angular?
Una de las ventajas de Angular es que proporciona una plantilla inicial completa que podemos modificar según nuestras necesidades.

Para hacer cambios básicos, podemos editar el archivo app.component.html. Por ejemplo, podemos modificar el mensaje de bienvenida:
```
<h1>Hola, felicidades</h1>
<p>Tu aplicación se está ejecutando</p>
```
Al guardar estos cambios y con el servidor en ejecución (`ng serve`), veremos inmediatamente los resultados en el navegador.

### El papel de los decoradores en Angular
Un aspecto fascinante de la integración entre Angular y TypeScript son los decoradores. En el archivo app.component.ts podemos ver un ejemplo:
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular';
}
```
El decorador `@Component` es una característica especial que permite a Angular entender cómo debe tratar esta clase. Los decoradores son metadatos que modifican el comportamiento de clases, propiedades o métodos, y son fundamentales en el funcionamiento de Angular.

**Lo más interesante** es que no necesitamos preocuparnos por la compilación manual de TypeScript, ya que el CLI de Angular se encarga automáticamente de este proceso, haciendo que la experiencia de desarrollo sea mucho más fluida.

La combinación de Angular con TypeScript ofrece una experiencia de desarrollo robusta y productiva para crear aplicaciones web modernas.