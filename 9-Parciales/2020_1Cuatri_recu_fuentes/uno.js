  

function mostrar()
{
	
	let nombreAlumno;
	let situacionLaboral;
	let cantidadMaterias;
	let sexo;
	let notaPromedio;
	let edad;
	let flagPromedio;
	let MejorPromedio;
	let nombreMejorPromedio;
	let nombreMasviejo;
	let flagMasviejo;
	let edadMasviejo;
	
	
	respuesta = "si";
	flagPromedio = 0;
	flag = 0;
	
	respuesta =prompt("desea ingresar un alumno?");
	
 	while(respuesta =="si")
	{
			nombreAlumno = prompt("Ingrese el nombre del alumno");
			situacionLaboral = prompt("ingrese la sitaucion laboral");
			while(situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral!= "solo estudiante")
			{
				situacionLaboral = prompt("ingrese la sitaucion laboral");
			}
			cantidadMaterias = prompt("ingrese la cantidad de materias");
			cantidadMaterias = parseInt(cantidadMaterias);
			while (cantidadMaterias < -1  || cantidadMaterias > 11)
			{
				cantidadMaterias = prompt("ingrese la cantidad de materias");
				cantidadMaterias = parseInt(cantidadMaterias);
			}
			sexo = prompt("ingrese el sexo");
			while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
			{
				sexo = prompt("ingrese el sexo");
			}
			nota = prompt("ingrese la nota");
			nota = parseInt(nota);
			while(nota < -1 || nota > 11)
			{
				nota = prompt("ingrese la nota");
				nota = parseInt(nota);
			}
			edad = prompt("ingrese la edad");
			edad = parseInt(edad)
			while(edad < 17 || edad > 90);
			{
				edad = prompt("ingrese la edad");
				edad = parseInt(edad);
			}
			 
			 if(situacionLaboral == "trabajando" && situacionLaboral == "buscando")
			 {
				if(notaPromedio > MejorPromedio || flagPromedio == 0)
				{
					flagPromedio = 1;
					MejorPromedio = notaPromedio;
					nombreMejorPromedio = nombreAlumno;
				}
	
			 }
			 
			 if(situacionLaboral == "estudiantes")
			{
				if( edad > edadMasviejo ||flagMasviejo = 0);
				{
					flagMasviejo = 1;
					edadMasviejo = edad;
					nombreMasviejo = nombreAlumno;
				}
	
	
			}
		
		
		
		
		
	}	

}
