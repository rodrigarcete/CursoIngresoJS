/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variables
	banderaDelPrimero=true;
	respuesta='si';

	
	while(respuesta=="si")
	{
		numeroIngresado = parseInt(numeroIngresado);
		numeroIngresado = prompt("ingrese un numero");
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error, ingrese un numero")
			numeroIngresado = parseInt(numeroIngresado)
		}

		if(banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}
		else if(numeroMaximo < numeroIngresado)
		{
			numeroMaximo = numeroIngresado;
		}
		else if(numeroMinimo > numeroIngresado)
		{
			numeroMinimo = numeroIngresado;
		}

		respuesta=prompt("desea continuar? si/no");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN