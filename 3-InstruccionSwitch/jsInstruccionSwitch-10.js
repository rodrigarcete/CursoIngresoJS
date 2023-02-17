function mostrar()
{
	let destino;
	let estacionAnho;
	let mensaje;

	destino = document.getElementById("txtIdDestino").value;
	estacionAnho = document.getElementById("txtIdEstacion").value;

	switch(estacionAnho)
	{
		case "Invierno":
			if(destino == "Bariloche"){
				mensaje = "Se viaja";
			}else{
				mensaje = "No se viaja";
			}
			break;
		case "Verano":
			if(destino == "Mar del plata" || destino == "Cataratas"){
				mensaje = "Se viaja";
			}else{
				mensaje = "No se viaja";
			}
			break;
		case "Otoño":
			mensaje = "Se viaja";
			break;
		case "Primavera":
			if(destino != "Bariloche"){
				mensaje = "Se viaja";
			}else {
				mensaje = "No se viaja";
			}
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN