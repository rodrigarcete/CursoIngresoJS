function mostrar()
{
	let edad
	let mensaje

	edad = parseInt (document.getElementById("txtIdEdad").value); 

	if (edad  >= 18)
	{
		mensaje = "Es mayor de edad "

	}else if (edad  >= 13  ) 
	{

		mensaje= "Es es un adolecente"

	}else
	{

		mensaje= "es un niño"

	}	
		alert(mensaje)


}//FIN DE LA FUNCIÓN