let pacientes = [];
let nuevoIngreso = "si";
  


function agregarNombreApellido () {

let nombre = prompt ("Ingrese nombre y apellido del paciente");

return nombre;

}


function agregarEdad() {

let edad = prompt ("Ingrese edad del paciente");

return edad;

}


function agregarSintoma() {

let sintoma = prompt ("Ingrese sintoma del paciente");

return sintoma;

}


function agregarPrioridad(sintoma){
  
if (sintoma === "dificultad respiratoria grave" || sintoma ==="convulsiones" || sintoma === "traumatismo grave"){

alert ("🔴Codigo Rojo: Atencion inmediata");
return "Codigo rojo";}

else if (sintoma=== "broncoespasmo" || sintoma === "fiebre alta"){

alert ("🟡Codigo Amarillo: Atencion prioritaria");
return "Codigo amarillo";}

else {alert ("🟢Codigo Verde: Atencion normal");
return "Codigo verde";
}

}



do {
  let nombre = agregarNombreApellido();
  let edad = agregarEdad();
  let sintoma = agregarSintoma();
  let prioridad = agregarPrioridad(sintoma);


  let nuevoPacienteIngresado = {nombre: nombre, edad: edad, sintoma: sintoma, prioridad: prioridad};

  pacientes.push(nuevoPacienteIngresado);

  console.log("Pacientes ingresados:");

  for (const item of pacientes) {
  console.log(`- ${item.nombre} (${item.edad} años) (${item.sintoma}) (${item.prioridad})`);}

  
  nuevoIngreso = prompt ("¿Agregar nuevo ingreso? (si/no)");
  
  
  } while (nuevoIngreso === "si");