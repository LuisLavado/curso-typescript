var Persona = /** @class */ (function () {
    function Persona(nombre, edad, desarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.desarrollador = desarrollador;
    }
    Persona.prototype.saludar = function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os");
    };
    return Persona;
}());
var persona = new Persona("Juan", 30, true);
console.log(persona.saludar()); // Imprime: "Hola, mi nombre es Juan y tengo 30 años"
