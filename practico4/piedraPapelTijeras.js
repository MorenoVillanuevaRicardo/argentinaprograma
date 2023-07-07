let jugadas = ["piedra","papel","tijeras"];
function obtenerJugadaComputadora(){
let numero = Math.round((Math.random()*2))
return jugadas[numero];
}

var readlineSync = require("readline-sync");
function obtenerJugadaUsuario(){
let s= "n"
while (s==="n"){
let jug= readlineSync.question("ingrese su jugada:"); 
if (jug!="piedra" && jug!="papel" && jug!="tijeras"){
console.log("Entrada incorrecta");
} else {
    s = "y";
    return (jug);
 }
}
}
function obtenerGanador(x,y){
    if (x===y){
        let ganador = "Empate";
        return ganador;
    } else {
        if (x === "piedra"){ 
           if ( y=== "tijeras"){
        let ganador = "Gana el usuario";    
        return ganador;
        } else {
         let ganador = "Gana la computadora";      
        return ganador;
        }
     }   
        if (x === "tijeras"){
            if (y ==="papel"){
             let ganador = "Gana el usuario";   
        return ganador;  
        } else {
             let ganador = "Gana la computadora";  
            return ganador;
        }
        }
        if (x=== "papel"){
            if ( y === "piedra"){
             let ganador = "Gana el usuario";   
           return ganador;
        } else {
            let ganador = "Gana la computadora";  
            return ganador;
        }
        }
   }
}
let jugadaPc = obtenerJugadaComputadora();
let jugadaUs= obtenerJugadaUsuario();
let resultado = obtenerGanador(jugadaUs,jugadaPc);
console.log ("La computadora eligio:",jugadaPc);
console.log("El usuario eligio:",jugadaUs);
console.log("El resultado fue:",resultado);