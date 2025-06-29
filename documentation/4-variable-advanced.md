**Clase 4 de 26 • Curso de TypeScript**
# Tipos de Variables Avanzadas en TypeScript: any, unknown, never, void

### Resumen

La programación con TypeScript ofrece una experiencia de desarrollo más robusta gracias a su sistema de tipado estático. Mientras que JavaScript permite mayor flexibilidad, TypeScript nos brinda seguridad adicional al detectar errores durante la compilación. Explorar los tipos de variables avanzados en TypeScript es fundamental para aprovechar al máximo este lenguaje y crear aplicaciones más sólidas y mantenibles.

### ¿Cuáles son los tipos de variables avanzados en TypeScript?
Después de familiarizarnos con los tipos básicos de TypeScript como string, number y boolean, es momento de explorar tipos más avanzados que nos ofrecen funcionalidades adicionales. Estos tipos especiales nos permiten manejar situaciones particulares en nuestro código y son herramientas poderosas cuando se utilizan correctamente.

### ¿Cómo funciona el tipo any?
El tipo `any` es probablemente el más flexible en TypeScript, ya que permite asignar cualquier tipo de valor a una variable. Para declarar una variable de tipo any, utilizamos la siguiente sintaxis:
```
let variableAny: any;
```

Una vez declarada, podemos asignarle diferentes tipos de valores sin restricciones:
```
variableAny = "hello";     // Cadena de texto
variableAny = 42;          // Número
variableAny = true;        // Booleano
```

**Es importante destacar que usar `any` elimina las ventajas del sistema de tipos de TypeScript**, ya que básicamente estamos diciéndole al compilador que ignore el tipo de esta variable. Por esta razón, se recomienda limitar su uso a situaciones donde realmente sea necesario.

### ¿Para qué sirve el tipo unknown?
El tipo unknown es similar a any, pero con una diferencia crucial: es más seguro. Una variable de tipo unknown puede recibir cualquier valor, pero no podemos realizar operaciones con ella sin antes verificar su tipo:
```
let variableDesconocida: unknown;

variableDesconocida = "Hello";
// variableDesconocida = 42;
// variableDesconocida = true;

if (typeof variableDesconocida === "string") {
    console.log("Variable unknown es una cadena:", variableDesconocida);
}
```
**La principal ventaja de `unknown` sobre `any` es que nos obliga a realizar comprobaciones de tipo antes de utilizar la variable**, lo que reduce la posibilidad de errores en tiempo de ejecución.

### ¿Cuándo utilizar el tipo never en funciones?
El tipo `never` se utiliza para funciones que nunca retornan un valor, generalmente porque:

* Lanzan una excepción
* Tienen un bucle infinito
* Terminan el programa

Un caso común es para funciones que lanzan errores:
```
function arrojarError(mensaje: string): never {
    throw new Error(mensaje);
}

// arrojarError("Esto es un error");
```

**El tipo `never` es particularmente útil para manejar casos de error en aplicaciones complejas** y para asegurar que ciertas partes del código nunca se ejecuten normalmente.

### ¿Qué representa el tipo void?
El tipo `void` se utiliza principalmente para funciones que no retornan ningún valor, pero que sí terminan su ejecución normalmente (a diferencia de `never`):
```
function logMessage(message: string): void {
    console.log(message);
    // No hay return
}

logMessage("Este es un mensaje de log");
```

**La función con tipo `void` puede ejecutar código y terminar normalmente, pero no devuelve ningún valor utilizable**. Es común en funciones que realizan alguna acción pero no necesitan retornar información.

### ¿Cómo elegir el tipo adecuado para cada situación?
La elección del tipo correcto depende del contexto y las necesidades específicas:

* Usa `any` cuando realmente no puedas predecir el tipo (aunque es mejor evitarlo cuando sea posible).
* Prefiere `unknown` sobre `any` cuando necesites flexibilidad pero quieras mantener la seguridad de tipos.
* Utiliza `never` para funciones que lanzan excepciones o nunca terminan.
* Aplica `void` para funciones que realizan acciones pero no retornan valores.

**La práctica constante con estos tipos te ayudará a familiarizarte con sus particularidades** y a utilizarlos de manera efectiva en tus proyectos de TypeScript.

La comprensión de estos tipos avanzados de variables en TypeScript es fundamental para desarrollar aplicaciones robustas y mantenibles. Te invito a experimentar con estos conceptos, provocar errores intencionalmente y aprender de ellos. ¿Qué otros tipos de TypeScript te gustaría explorar?