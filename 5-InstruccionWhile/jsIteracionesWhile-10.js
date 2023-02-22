/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos=0;
	let sumaPositivos;
	let contadorDePositivos;
	let contadorDeNegativos;
	let contadorDeCeros;
	let contadorDePares;
	let promedioNegativos;
	let promedioPositivos;
	let diferencia;

	contadorDePares = 0;
	sumaPositivos = 0;
	contadorDePositivos = 0;
	contadorDeNegativos = 0;
	contadorDeCeros = 0;
	

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseFloat(numeroIngresado);

		if(numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorDeNegativos = contadorDeNegativos + 1;
		}else if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorDePositivos = contadorDePositivos + 1;
		}else 
		{
			contadorDeCeros = contadorDeCeros + 1;
		}
		if(numeroIngresado % 2 == 0)
		{
			contadorDePares = contadorDePares + 1;
		}

		respuesta=prompt("desea continuar? si/no");
	}//fin del while

	if(contadorDeNegativos > 0)
	{
		promedioNegativos = sumaNegativos / contadorDeNegativos;
	}
	if(contadorDePositivos > 0)
	{
		promedioPositivos = sumaPositivos / contadorDePositivos;
	}
	
	diferencia = contadorDePositivos - contadorDeNegativos;

	document.write("la suma de negativos es :"+sumaNegativos + "<BR>");
	document.write("la suma de positivos es :"+sumaPositivos + "<BR>");
	document.write("la cantidad de positivos es :"+contadorDePositivos + "<BR>");
	document.write("la cantidad de negativos es :"+contadorDeNegativos + "<BR>");
	document.write("la cantidad de ceros es :"+contadorDeCeros + "<BR>");
	document.write("la cantidad de pares es :"+contadorDePares + "<BR>");
	document.write("el promedio de positivos es :"+promedioPositivos + "<BR>");
	document.write("el promedio de negativos es :"+promedioNegativos + "<BR>");
	document.write("la diferencia entre positivos - negativos es :"+diferencia + "<BR>");
}//FIN DE LA FUNCIÓN