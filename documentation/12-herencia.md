**Clase 12 de 26 • Curso de TypeScript**
# Extender Clases en TypeScript: Herencia y Métodos Nuevos

### Resumen

La herencia de clases en TypeScript es una característica poderosa que permite extender la funcionalidad de clases existentes sin modificar su código original. Esta técnica fundamental de la programación orientada a objetos te permite crear jerarquías de clases más organizadas y reutilizar código de manera eficiente, ahorrando tiempo y reduciendo la posibilidad de errores en tus proyectos.

### ¿Cómo extender clases en TypeScript?
La extensión de clases en TypeScript nos permite crear una nueva clase que hereda todas las propiedades y métodos de una clase base, añadiendo nuevas funcionalidades sin modificar la clase original. Esto se logra mediante la palabra clave extends.

Para ilustrar este concepto, partiremos de una clase base llamada `Persona` que contiene propiedades básicas como nombre, edad y si es desarrollador:
```
export class Persona {
    constructor(
        public nombre: string,
        public edad: number,
        public esDesarrollador: boolean
    ) {}
}
```
Ahora, para extender esta clase y crear una nueva llamada `Empleado`, seguimos estos pasos:

1. Creamos un nuevo archivo llamado `empleado.ts`
2. Importamos la clase base `Persona`
3. Utilizamos la palabra clave `extends` para heredar de `Persona`

```
import { Persona } from './persona';

export class Empleado extends Persona {
    constructor(
        nombre: string,
        edad: number,
        esDesarrollador: boolean,
        public puesto: string
    ) {
        super(nombre, edad, esDesarrollador);
    }
    
    saludar() {
        return `Hola, trabajo como ${this.puesto}`;
    }
    
    obtenerInfo() {
        return `Tengo ${this.edad} años y trabajo como ${this.puesto}`;
    }
}
```
### ¿Qué ocurre en el constructor de la clase derivada?
El constructor de la clase derivada (`Empleado`) debe llamar al constructor de la clase base (`Persona`) utilizando la palabra clave `super()`. Esta llamada es obligatoria y debe realizarse antes de acceder a cualquier propiedad con `this` dentro del constructor.

En nuestro ejemplo:

* Recibimos los parámetros originales (nombre, edad, esDesarrollador)
* Añadimos un nuevo parámetro (puesto)
* Llamamos a `super()` con los parámetros que necesita la clase base
* Definimos la nueva propiedad `puesto` como pública

**Es importante destacar** que la clase derivada hereda todas las propiedades y métodos de la clase base, pero también puede:

* Añadir nuevas propiedades (como puesto)
* Añadir nuevos métodos (como saludar() y obtenerInfo())
* Sobrescribir métodos de la clase base (si fuera necesario)

### ¿Cómo utilizar las clases extendidas?
Una vez que hemos creado nuestra jerarquía de clases, podemos utilizarlas en nuestro código principal. Para ello, creamos un archivo main.ts:
```
import { Empleado } from './empleado';

const empleado = new Empleado('Juan', 30, true, 'Desarrollador Frontend');

console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log(empleado.nombre);
```
Al ejecutar este código, obtendremos:

* "Hola, trabajo como Desarrollador Frontend"
* "Tengo 30 años y trabajo como Desarrollador Frontend"
* "Juan"

### Compilación en cascada
Una característica interesante de TypeScript es la `compilación en cascada`. Cuando compilamos un archivo que importa otros archivos, TypeScript automáticamente compila todos los archivos dependientes.

Por ejemplo, al ejecutar:
```
tsc main.ts
```
TypeScript compilará:

1. `main.ts` (el archivo que indicamos)
2. `empleado.ts` (porque `main.ts` lo importa)
3. `persona.ts` (porque `empleado.ts` lo importa)

Esto genera los correspondientes archivos JavaScript (`main.js`, `empleado.js`, `persona.js`) sin necesidad de compilar cada uno manualmente. Esta característica ahorra tiempo y asegura que todas las dependencias estén correctamente compiladas.

### ¿Por qué usar la herencia de clases?
La herencia de clases ofrece múltiples beneficios:

* __Reutilización de código:__ evita duplicar propiedades y métodos comunes
* __Organización jerárquica:__ permite crear estructuras lógicas de objetos
* __Mantenibilidad:__ facilita los cambios en la clase base que se propagan a todas las clases derivadas
* __Extensibilidad:__ permite añadir funcionalidades sin modificar el código original

La herencia es especialmente útil cuando trabajas con objetos que comparten características comunes pero necesitan funcionalidades específicas adicionales.

La herencia de clases en TypeScript es una herramienta poderosa que te permite crear código más organizado, mantenible y extensible. Dominar esta técnica te ayudará a desarrollar aplicaciones más robustas y a aprovechar al máximo las ventajas de la programación orientada a objetos en tus proyectos de TypeScript.

¿Has utilizado la herencia de clases en tus proyectos? ¿Qué otras técnicas de programación orientada a objetos consideras fundamentales?