// Declaramos una variable de tipo cadena
var nombre = "Inge Luisito";
// Utilizamos la propiedad length nativa
console.log(nombre.length); // Resultado: 4
// Función que extiende la funcionalidad de length
function obtenerLongitud(obj) {
    // Obtenemos la longitud del objeto
    var longitud = obj.length;
    // Obtenemos el tipo del objeto
    var tipo = typeof obj;
    /**
     * En JavaScript, los arrays son técnicamente objetos,
     * y typeof no los diferencia de otros objetos. Aunque visualmente es un arreglo,
     * internamente es una estructura especial basada en objetos.
     * Para saber si realmente es un array Usa Array.isArray(obj)
     */
    if (Array.isArray(obj)) {
        tipo = "array";
    }
    // Mostramos información adicional
    console.log("El tipo de dato es ".concat(tipo, " y la longitud de este dato es ").concat(longitud));
    // Retornamos la longitud original
    return obj.length;
}
// Con una cadena
console.log(obtenerLongitud("hola")); // 4
// Además mostrará: "El tipo de dato es string y la longitud de este dato es 4"
// Con un arreglo
console.log(obtenerLongitud([1, 2, 3, 4, 5])); // 5
// Además mostrará: "El tipo de dato es object y la longitud de este dato es 5"
// Esto generará un error
// console.log(obtenerLongitud(42)); // Error: El argumento de tipo 'number' no es asignable al parámetro de tipo '{ length: number }'
// Ejemplo de una extensión más elaborada
function analizarColeccion(coleccion) {
    var longitud = coleccion.length;
    var tipo = typeof coleccion;
    var esVacio = longitud === 0;
    return {
        longitud: longitud,
        tipo: tipo,
        esVacio: esVacio,
        resumen: "Colecci\u00F3n de tipo ".concat(tipo, " con ").concat(longitud, " elementos. ").concat(esVacio ? 'Está vacía.' : 'No está vacía.')
    };
}
// Ejemplo de uso
var resultado = analizarColeccion([1, 2, 3]);
console.log(resultado);
// Resultado: { longitud: 3, tipo: 'object', esVacio: false, resumen: 'Colección de tipo object con 3 elementos. No está vacía.' }
// La extensión de métodos nativos en TypeScript es una herramienta poderosa que nos permite personalizar y mejorar la funcionalidad del lenguaje. Al dominar esta técnica, podemos crear aplicaciones más robustas y adaptadas a nuestras necesidades específicas. ¿Has utilizado extensiones en tus proyectos? Comparte tus experiencias y cómo has aprovechado esta característica de TypeScript.
