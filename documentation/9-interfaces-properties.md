**Clase 9 de 26 • Curso de TypeScript**
# Propiedades y Extensiones en Interfaces de TypeScript

### Resumen

La implementación de interfaces en TypeScript es una herramienta poderosa que permite estructurar y organizar tu código de manera eficiente. Al definir contratos claros para tus objetos, las interfaces te ayudan a detectar errores tempranamente y a crear código más mantenible. En este artículo, exploraremos cómo implementar diferentes tipos de propiedades en interfaces y cómo extenderlas para maximizar la reutilización de código.

### ¿Cómo implementar propiedades opcionales en interfaces?
Las interfaces en TypeScript no solo nos permiten definir la estructura de nuestros objetos, sino que también nos ofrecen flexibilidad a través de propiedades opcionales. Estas propiedades se identifican con un signo de interrogación (?) después del nombre de la propiedad.

Veamos un ejemplo práctico:
```
interface Direccion {
  calle: string;
  numero: number;
  ciudad?: string;
}
```
En esta interfaz, ciudad es una propiedad opcional gracias al signo de interrogación. Esto significa que podemos implementar esta interfaz de dos formas diferentes:
```
// Implementación sin la propiedad opcional
const direccion: Direccion = {
  calle: "Calle Falsa",
  numero: 123
};

// Implementación incluyendo la propiedad opcional
const direccionCompleta: Direccion = {
  calle: "Calle Falsa",
  numero: 123,
  ciudad: "Springfield"
};
```
**La ventaja de las propiedades opcionales** es que nos permiten crear estructuras flexibles que se adaptan a diferentes contextos sin generar errores. Sin embargo, es importante recordar que las propiedades no marcadas como opcionales siguen siendo obligatorias.

Si intentamos crear un objeto que omita una propiedad obligatoria, TypeScript nos mostrará un error inmediatamente:
```
// Esto generará un error
const direccionIncorrecta: Direccion = {
  calle: "Calle Falsa",
  // Error: La propiedad 'numero' es obligatoria
  ciudad: "Springfield"
};
```

### ¿Cómo crear propiedades de solo lectura en interfaces?
Otra característica poderosa de las interfaces en TypeScript es la capacidad de definir propiedades de solo lectura mediante la palabra clave `readonly`. Estas propiedades solo pueden ser asignadas cuando se crea el objeto y no pueden ser modificadas posteriormente.
```
interface PersonaReadOnly {
  readonly nombre: string;
  readonly edad: number;
  readonly esDesarrollador: boolean;
}
```
Al implementar esta interfaz, podemos asignar valores iniciales a todas las propiedades:
```
const personaRead: PersonaReadOnly = {
  nombre: "Amin",
  edad: 30,
  esDesarrollador: true
};
```
Sin embargo, si intentamos modificar cualquiera de estas propiedades después de la inicialización, TypeScript nos mostrará un error:
```
// Esto generará un error
personaRead.nombre = "Marce"; // Error: No se puede asignar a 'nombre' porque es una propiedad de solo lectura
```
Las propiedades de solo lectura son especialmente útiles cuando queremos garantizar que ciertos valores permanezcan constantes durante toda la vida útil de un objeto, proporcionando así mayor seguridad y previsibilidad en nuestro código.

### ¿Cómo extender interfaces para reutilizar código?
Una de las características más potentes de las interfaces en TypeScript es la capacidad de extenderlas. Esto nos permite crear nuevas interfaces basadas en interfaces existentes, heredando todas sus propiedades y añadiendo nuevas.
```
interface Persona {
  readonly nombre: string;
  readonly edad: number;
  readonly esDesarrollador: boolean;
}

interface Empleado extends Persona {
  puesto: string;
}
```
En este ejemplo, la interfaz `Empleado` extiende la interfaz `Persona`, lo que significa que hereda todas las propiedades de `Persona` (`nombre`, `edad` y `esDesarrollador`) y añade una nueva propiedad: `puesto`.

Ahora podemos implementar la interfaz `Empleado`:
```
const empleado: Empleado = {
  nombre: "Amin",
  edad: 30,
  esDesarrollador: true,
  puesto: "Desarrollador Senior"
};
```
**La extensión de interfaces es extremadamente útil** para modelar relaciones jerárquicas entre diferentes entidades en nuestro dominio. En lugar de duplicar propiedades comunes en múltiples interfaces, podemos definirlas una vez y extenderlas según sea necesario.

Esta técnica nos permite:

* __Reducir la duplicación de código__
* __Mantener una estructura clara y organizada__
* __Facilitar los cambios futuros__, ya que las modificaciones en la interfaz base se propagan automáticamente a todas las interfaces que la extienden

La implementación de interfaces con propiedades opcionales, de solo lectura y la extensión de interfaces son herramientas poderosas que te ayudarán a escribir código TypeScript más limpio, mantenible y escalable. Cuanto más practiques con estas técnicas, más apreciarás cómo te ayudan a ahorrar tiempo y a evitar errores en tus proyectos, especialmente cuando estos crecen en complejidad y tamaño.

¿Has utilizado interfaces en tus proyectos de TypeScript? ¿Qué técnicas has encontrado más útiles para organizar tu código?