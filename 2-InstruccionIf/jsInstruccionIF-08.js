function mostrar()
{
	let edad;
	let estadoCivil;
	let mensaje

	edad = document.getElementById("txtIdEdad").value; 

	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad >= 18 && estadoCivil == "Soltero" )
	{
		mensaje = "Es soltero y no es menor ";
		alert(mensaje);
	}


}//FIN DE LA FUNCIÓN