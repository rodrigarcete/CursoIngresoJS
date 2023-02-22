function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let i;
	let promedio;

	i = 0;
	acumulador = 0;
	contador = 0;

	for(let i = 0; i < 5; i++)
	{
		numeroIngresado = parseInt(numeroIngresado);
		numeroIngresado = prompt("ingrese un numero");
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error, ingrese un numero")
			numeroIngresado = parseInt(numeroIngresado)
		}
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
		
	}
	

	promedio = acumulador / contador;

	mensaje = "la suma de todos los numeros es "+acumulador;
	document.getElementById("txtIdSuma").value = mensaje;

	mensaje = "el promedio de todos los numero es "+promedio;
	document.getElementById("txtIdPromedio").value = mensaje;

}//FIN DE LA FUNCIÓN