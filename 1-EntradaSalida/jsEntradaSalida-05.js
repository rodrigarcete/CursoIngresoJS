/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	let	nombreIngresado;
	let edad
	let mensaje;

	nombreIngresado = document.getElementById("txtIdNombre").value
	edad = document.getElementById("txtIdEdad").value

	mensaje = "Usted se llama " + nombreIngresado + " Y tiene "	+	edad
	


	alert(mensaje);
}

