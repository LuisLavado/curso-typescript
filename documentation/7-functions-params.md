**Clase 7 de 26 • Curso de TypeScript**
# Funciones y Parámetros en TypeScript: Opcionales, Múltiples y por Defecto

### Resumen

Los parámetros en funciones de TypeScript ofrecen una flexibilidad extraordinaria que permite optimizar nuestro código y hacerlo más eficiente. Al dominar los diferentes tipos de parámetros, podemos crear métodos versátiles que se adapten a múltiples escenarios sin necesidad de duplicar código. Esta capacidad no solo mejora la legibilidad sino que también reduce significativamente el tiempo de desarrollo.

### ¿Cómo hacer que nuestras funciones sean más flexibles con parámetros especiales?
Cuando trabajamos con TypeScript, podemos hacer que nuestras funciones sean mucho más adaptables utilizando diferentes tipos de parámetros. Esto nos permite escribir menos código que realice más tareas, lo que resulta en aplicaciones más mantenibles y eficientes.

### Parámetros opcionales: ¿Cómo implementarlos correctamente?
Los parámetros opcionales nos permiten definir argumentos que pueden o no ser proporcionados al llamar a una función. Para indicar que un parámetro es opcional, simplemente agregamos un signo de interrogación (?) después del nombre del parámetro.

Veamos un ejemplo práctico:
```
function saludar(nombre: string, saludo?: string): string {
  if (saludo) {
    return `${saludo}, ${nombre}!`;
  } else {
    return `Hola, ${nombre}`;
  }
}

console.log(saludar("Amin"));
console.log(saludar("Amin", "Buenos días"));
```
Al ejecutar este código, obtendremos:

* "Hola, Amin" (cuando no proporcionamos el saludo)
* "Buenos días, Amin!" (cuando sí proporcionamos el saludo)

La ventaja principal de los parámetros opcionales es que nos evitan tener que crear múltiples versiones de la misma función para manejar diferentes casos. Una sola función puede adaptarse a distintas situaciones dependiendo de los argumentos que reciba.

### Parámetros múltiples: ¿Cómo manejar un número variable de argumentos?
Los parámetros múltiples (o rest parameters) nos permiten pasar un número indefinido de argumentos a una función. Se indican con tres puntos (...) antes del nombre del parámetro.
```
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((acumulador, valor) => acumulador + valor, 0);
}

console.log(`El resultado de sumar todos es ${sumarTodos(1, 2, 3, 4, 5)}`);
```
Este código sumará todos los números proporcionados (1+2+3+4+5) y mostrará "El resultado de sumar todos es 15".

**El método reduce** utilizado en este ejemplo es una forma elegante de procesar todos los elementos de un array sin necesidad de utilizar un ciclo foreach. Este método va acumulando los valores a medida que recorre el array.

Los parámetros múltiples pueden resultar complicados al principio, pero con práctica se convierten en una herramienta muy poderosa para crear funciones flexibles que puedan manejar diferentes cantidades de datos.

### Valores por defecto: ¿Cómo establecer valores predeterminados?
Los valores por defecto nos permiten asignar un valor predeterminado a un parámetro en caso de que no se proporcione ninguno al llamar a la función.
```
function despedir(nombre: string, despedida: string = "Adiós"): string {
  return `${despedida}, ${nombre}`;
}

console.log(despedir("Amin"));
console.log(despedir("Amin", "Hasta luego"));
```
Al ejecutar este código, obtendremos:

* "Adiós, Amin" (utilizando el valor por defecto)
* "Hasta luego, Amin" (sobrescribiendo el valor por defecto)

**La diferencia clave** entre los parámetros opcionales y los valores por defecto es que los primeros pueden no estar presentes, mientras que los segundos siempre tendrán un valor, ya sea el proporcionado o el predeterminado.

### ¿Por qué optimizar nuestras funciones con estos parámetros?
La implementación de estos tipos de parámetros en nuestras funciones nos permite:

* __Simplificar nuestro código:__ en lugar de escribir múltiples funciones para diferentes casos, podemos crear una sola función más versátil.
* __Optimizar el tiempo de desarrollo:__ menos código significa menos tiempo escribiendo y depurando.
* __Mejorar la legibilidad:__ un código más conciso es generalmente más fácil de entender y mantener.

Dominar estos conceptos en TypeScript nos ayuda a escribir código más elegante y eficiente, aprovechando al máximo las capacidades del lenguaje para crear aplicaciones robustas y mantenibles.

Los parámetros especiales en TypeScript son herramientas poderosas que todo desarrollador debería conocer y utilizar. ¿Has implementado alguno de estos tipos de parámetros en tus proyectos? ¿Cuál te ha resultado más útil?