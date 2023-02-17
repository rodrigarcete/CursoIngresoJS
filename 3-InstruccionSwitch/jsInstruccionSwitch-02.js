function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			mensaje = "Falta para el invierno";
		break;
		case "Febrero":
			mensaje = "Falta para el invierno";
		break;
		case "Marzo":
			mensaje = "Falta para el invierno";
		break;
		case "Abril":
			mensaje = "Falta para el invierno";
		break;
		case "Mayo":
			mensaje = "Falta para el invierno";
		break;
		case "Junio":
			mensaje = "Falta para el invierno";
		break;
		case "Julio":
			mensaje = "Abrigate que hace frio";
		break;
		case "Agosto":
			mensaje = "Abrigate que hace frio";
		break;
		default:
			mensaje = "Ya pasamos el frio, ahora calor!!!";
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN