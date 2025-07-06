**Clase 25 de 26 • Curso de TypeScript**
# Pruebas Unitarias en TypeScript con Jest

### Resumen

Las pruebas unitarias son un componente esencial en el desarrollo de software profesional, aunque muchas veces son ignoradas o implementadas de manera superficial. En el ecosistema de TypeScript, la integración de pruebas unitarias no solo es posible sino sorprendentemente sencilla gracias a Jest, una de las herramientas de testing más potentes disponibles para JavaScript. Descubre cómo implementar pruebas unitarias efectivas en tus proyectos de TypeScript y eleva la calidad de tu código a un nivel profesional.

### ¿Cómo configurar Jest para TypeScript?
Antes de comenzar a escribir pruebas, necesitamos configurar nuestro entorno para que Jest y TypeScript trabajen juntos armoniosamente. El proceso es bastante directo y requiere la instalación de algunos paquetes específicos.

Para empezar, debemos instalar Jest junto con los tipos necesarios y la implementación específica para TypeScript:
```
npm install --save-dev jest @types/jest ts-jest
```
Estos paquetes proporcionan todo lo necesario para que Jest pueda interpretar y ejecutar pruebas escritas en TypeScript. Una vez instalados, necesitamos crear algunos archivos de configuración.

### Configuración de TypeScript para Jest
El primer archivo que debemos crear es `tsconfig.json`, que contiene la configuración de TypeScript necesaria para la interoperabilidad con Jest:
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```
Esta configuración permite que TypeScript y Jest trabajen juntos sin problemas, habilitando características como la importación de módulos y asegurando la consistencia en el manejo de archivos.

### Configuración de Jest
El siguiente paso es crear un archivo `jest.config.js` que le indica a Jest cómo debe manejar los archivos TypeScript:
```
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
};
```
Esta configuración establece `ts-jest` como el preset para transformar archivos TypeScript y define el entorno de pruebas como Node.js.

### Actualización del package.json
También necesitamos modificar nuestro package.json para incluir la dependencia de TypeScript y configurar el script de pruebas:
```
{
  "name": "typescript-jest-example",
  "version": "1.0.0",
  "description": "Ejemplo de pruebas con Jest en TypeScript",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "dependencies": {
    "typescript": "^4.5.4"
  },
  "devDependencies": {
    "@types/jest": "^27.0.3",
    "jest": "^27.4.5",
    "ts-jest": "^27.1.2"
  }
}
```
Con esta configuración, podemos ejecutar nuestras pruebas simplemente con el comando `npm test`.

### ¿Cómo escribir pruebas unitarias efectivas en TypeScript?
Una vez configurado nuestro entorno, podemos comenzar a escribir pruebas para nuestras clases y funciones. Tomemos como ejemplo una clase `Usuario` que queremos probar:
```
// usuario.ts
export class Usuario {
  private nombre: string;
  private apellido: string;
  private activo: boolean;

  constructor(nombre: string, apellido: string, activo: boolean = true) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.activo = activo;
  }

  getName(): string {
    return this.nombre;
  }

  getProfile(): string {
    return `${this.nombre} ${this.apellido}`;
  }

  isStillActive(): boolean {
    return this.activo;
  }
}
```
Para probar esta clase, creamos un archivo de prueba con el nombre `usuario.test.ts`:
```
// usuario.test.ts
import { Usuario } from './usuario';

describe('Usuario', () => {
  let usuario: Usuario;

  beforeEach(() => {
    usuario = new Usuario('Juan', 'Pérez');
  });

  test('debe regresar el nombre correcto', () => {
    expect(usuario.getName()).toBe('Juan');
  });

  test('debe regresar el perfil correcto', () => {
    expect(usuario.getProfile()).toBe('Juan Pérez');
  });

  test('debe verificar que el usuario está activo', () => {
    expect(usuario.isStillActive()).toBeTruthy();
  });

  test('debe verificar que el usuario está inactivo', () => {
    const usuarioInactivo = new Usuario('Ana', 'García', false);
    expect(usuarioInactivo.isStillActive()).toBeFalsy();
  });
});
```
En este archivo de prueba:

1. Importamos la clase Usuario que queremos probar
2. Utilizamos describe para agrupar nuestras pruebas relacionadas
3. Creamos una instancia de Usuario antes de cada prueba con beforeEach
4. Definimos pruebas individuales con test que verifican diferentes aspectos de la clase

### Ejecutando las pruebas
Para ejecutar nuestras pruebas, simplemente usamos el comando:
```
npm test
```
Si todo está configurado correctamente, Jest ejecutará todas las pruebas y mostrará los resultados en la terminal. Un resultado exitoso se vería así:
```
PASS  ./usuario.test.ts
  Usuario
    ✓ debe regresar el nombre correcto (3ms)
    ✓ debe regresar el perfil correcto (1ms)
    ✓ debe verificar que el usuario está activo
    ✓ debe verificar que el usuario está inactivo (1ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.5s
```
### ¿Por qué Jest es la mejor opción para pruebas en TypeScript?
Jest se ha convertido en una de las herramientas de prueba más populares en el ecosistema JavaScript/TypeScript por varias razones:

* __Facilidad de uso:__ La configuración es mínima y la sintaxis es intuitiva
* __Rendimiento:__ Jest ejecuta pruebas en paralelo, lo que lo hace muy rápido
* __Funcionalidades integradas:__ Incluye mocks, spies, timers y cobertura de código sin necesidad de bibliotecas adicionales
* __Snapshots:__ Permite realizar pruebas de UI de manera sencilla
* __Compatibilidad con TypeScript:__ Gracias a ts-jest, la integración es perfecta

**La implementación de Jest con TypeScript es sorprendentemente sencilla** comparada con otras herramientas de prueba en diferentes lenguajes de programación. Esta facilidad de uso no sacrifica potencia ni flexibilidad, lo que hace de Jest una opción ideal para proyectos de cualquier tamaño.

Las pruebas unitarias son una inversión en la calidad y mantenibilidad de tu código. Con Jest y TypeScript, tienes a tu disposición una combinación poderosa que te permite validar tu código de manera eficiente y confiable.