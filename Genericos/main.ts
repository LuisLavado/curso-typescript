function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hola Mundo");
console.log("output1", output1); // "Hola Mundo"

let output2 = identity<number>(42);
console.log("output2", output2); // 42

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
console.log("Contenido de la caja de string:", cajaDeString.obtenerContenido());

let cajaDeNumero = new Caja<number>(123);
console.log("Contenido de la caja de número:", cajaDeNumero.obtenerContenido());

let cajaDeArreglo = new Caja<string[]>(["libro1", "libro2"]);
console.log("Contenido de la caja de arreglo:", cajaDeArreglo.obtenerContenido());


// Combinando genéricos con interfaces
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

let procesador = new ProcesadorNumerico();
console.log("Procesado:", procesador.procesar(10)); // 20
console.log("Formateado:", procesador.formatear(10)); // $10.00

class ProcesadorString implements Procesador<string> {
    procesar(valor: string): string {
        return valor.toUpperCase();
    }
    
    formatear(valor: string): string {
        return `Texto: ${valor}`;
    }
}

let procesadorString = new ProcesadorString();
console.log("Procesado:", procesadorString.procesar("hola")); // HOLA
console.log("Formateado:", procesadorString.formatear("hola")); // Texto: hola