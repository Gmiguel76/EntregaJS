let pacientes = [{nombre:"Juan Ignacio Perez", edad:"9 años", sintoma:"fiebre"}, {nombre:"Clara Martinez", edad:"4 años", sintoma:"Tos"}, {nombre:"Pedro Gonzalez", edad:"12 años", sintoma:"Traumatismo codo"},  {nombre:"Maria Mandeo", edad:"6 años", sinntoma:"Traumatismo craneo",}];

console.log("Pacientes ingresados");

for (const item of pacientes) {
  console.log(`- ${item.nombre} (${item.edad}) (${item.sintoma})`);
}


function agregarNombreApellido () {

let nombre = prompt ("Ingrese nombre y apellido del paciente");

return nombre;

}

agregarNombreApellido();


function agregarEdad() {

let edad = prompt ("Ingrese edad del paciente");

return edad;

}

agregarEdad();


function agregarSintoma() {

let sintoma = prompt ("Ingrese sintoma del paciente");


if (sintoma === "dificultad respiratoria grave" || sintoma ==="convulsiones" || sintoma === "traumatismo grave"){

alert ("Codigo Rojo: Atencion inmediata");}

else if (sintoma=== "broncoespasmo" || sintoma === "fiebre alta"){

alert ("Codigo Amarillo: Atencion prioritaria");}

else {alert ("Codigo Verde: Atencion normal");}

}

agregarSintoma();

