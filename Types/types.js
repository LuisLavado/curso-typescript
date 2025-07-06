// Resultado equivalente a:
// {
//   readonly nombre: string;
//   readonly edad: number;
// }
var persona = {
    nombre: "Juan",
    edad: 30
};
console.log(persona.nombre); // Esto sí se compilará a JavaScript
function esNumero(valor) {
    return (typeof valor === "number");
}
var resultado1 = esNumero(42); // true
var resultado2 = esNumero("hello"); // false
console.log(resultado1);
console.log(resultado2);
