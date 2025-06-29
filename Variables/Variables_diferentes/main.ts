let variableAny: any;
variableAny = "Hola";
console.log(variableAny);
variableAny = 123;
console.log(variableAny);
variableAny = true;
console.log(variableAny);

let variableDesconocida: unknown;

// variableDesconocida = "Hello";
variableDesconocida = 42;
// variableDesconocida = true;

if (typeof variableDesconocida === "string") {
    console.log("Variable unknown es una cadena:", variableDesconocida);
}

function throwError(mensaje: string): never {
    throw new Error(mensaje);
}

// throwError("Esto es un error");

function logMessage(message: string): void {
    console.log("Log message:", message);
}

logMessage("Este es un mensaje de log");
