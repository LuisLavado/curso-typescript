**Clase 14 de 26 • Curso de TypeScript**
# Extensión de Métodos y Funcionalidades en TypeScript

### Resumen

La extensión de funcionalidades en TypeScript es una herramienta poderosa que permite mejorar los métodos nativos del lenguaje, adaptándolos a nuestras necesidades específicas. Esta capacidad no solo nos permite personalizar nuestras propias clases, sino también ampliar la funcionalidad de los métodos integrados en el lenguaje.

### ¿Cómo extender métodos nativos en TypeScript?
TypeScript nos permite ir más allá de la simple creación de clases personalizadas. Con la palabra reservada `extends`, podemos ampliar la funcionalidad de métodos que vienen incorporados en el lenguaje. Esto nos brinda la posibilidad de obtener información adicional o modificar el comportamiento de funciones que utilizamos frecuentemente.

Para entender mejor este concepto, analicemos un ejemplo práctico. Imaginemos que queremos mejorar la funcionalidad de la propiedad `length` que viene por defecto en cadenas y arreglos.
```
// Declaramos una variable de tipo cadena
const nombre: string = "Juan";

// Utilizamos la propiedad length nativa
console.log(nombre.length); // Resultado: 4
```
En este ejemplo, estamos utilizando la propiedad `length` que viene incorporada en el tipo `string`. Esta propiedad nos devuelve la cantidad de caracteres que tiene la cadena. Sin embargo, ¿qué pasaría si quisiéramos obtener más información además de la longitud?

### Creando una función extendida con genéricos
Podemos crear una función que extienda la funcionalidad de `length` utilizando tipos genéricos:
```
// Función que extiende la funcionalidad de length
function obtenerLongitud<T extends { length: number }>(obj: T): number {
  // Obtenemos la longitud del objeto
  const longitud: number = obj.length;
  
  // Obtenemos el tipo del objeto
  const tipo: string = typeof obj;
  
  // Mostramos información adicional
  console.log(`El tipo de dato es ${tipo} y la longitud de este dato es ${longitud}`);
  
  // Retornamos la longitud original
  return obj.length;
}
```
En esta función:

* Utilizamos un tipo genérico `T` que se extiende de cualquier objeto que tenga una propiedad `length` de tipo número.
* Recibimos un objeto de tipo `T` como parámetro.
* Obtenemos la longitud del objeto y su tipo.
* Mostramos esta información adicional.
* Retornamos la longitud original.

### Aplicando nuestra función extendida
Ahora podemos utilizar nuestra función con diferentes tipos de datos que tengan la propiedad `length`:
```
// Con una cadena
console.log(obtenerLongitud("hola")); // 4
// Además mostrará: "El tipo de dato es string y la longitud de este dato es 4"

// Con un arreglo
console.log(obtenerLongitud([1, 2, 3, 4, 5])); // 5
// Además mostrará: "El tipo de dato es object y la longitud de este dato es 5"
```
**Es importante destacar que esta función solo funcionará con tipos que tengan la propiedad** `length`. Si intentamos usarla con un número, por ejemplo, obtendremos un error:
```
// Esto generará un error
console.log(obtenerLongitud(42)); // Error: El argumento de tipo 'number' no es asignable al parámetro de tipo '{ length: number }'
```
### ¿Por qué es útil extender métodos nativos?
La extensión de métodos nativos nos ofrece varias ventajas:

* **Mayor información:** Podemos obtener datos adicionales que el método original no proporciona.
* **Personalización:** Adaptamos la funcionalidad a nuestras necesidades específicas.
* **Consistencia:** Mantenemos la funcionalidad original mientras agregamos nuestras mejoras.
* **Reutilización:** Creamos funciones que podemos utilizar en diferentes partes de nuestra aplicación.

### Consideraciones importantes
Al extender métodos nativos, debemos tener en cuenta algunas consideraciones:

* __Compatibilidad:__ Asegurarnos de que el tipo de dato con el que trabajamos tenga la propiedad que queremos extender.
* __Propósito claro:__ Tener un objetivo definido para la extensión, no solo extender por extender.
* __Mantenimiento:__ Las extensiones deben ser fáciles de mantener y entender para otros desarrolladores.

### ¿Cómo implementar extensiones efectivas?
Para implementar extensiones efectivas en TypeScript, podemos seguir estos pasos:

1. __Identificar la necesidad:__ Determinar qué funcionalidad queremos mejorar o extender.
2. __Utilizar tipos genéricos:__ Aprovechar los genéricos para hacer nuestras extensiones más flexibles.
3. __Restringir los tipos:__ Usar la palabra clave extends para asegurarnos de que solo se acepten tipos compatibles.
4. __Mantener la funcionalidad original:__ No modificar el comportamiento esperado del método original.
5. __Agregar valor:__ Asegurarnos de que nuestra extensión proporcione información o funcionalidad adicional útil.
```
// Ejemplo de una extensión más elaborada
function analizarColeccion<T extends { length: number }>(coleccion: T) {
  const longitud = coleccion.length;
  const tipo = typeof coleccion;
  const esVacio = longitud === 0;
  
  return {
    longitud,
    tipo,
    esVacio,
    resumen: `Colección de tipo ${tipo} con ${longitud} elementos. ${esVacio ? 'Está vacía.' : 'No está vacía.'}`
  };
}
```
La extensión de métodos nativos en TypeScript es una herramienta poderosa que nos permite personalizar y mejorar la funcionalidad del lenguaje. Al dominar esta técnica, podemos crear aplicaciones más robustas y adaptadas a nuestras necesidades específicas. ¿Has utilizado extensiones en tus proyectos?