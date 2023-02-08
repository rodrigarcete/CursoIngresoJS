function mostrar()
{
	let random;
	let mensaje;
	random =  Math.floor(Math.random() * 10) + 1;

	if (random >= 9 ) 
	{
		 mensaje =  "Excelente" + random;
	}else if (random >=  4 ) 
	{ 
		mensaje = "APROBO " + random;
	}else {	
		mensaje = "Vamos la proxima se puede  " + random
	}

	alert(mensaje)
}//FIN DE LA FUNCIÓN