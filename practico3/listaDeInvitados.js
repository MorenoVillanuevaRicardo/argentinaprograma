let listaDeInvitados = ["Jose","Maria","Juan","Andres","Lionel","Sofia","Leandro","Emilia"];
let rechazados = [];
let admitidos = [];
for (let i=0; i < listaDeInvitados.length; i++){
  if (listaDeInvitados[i]==="Jose"|| listaDeInvitados[i]==="Sofia"){
    rechazados.push(listaDeInvitados[i]);
  } else {
    admitidos.push(listaDeInvitados[i]);
  }
}
console.log("La lista de invitados admitidos es:");
for (let j=0; j < admitidos.length ; j++){
  console.log(admitidos[j]);
}
console.log("La lista de invitados rechazados es:");
for (let k=0; k < rechazados.length ; k++){
  console.log(rechazados[k]);
}

let ordenadosAdmitidos = admitidos.sort();
console.log("La lista ordenada de invitados admitidos es:");
let j=0;
while (j < admitidos.length ){
  console.log(ordenadosAdmitidos[j]);
  j++;
}

let ordenadosRechazados = rechazados.sort();
console.log("La lista ordenada de invitados rechazados es:");
for (let k=0; k < rechazados.length ; k++){
  console.log(ordenadosRechazados[k]);
}