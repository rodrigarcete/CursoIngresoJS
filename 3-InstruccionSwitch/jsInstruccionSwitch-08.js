function mostrar()
{
	let destinoIngresado

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			mensaje = "En este lugar hace frio"
			break;
		
		case "Cataratas":
		case "Mar del plata":
			mensaje = "En este lugar hace calor";
			break;
	}
		alert(mensaje);

}//FIN DE LA FUNCIÓN