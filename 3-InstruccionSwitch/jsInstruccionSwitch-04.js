function mostrar()
{
	let mes;
	let mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensaje = "Si tiene 31 días";
		break;

		case "Febrero":
			mensaje = "Si tiene 28 días";
		break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Si tienen 30 días";
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN