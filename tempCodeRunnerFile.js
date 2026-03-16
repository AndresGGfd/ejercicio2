const readline = require("readline");

function factorial(numero) {
    let factorial = 1;

    while (numero > 0) {
        factorial = factorial * numero;
        numero = numero - 1;
    }

    return factorial;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce el numero: ", function(numero) {
    let resultado = factorial(parseInt(numero));
    console.log("factorial: " + resultado);
    rl.close();
});