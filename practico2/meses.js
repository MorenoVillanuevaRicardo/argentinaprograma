const readlineSync = require('readline-sync');
let numero = readlineSync.question(" Ingrese un numero entre el 1 y el 12 ");
let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
let indice = parseFloat(numero);
if (indice >= 1 && indice <=12 && indice % 1=== 0 ){
    if (indice === 4 || indice === 6 || indice === 9 || indice === 11){
        console.log("La cantidad de dias del mes",meses[indice-1],"es de 30");
    }  else if (indice=== 2){
        console.log("La cantidad de dias del mes de febrero es 28");
    } else {
        console.log("La cantidad de dias del mes",meses[indice-1],"es de 31");
    }
} else {
    console.log("Numero incorrecto");
}
//meses con 31 dias: enero, marzo, mayo, julio, agosto, octubre, diciembre//
//numeros que representan los meses anteriores: 1,3,5,7,8,10,12//
//meses con 30 dias: abril, junio, septiembre, noviembre//
//numeros que representan los meses anteriores: 4,6,9,11//

