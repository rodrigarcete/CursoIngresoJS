/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let promedio;
	let numero;


	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI")
	{
		numero = parseInt(numero);
		numero = prompt("Coloca el numero para calcular");
		acumulador = acumulador + numero
		contador = contador + 1
		respuesta = prompt("Desea continuar? (coloque si)");
	}
	promedio = acumulador / contador;


	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;
}//FIN DE LA FUNCIÓN