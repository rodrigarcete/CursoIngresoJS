function mostrar()
{
	let edad;
	let mensaje;
	
	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt (edad)

	if(edad  >= 18)
	{
	
		mensaje = "la persona es mayor de edad"
	}else{
		mensaje = "la persona es menor de edad"
	}	
	alert(mensaje)

}//FIN DE LA FUNCIÓN
//Heber Garcete