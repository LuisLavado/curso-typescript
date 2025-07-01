**Clase 11 de 26 • Curso de TypeScript**
# Acceso y Modificadores de Visibilidad en Clases de Programación

### Resumen

La programación orientada a objetos (POO) es uno de los paradigmas más poderosos en el desarrollo de software, permitiéndonos crear estructuras de código organizadas y reutilizables. Uno de los conceptos fundamentales de la POO es el control de acceso a propiedades y métodos, lo que nos permite establecer diferentes niveles de visibilidad para nuestros componentes. Entender estos niveles de acceso es crucial para diseñar clases robustas y seguras en cualquier lenguaje de programación.

### ¿Qué son los modificadores de acceso en clases?
Los modificadores de acceso son palabras clave que determinan desde dónde se puede acceder a las propiedades y métodos de una clase. Estos modificadores son fundamentales para implementar el principio de encapsulamiento, uno de los pilares de la programación orientada a objetos.

En la mayoría de los lenguajes de programación orientados a objetos, existen tres modificadores de acceso principales:

* __Public:__ Accesible desde cualquier parte del código.
* __Protected:__ Accesible solo desde la clase misma y sus clases derivadas.
* __Private:__ Accesible únicamente desde dentro de la clase donde se define.
Veamos cómo implementar estos modificadores en nuestro código:
```
class Persona {
    // public es accesible desde cualquier parte
    public nombre: string;
    
    // protected solamente es accesible dentro de la clase y clases que hereden
    protected edad: number;
    
    // private solamente es accesible dentro de la clase
    private desarrollador: boolean;
    
    constructor(nombre: string, edad: number, desarrollador: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.desarrollador = desarrollador;
    }
    
    public saludar(): string {
        return `Hola, me llamo ${this.nombre}`;
    }
    
    protected obtenerEdad(): number {
        return this.edad;
    }
    
    private esDev(): boolean {
        return this.desarrollador;
    }
}
```
### ¿Cómo afectan los modificadores de acceso a la visibilidad?
Cuando definimos una clase con diferentes modificadores de acceso, estamos estableciendo reglas sobre cómo se puede interactuar con esa clase desde diferentes partes de nuestro código.

Si creamos una instancia de la clase Persona en otro archivo:
```
const persona = new Persona("Juan", 30, true);

// Podemos acceder a propiedades y métodos públicos
console.log(persona.nombre); // "Juan"
console.log(persona.saludar()); // "Hola, me llamo Juan"

// Pero no podemos acceder a elementos protegidos o privados
// console.log(persona.edad); // Error: Property 'edad' is protected
// console.log(persona.obtenerEdad()); // Error: Property 'obtenerEdad' is protected
// console.log(persona.desarrollador); // Error: Property 'desarrollador' is private
// console.log(persona.esDev()); // Error: Property 'esDev' is private
```
Es importante notar que los editores de código como Visual Studio Code nos ayudan a identificar qué elementos son accesibles mediante el autocompletado. **Cuando escribimos** `persona.` **solo nos aparecerán las propiedades y métodos públicos disponibles.**

### ¿Por qué son importantes los modificadores de acceso?
Los modificadores de acceso no son solo una formalidad sintáctica, sino que cumplen funciones cruciales en el diseño de software:

### Encapsulamiento y seguridad
El uso adecuado de modificadores de acceso nos permite ocultar la implementación interna de nuestras clases, exponiendo solo lo que es necesario para su uso. Esto es fundamental para crear APIs estables y seguras.

Por ejemplo, en una clase que maneja conexiones a bases de datos:
```
class DatabaseManager {
    private connection: any;
    
    private connectToDatabase() {
        // Lógica sensible de conexión
        this.connection = /* código de conexión */;
    }
    
    public getData(query: string) {
        if (!this.connection) {
            this.connectToDatabase();
        }
        // Retornar datos
    }
}
```
En este caso, hacemos privado el método de conexión a la base de datos para proteger la información sensible, mientras que exponemos públicamente solo el método para obtener datos.

### Mantenimiento y evolución del código
Al limitar el acceso a ciertos componentes, podemos modificar la implementación interna sin afectar el código que utiliza nuestra clase, siempre que mantengamos la misma interfaz pública.

### Claridad en la intención
Los modificadores de acceso comunican claramente a otros desarrolladores (y a nuestro yo futuro) qué partes de la clase están diseñadas para ser utilizadas externamente y cuáles son detalles de implementación interna.

__¿Cómo elegir el modificador de acceso adecuado?__  
La elección del modificador de acceso depende del propósito de cada propiedad o método:

* __Public:__ Utiliza este modificador para elementos que forman parte de la API pública de tu clase, que necesitan ser accesibles desde cualquier parte del código.

* __Protected:__ Es ideal para elementos que deben ser accesibles desde la clase actual y sus subclases, pero no desde el exterior. Útil cuando implementas herencia.

* __Private:__ Reserva este modificador para detalles de implementación interna que no deberían ser accesibles ni visibles desde fuera de la clase.

**Una buena práctica es comenzar con el nivel más restrictivo posible** (private) y solo aumentar la visibilidad cuando sea necesario.

Los modificadores de acceso son herramientas poderosas que nos ayudan a crear código más robusto, mantenible y seguro. Dominar su uso es esencial para cualquier desarrollador que trabaje con programación orientada a objetos. Te invitamos a experimentar con los diferentes niveles de acceso en tus propias clases para comprender mejor cómo pueden mejorar la estructura de tu código.

¿Has utilizado modificadores de acceso en tus proyectos? ¿Qué estrategias sigues para decidir la visibilidad de tus propiedades y métodos?