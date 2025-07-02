**Clase 13 de 26 • Curso de TypeScript**
# Tipos Genéricos en TypeScript: Funciones, Clases e Interfaces

### Resumen

Los tipos genéricos en TypeScript representan una solución elegante para uno de los problemas fundamentales que este lenguaje busca resolver: el tipado en JavaScript. **Esta característica permite crear código flexible y reutilizable mientras se mantiene la seguridad de tipos**, algo especialmente valioso cuando necesitamos adaptar sistemas JavaScript existentes a TypeScript sin comprometer la funcionalidad.

### ¿Qué son los tipos genéricos en TypeScript?
Los tipos genéricos son una característica poderosa que permite crear componentes que pueden trabajar con una variedad de tipos de datos en lugar de estar limitados a uno solo. **Funcionan como una especie de "comodín" que se adapta al tipo de dato que recibe**, proporcionando flexibilidad sin sacrificar la seguridad de tipos.

La sintaxis para declarar un tipo genérico utiliza los símbolos `<>` con una letra (comúnmente `T`) que representa el tipo:
```
function identity<T>(arg: T): T {
  return arg;
}
```
Esta función puede recibir cualquier tipo de dato y devolverlo sin alterar su tipo original. La magia ocurre cuando TypeScript infiere automáticamente el tipo basado en el argumento proporcionado.

### Implementación de funciones genéricas
Las funciones genéricas son probablemente la forma más común de utilizar esta característica. Veamos un ejemplo práctico:
```
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("cualquier valor");
console.log("output1: " + output1);

let output2 = identity<number>(42);
console.log("output2: " + output2);
```
En este ejemplo, la misma función `identity` puede manejar tanto strings como números, manteniendo la información de tipo en cada caso. **TypeScript infiere automáticamente el tipo basado en el argumento proporcionado**, lo que hace que el código sea más limpio y seguro.

### Creación de clases genéricas
Los tipos genéricos también pueden aplicarse a clases, lo que permite crear estructuras de datos reutilizables que funcionan con diferentes tipos:
```
class Caja<T> {
  contenido: T;
  
  constructor(valor: T) {
    this.contenido = valor;
  }
  
  obtenerContenido(): T {
    return this.contenido;
  }
}

let cajaDeString = new Caja<string>("libros");
console.log("Contenido de la caja de string", cajaDeString.obtenerContenido());
```
Esta clase `Caja` puede almacenar cualquier tipo de dato, desde strings hasta números o incluso objetos complejos. **La ventaja es que TypeScript garantiza la consistencia de tipos** dentro de cada instancia de la clase.

### ¿Cuándo utilizar tipos genéricos?
Los tipos genéricos son particularmente útiles en varios escenarios:

* __Cuando necesitas crear componentes reutilizables__ que funcionen con diferentes tipos de datos.
* __Durante la migración de JavaScript a TypeScript__, donde algunos sistemas no pueden adaptarse fácilmente a valores tipados específicos.
* __Al crear estructuras de datos__ como colecciones, pilas, colas o árboles que deben funcionar con cualquier tipo.
* __Para implementar patrones de diseño__ como fábricas, decoradores o adaptadores que necesitan ser flexibles en cuanto a los tipos que manejan.

**La clave está en encontrar el equilibrio entre flexibilidad y seguridad de tipos**. Los genéricos te permiten mantener ambas, a diferencia de usar any, que sacrifica completamente la verificación de tipos.

### Combinando genéricos con interfaces
Una práctica recomendada es combinar genéricos con interfaces para crear contratos de tipo flexibles:
```
interface Procesador<T> {
  procesar(valor: T): T;
  formatear(valor: T): string;
}

class ProcesadorNumerico implements Procesador<number> {
  procesar(valor: number): number {
    return valor * 2;
  }
  
  formatear(valor: number): string {
    return `$${valor.toFixed(2)}`;
  }
}
```

Esta combinación permite crear sistemas altamente adaptables mientras se mantiene la seguridad de tipos en todo momento.

Los tipos genéricos representan una de las características más potentes de TypeScript, permitiéndote escribir código que es a la vez flexible y seguro. Experimentar con diferentes combinaciones de funciones, clases e interfaces genéricas te ayudará a dominar esta característica y aplicarla efectivamente en tus proyectos. ¿Has utilizado tipos genéricos en tus proyectos?