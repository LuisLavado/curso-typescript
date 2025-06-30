function imprimeMensaje(mensaje: string): void {
    console.log(mensaje);
}

imprimeMensaje("Hola, soy un mensaje");

function sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

let resultado: number;
resultado = sumar(5, 10);
console.log("Tu resultado es", resultado);