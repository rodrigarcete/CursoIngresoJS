/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let numeroIngresado;
	let contador;
	let contadorDeMayores;
	

	contador=0
	contadorDeMayores= 0;
	
	while(contador< 5)
	{
		numeroIngresado= prompt("ingresa un numero");
		numeroIngresado= parseInt(numeroIngresado);
		while(isNaN(numeroIngresado))
		{
			numeroIngresado= prompt("error, ingresa un numero valido");
			numeroIngresado= parseInt(numeroIngresado);
		}
		if(numeroIngresado > 9 && numeroIngresado < 21)
		{
			contadorDeMayores= contadorDeMayores + 1;	
		}

		contador= contador + 1; 
	}

	alert("la cantidad de numeros que se encuentran entre 10 y 20 (incluidos) es de: " + contadorDeMayores);

	
	
	
	
	
	
	
	
	
	
	
	
	
	/*let	contador;

	
	contador = 1;
		
	while(contador < 11) 
	{
	
			contador = contador + 1;
			alert(contador);
	}
	alert('iteración while'); */

}//FIN DE LA FUNCIÓN