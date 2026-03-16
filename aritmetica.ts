/**
 * aritmetica.ts
 * Calculadora científica interactiva con menú en consola.
 * Ejercicio 2 - Git colaborativo | Ingeniería de Software
 *
 * Cada función fue implementada por un integrante del equipo ByteMafia. 
 * El apellido y nombre del autor aparece en el JSDoc y en la llamada.
 *
 * Para correr:
 * ts-node aritmetica.ts
 */

import * as readline from "readline";

console.log("[DEBUG] Iniciando programa...");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("[DEBUG] readline interface creada");

const pregunta = (texto: string): Promise<string> =>
  new Promise((resolve) => rl.question(texto, resolve));

// ─────────────────────────────────────────────
// 1. SUMA — Apellido Nombre
// ─────────────────────────────────────────────
/**
 * Retorna la suma de dos números.
 * @author Apellido Nombre
 */
function sumaApellidoNombre(a: number, b: number): number {
  // TODO: implementar
  throw new Error("No implementado aún");
}

// ─────────────────────────────────────────────
// 2. RESTA — Zeballos Romero Jhoel Andres 
// ─────────────────────────────────────────────
/**
 * Retorna la resta de dos números (a - b).
 * @author Zeballos Romero Jhoel Andres 
 */
function restaZeballosRomeroJhoelAndres(a: number, b: number): number {
  return a - b;
  throw new Error("No implementado aún");
}

// ─────────────────────────────────────────────
// 3. MULTIPLICACIÓN — Apellido Nombre
// ─────────────────────────────────────────────
/**
 * Retorna el producto de dos números.
 * @author Apellido Nombre
 */
function multiplicacionApellidoNombre(a: number, b: number): number {
  // TODO: implementar
  throw new Error("No implementado aún");
}

// ─────────────────────────────────────────────
// 4. DIVISIÓN — Apellido Nombre
// ─────────────────────────────────────────────
/**
 * Retorna el cociente de dos números (a / b).
 * Lanza un error si b es 0.
 * @author Apellido Nombre
 */
function divisionApellidoNombre(a: number, b: number): number {
  // TODO: implementar (incluir validación de división por cero)
  throw new Error("No implementado aún");
}

// ─────────────────────────────────────────────
// 5. POTENCIA — Perez Tapia Adrian
// ─────────────────────────────────────────────
/**
 * Retorna base elevada al exponente (base ^ exponente).
 * Soporta exponentes negativos y decimales.
 * @author Perez Tapia Adrian
 */
function potenciaPerezTapiaAdrian(base: number, exponente: number): number {
  return Math.pow(base, exponente);
}

// ─────────────────────────────────────────────
// 6. RAÍZ CUADRADA — Apellido Nombre
// ─────────────────────────────────────────────
/**
 * Retorna la raíz cuadrada de un número.
 * Lanza un error si n es negativo.
 * @author Apellido Nombre
 */
function raizCuadradaApellidoNombre(n: number): number {
  // TODO: implementar (incluir validación de número negativo)
  throw new Error("No implementado aún");
}

// ─────────────────────────────────────────────
// 7. MÓDULO — Apellido Nombre
// ─────────────────────────────────────────────
/**
 * Retorna el resto de la división entera (a % b).
 * Lanza un error si b es 0.
 * @author Apellido Nombre
 */
function moduloApellidoNombre(a: number, b: number): number {
  // TODO: implementar (incluir validación de división por cero)
  throw new Error("No implementado aún");
}

// ─────────────────────────────────────────────
// 8. FACTORIAL — Apellido Nombre
// ─────────────────────────────────────────────
/**
 * Retorna el factorial de n (n!).
 * Solo acepta enteros no negativos.
 * @author Apellido Nombre
 */
function factorialApellidoNombre(n: number): number {
  // TODO: implementar (incluir validación: n debe ser entero >= 0)
  throw new Error("No implementado aún");
}

// ─────────────────────────────────────────────
// 9. VALOR ABSOLUTO — Bellido Zeballos Shawn Brandon
// ─────────────────────────────────────────────
/**
 * Retorna el valor absoluto de un número.
 * @author Bellido Zeballos Shawn Brandon
 */
function valorAbsolutoBellidoZeballosShawnBrandon(n: number): number {
  return Math.abs(n);
}

