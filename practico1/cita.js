let cita= "Tres tristes tigres comen trigo en un trigal";
let substring= "tigres comen trigo" ;
let tamañoDeCita= cita.length;
console.log("El tamaño de la cita es:",tamañoDeCita);
indice = cita.indexOf(substring);
console.log("El indice del substring es",indice);
let tamañoSubstring = substring.length;
let citaRevisada = cita.slice(0,indice+tamañoSubstring);
console.log(citaRevisada);