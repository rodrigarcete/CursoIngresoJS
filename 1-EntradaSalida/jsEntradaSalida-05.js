/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	let	nombreIngresado;
	let edad
	let mensaje1;
	let mensaje2;

	nombreIngresado = document.getElementById("txtIdNombre").value
	edad = document.getElementById("txtIdEdad").value

	mensaje1 = "Usted se llama "
	mensaje2 = " Y tiene "


	alert(mensaje1 + nombreIngresado + mensaje2 + edad);
}