// ─────────────────────────────────────────────
// 10. PROMEDIO — Apellido Nombre
// ─────────────────────────────────────────────
/**
 * Retorna el promedio aritmético de una lista de números.
 * Lanza un error si la lista está vacía.
 * @author Apellido Nombre
 */
function promedioApellidoNombre(numeros: number[]): number {
  // TODO: implementar (incluir validación de lista vacía)
  throw new Error("No implementado aún");
}

// ─────────────────────────────────────────────
// MENÚ INTERACTIVO
// ─────────────────────────────────────────────

function mostrarMenu(): void {
  console.log(`
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
╚══════════════════════════════════════╝`);
}

async function pedirDosNumeros(): Promise<[number, number]> {
  const entrada = await pregunta("  Ingresa dos números separados por espacio (ej: 8 3): ");
  const partes = entrada.trim().split(/\s+/).map(Number);
  if (partes.length < 2 || partes.some(isNaN)) {
    throw new Error("Debes ingresar exactamente dos números separados por espacio.");
  }
  return [partes[0], partes[1]];
}

async function pedirUnNumero(): Promise<number> {
  const entrada = await pregunta("  Ingresa un número: ");
  const n = Number(entrada.trim());
  if (isNaN(n)) throw new Error("Entrada inválida. Debes ingresar un número.");
  return n;
}

async function pedirVariosNumeros(): Promise<number[]> {
  const entrada = await pregunta("  Ingresa los números separados por espacio (ej: 4 8 15 16): ");
  const numeros = entrada.trim().split(/\s+/).map(Number);
  if (numeros.length === 0 || numeros.some(isNaN)) {
    throw new Error("Debes ingresar al menos un número válido.");
  }
  return numeros;
}

async function ejecutarOpcion(opcion: string): Promise<boolean> {
  console.log("");

  try {
    switch (opcion.trim()) {
      case "0":
        console.log("¡Hasta luego!\n");
        return false;

      case "1": {
        const [a, b] = await pedirDosNumeros();
        const r = sumaApellidoNombre(a, b);
        console.log(`${a} + ${b} = ${r}`);
        break;
      }
      case "2": {
        const [a, b] = await pedirDosNumeros();
        const r = restaZeballosRomeroJhoelAndres(a, b);
        console.log(`${a} - ${b} = ${r}`);
        break;
      }
      case "3": {
        const [a, b] = await pedirDosNumeros();
        const r = multiplicacionApellidoNombre(a, b);
        console.log(`${a} × ${b} = ${r}`);
        break;
      }
      case "4": {
        const [a, b] = await pedirDosNumeros();
        const r = divisionApellidoNombre(a, b);
        console.log(`${a} ÷ ${b} = ${r}`);
        break;
      }
      case "5": {
        const [base, exp] = await pedirDosNumeros();
        const r = potenciaPerezTapiaAdrian(base, exp);
        console.log(`${base} ^ ${exp} = ${r}`);
        break;
      }
      case "6": {
        const n = await pedirUnNumero();
        const r = raizCuadradaApellidoNombre(n);
        console.log(`√${n} = ${r}`);
        break;
      }
      case "7": {
        const [a, b] = await pedirDosNumeros();
        const r = moduloApellidoNombre(a, b);
        console.log(`${a} % ${b} = ${r}`);
        break;
      }
      case "8": {
        const n = await pedirUnNumero();
        const r = factorialApellidoNombre(n);
        console.log(`${n}! = ${r}`);
        break;
      }
      case "9": {
        const n = await pedirUnNumero();
        const r = valorAbsolutoBellidoZeballosShawnBrandon(n);
        console.log(`|${n}| = ${r}`);
        break;
      }
      case "10": {
        const nums = await pedirVariosNumeros();
        const r = promedioApellidoNombre(nums);
        console.log(`Promedio de [${nums.join(", ")}] = ${r}`);
        break;
      }
      default:
        console.log("Opción no válida. Elige un número del 0 al 10.");
    }
  } catch (err: any) {
    console.log(`Error: ${err.message}`);
  }

  return true;
}

async function main(): Promise<void> {
  console.log("\n  Bienvenido/a a la Calculadora Científica");
  console.log("  Ingeniería de Software — Ejercicio 2 Git\n");

  let continuar = true;
  while (continuar) {
    mostrarMenu();
    const opcion = await pregunta("\n  Elige una opción: ");
    continuar = await ejecutarOpcion(opcion);
  }

  rl.close();
}

main().catch(err => {
  console.error("Error en main:", err);
  rl.close();
  process.exit(1);
});