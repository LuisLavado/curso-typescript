var variableAny;
variableAny = "Hola";
console.log(variableAny);
variableAny = 123;
console.log(variableAny);
variableAny = true;
console.log(variableAny);
var variableDesconocida;
// variableDesconocida = "Hello";
variableDesconocida = 42;
// variableDesconocida = true;
if (typeof variableDesconocida === "string") {
    console.log("Variable unknown es una cadena:", variableDesconocida);
}
function throwError(mensaje) {
    throw new Error(mensaje);
}
// throwError("Esto es un error");
function logMessage(message) {
    console.log("Log message:", message);
}
logMessage("Este es un mensaje de log");
