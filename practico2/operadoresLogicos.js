const readlineSync = require('readline-sync');
let num = readlineSync.question(" Ingrese un numero entero ");
let numero= parseFloat(num);
if (numero % 1===0){
    if (numero > 0 && numero % 2 === 0){
        console.log ("El numero es positivo y par");
    }
    if (numero > 0 && numero % 2 !== 0){
        console.log ("El numero es positivo e impar");
    }
    if (numero < 0){
        console.log ("El numero es negativo");
    }
    if (numero ===0){
        console.log ("El numero es cero");
    }
} else {
    console.log("Ingreso un numero que no es entero");
}
