**Clase 17 de 26 • Curso de TypeScript**
# Organización de Archivos TypeScript en Proyectos Web

### Resumen

La organización de archivos en proyectos web con TypeScript es fundamental para mantener un código limpio y fácil de mantener. **Una estructura bien planificada no solo mejora la legibilidad del código, sino que también facilita el despliegue y la colaboración en equipo**. En este artículo, exploraremos cómo configurar correctamente un proyecto web utilizando TypeScript, separando los archivos de desarrollo de los archivos de producción para lograr un flujo de trabajo más eficiente.

### ¿Cómo estructurar correctamente un proyecto web con TypeScript?
Cuando trabajamos con TypeScript en proyectos web, es tentador mantener todos nuestros archivos en una sola carpeta. Sin embargo, esta práctica puede generar confusión a medida que el proyecto crece. La mejor estrategia es separar claramente los archivos de desarrollo de los archivos que se desplegarán en producción.

Para implementar esta estructura, necesitamos:

1. Crear carpetas específicas para código fuente y archivos públicos.
2. Configurar TypeScript para que compile los archivos hacia la ubicación correcta.
3. Actualizar las referencias en el HTML para que apunten a los archivos compilados.

### Creación de la estructura de carpetas básica
El primer paso es establecer una estructura de carpetas que separe claramente el código fuente de los archivos públicos:

Crear una carpeta principal para el proyecto (por ejemplo, "sitio-web").
Dentro de esta carpeta, crear dos subcarpetas:
public: para archivos que se desplegarán (HTML, CSS, JS compilado).
src: para archivos de código fuente (archivos TypeScript).

```
sitio-web/
├── public/
│   ├── index.html
│   └── scripts/
│       └── main.js (compilado)
└── src/
    └── main.ts
```

Esta estructura permite una clara separación entre lo que es código de desarrollo y lo que se desplegará en producción. **La carpeta** `public` **contendrá todo lo que necesita ser accesible desde el navegador**, mientras que src mantendrá nuestro código TypeScript que no necesita ser subido al servidor.

### Configuración de TypeScript para compilación dirigida
Para que TypeScript compile los archivos hacia la carpeta correcta, necesitamos crear y configurar un archivo `tsconfig.json`:

1. Navega a la carpeta src en la terminal.
2. Ejecuta el comando para inicializar la configuración de TypeScript:
```
tsc --init
```
3. Modifica el archivo generado para especificar el directorio de salida:
```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "../public/scripts",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```
El parámetro clave aquí es `"outDir": "../public/scripts"`, que indica a TypeScript que debe colocar los archivos JavaScript compilados en la carpeta `scripts` dentro de `public`.

### Compilación del código TypeScript
Con la configuración establecida, ahora podemos compilar nuestro código TypeScript apuntando al archivo de configuración:
```
tsc -p tsconfig.json
```
Este comando leerá la configuración y compilará todos los archivos TypeScript según las reglas especificadas, colocando los archivos JavaScript resultantes en la carpeta de destino.

### Actualización de referencias en el HTML
Actualización de referencias en el HTML
Finalmente, necesitamos asegurarnos de que nuestro archivo HTML apunte correctamente a los archivos JavaScript compilados:
```
<!-- Antes -->
<script src="main.js"></script>

<!-- Después -->
<script src="./scripts/main.js"></script>
```
Esta actualización garantiza que el navegador cargue el archivo JavaScript desde la ubicación correcta.

### ¿Por qué es importante esta estructura para el despliegue?
**La separación entre archivos de desarrollo y producción ofrece múltiples ventajas:**

1. __Seguridad mejorada:__ El código fuente de TypeScript no se expone públicamente.
2. __Despliegue simplificado:__ Solo es necesario subir la carpeta `public` al servidor.
3. __Organización clara:__ Facilita la navegación y el mantenimiento del código.
4. __Colaboración eficiente:__ Los miembros del equipo pueden identificar rápidamente qué archivos deben modificar y cuáles son generados automáticamente.

Esta estructura también facilita la integración con herramientas de construcción más avanzadas como Webpack o Parcel si decides escalar tu proyecto en el futuro.

La organización adecuada de archivos en proyectos web con TypeScript es un paso fundamental para desarrollar aplicaciones mantenibles y escalables. **Implementar esta estructura desde el inicio del proyecto te ahorrará tiempo y dolores de cabeza a medida que tu aplicación crezca**.