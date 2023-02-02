/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let importeFinal;
	let descuento;
	let porcentaje;
	
	porcentaje = -25

	importe = parseInt(document.getElementById("txtIdImporte").value);
	
	descuento = importe * porcentaje / 100;
	importeFinal = importe + descuento;

	document.getElementById("txtIdResultado").value = importeFinal
	
}
