# 🧮 Calculadora Científica — Ejercicio 2 Git

**Materia:** Ingeniería de Software  
**Grupo:** ByteMafia  
**Actividad:** Ejercicio 2 — Trabajo colaborativo con Git y GitHub

---

## 📋 Descripción de la actividad:

Ejercicio de trabajo colaborativo con Git y GitHub siguiendo un branching model definido. Cada integrante del equipo implementó una función aritmética diferente en el archivo `aritmetica.ts`, trabajando en su propia rama `feature/` y realizando el merge hacia `develop`, generando y resolviendo conflictos en el proceso.

El resultado es una calculadora científica interactiva que se ejecuta desde la consola, con un menú que permite al usuario elegir la operación e ingresar los valores por teclado.

---

## 👥 Integrantes y funciones implementadas:

| Integrante | Función |
|---|---|
| Bellido Zeballos Shawn Brandon | `valorAbsoluto` |
| Heredia Villanueva Eliot Rodrigo | `factorial` |
| Jimenez Quinteros Israel | `multiplicacion` |
| Massi Geronimo Miguel Angel | `promedio` |
| Perez Tapia Adrian | `potencia` |
| Quiroz Quiroz Giovani | `division` |
| Rojas Reque Mireya Edly | `modulo` |
| Romero Menacho Esther | `raizCuadrada` |
| Zeballos Romero Jhoel Andres | `resta` |
| Zurita Zelada Briza | `suma` | 

---

## 🛠️ Tecnologías utilizadas:

| Herramienta | Versión |
|---|---|
| Node.js | 18.18.0 o superior (recomendado LTS 20.x) |
| TypeScript | ^5.0.0 |
| ts-node | ^10.9.0 |
| @types/node | ^20.0.0 |

---

## 🚀 Instrucciones para correr el proyecto:

### 1. Verificar versión de Node.js:
```bash
node -v
```
Debe ser **v18.18.0 o superior**. Si no, descarga la versión LTS desde [nodejs.org](https://nodejs.org).

### 2. Clonar el repositorio:
```bash
git https://github.com/AndresGGfd/ejercicio2.git
cd ejercicio2
```

### 3. Instalar dependencias:
```bash
npm install
```

### 4. Ejecutar la calculadora:
```bash
npm start
```

O directamente:
```bash
ts-node aritmetica.ts
```

---

## "Branching model" seguido:

```
main
└── develop          ← rama por defecto
    ├── feature/suma
    ├── feature/resta
    ├── feature/multiplicacion
    ├── feature/division
    ├── feature/potencia
    ├── feature/raizCuadrada
    ├── feature/modulo
    ├── feature/factorial
    ├── feature/valorAbsoluto
    └── feature/promedio
```

Cada integrante:
1. Creó su rama `feature/` a partir de `develop` (ej; feature/Albertina_Sacaca_Division)
2. Implementó su función en `aritmetica.ts`.
3. Realizó el commit en su rama local.
4. Hizo push de su rama al repositorio remoto.
5. Realizó el merge hacia `develop` localmente y subió los cambios.

---

## 📁 Estructura del proyecto:

```
ejercicio2/
├── aritmetica.ts    ← archivo principal con las 10 funciones y el menú
├── package.json     ← dependencias y scripts
├── tsconfig.json    ← configuración de TypeScript
├── .gitignore       ← archivos excluidos del repositorio
└── README.md        ← este archivo
```

---

## 💡 Ejemplo de uso:

```
  Bienvenido/a a la Calculadora Científica
  Ingeniería de Software — Ejercicio 2 Git

╔══════════════════════════════════════╗
║     🧮  CALCULADORA CIENTÍFICA       ║
╠══════════════════════════════════════╣
║  1.  Suma                            ║
║  2.  Resta                           ║
║  3.  Multiplicación                  ║
║  4.  División                        ║
║  5.  Potencia                        ║
║  6.  Raíz cuadrada                   ║
║  7.  Módulo                          ║
║  8.  Factorial                       ║
║  9.  Valor absoluto                  ║
║  10. Promedio                        ║
║  0.  Salir                           ║
╚══════════════════════════════════════╝

  Elige una opción: 5
  Ingresa dos números separados por espacio (ej: 8 3): 2 10
  ✅  2 ^ 10 = 1024
```