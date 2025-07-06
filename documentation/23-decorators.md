**Clase 23 de 26 • Curso de TypeScript**
# Implementación de Decoradores de Clase en TypeScript y Angular

### Resumen

Los decoradores en TypeScript representan una poderosa herramienta para extender la funcionalidad de clases, métodos, propiedades y parámetros. Esta característica, aunque experimental, ofrece una forma elegante de transferir metadatos y añadir comportamientos adicionales a elementos existentes, siendo especialmente útil en frameworks como Angular donde la comunicación entre componentes es fundamental.

### ¿Qué son los decoradores en TypeScript?
Los decoradores son un patrón de diseño que permite añadir funcionalidades adicionales a elementos existentes sin modificar su estructura original. En TypeScript, se identifican fácilmente por el símbolo `@` seguido del nombre del decorador.

Estos pueden implementarse en:

* Clases
* Métodos
* Propiedades
* Parámetros

La principal ventaja de los decoradores es que permiten transferir metadatos entre diferentes partes de tu aplicación, facilitando la comunicación entre componentes, especialmente en frameworks como Angular.

### ¿Cómo implementar un decorador de clase?
Para implementar un decorador de clase, necesitamos seguir estos pasos:

1. Crear una función que servirá como implementación del decorador.
2. Aplicar el decorador a la clase usando la sintaxis `@nombreDecorador`.
3. Configurar el proyecto para soportar decoradores.
Veamos un ejemplo práctico:
```
// Implementación del decorador
function personaDeck(target: Function) {
  console.log(target);
  
  // Extendemos la funcionalidad añadiendo un nuevo método
  target.prototype.despedir = function(despedida: string): string {
    return despedida + " " + this.nombre;
  };
}

// Aplicación del decorador a la clase
@personaDeck
class Persona2 {
  nombre: string;
  edad: number;
  
  // Declaramos el método que será añadido por el decorador
  despedir!: (despedida: string) => string;
  
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  
  saludar(saludo: string): string {
    return `${saludo}, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
  }
}
```
**Es importante notar** que la función del decorador debe definirse antes de usarla con la sintaxis `@`. De lo contrario, obtendremos un error en tiempo de ejecución.

### ¿Cómo habilitar los decoradores en un proyecto TypeScript?
Para utilizar decoradores en TypeScript, debemos habilitar la opción experimental en nuestro archivo de configuración `tsconfig.json`:
```
{
  "compilerOptions": {
    "experimentalDecorators": true,
    // otras opciones...
  }
}
```
Puedes crear este archivo ejecutando el comando tsc --init en la terminal dentro de tu proyecto.

### ¿Por qué usar decoradores en lugar de otras técnicas?
Aunque existen otras formas de extender la funcionalidad de clases (como la herencia o las interfaces), los decoradores ofrecen ventajas únicas:

1. __Metadatos accesibles:__ Los metadatos pueden ser accedidos desde cualquier parte del proyecto, incluyendo archivos HTML.
2. __Comunicación eficiente:__ Facilitan la interacción entre diferentes componentes.
3. __Separación de responsabilidades:__ Permiten añadir funcionalidades sin modificar el código original.
4. __Integración con frameworks:__ Son especialmente útiles en frameworks como Angular, donde los decoradores como `@Component` son fundamentales.

### Ejemplo práctico en Angular
En Angular, los decoradores son una parte esencial del framework. Por ejemplo, el decorador @Component permite definir metadatos para un componente:
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Aplicación Angular';
}
```

Este decorador establece la comunicación entre la clase TypeScript y su correspondiente plantilla HTML, facilitando el intercambio de datos y comportamientos.

Los decoradores en TypeScript pueden parecer complejos al principio, pero una vez que comprendes su funcionamiento, se convierten en una herramienta invaluable para crear código más limpio, modular y fácil de mantener.