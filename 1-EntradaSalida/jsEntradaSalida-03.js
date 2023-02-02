/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
 /* Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
	El programa deberá mostrar por alert la descripción del producto 
	junto al precio aumentado en un 30%. 
	Pueden utilizar el html del ejercicio 3 para resolverlo. */

function mostrar()
{
	let descripcion;
	let precioProd;
	let aumento;
	let nuevoPrecio;
	let porcentaje;
	porcentaje = 30

	descripcion = prompt ("descripcion de producto");

	precioProd = document.getElementById("txtIdNombre").value

	precioProd = parseInt (precioProd);
	
	aumento = precioProd + porcentaje  /100
	
	nuevoPrecio = precioProd + aumento

	alert(descripcion + " " + nuevoPrecio)
	 
	
	
	
	
	
	
	
	
	
	/*
	let nombreIngresado;
	let mensaje;

	nombreIngresado=document.getElementById("txtIdNombre").value;
	mensaje = " su nombre es " + nombreIngresado


	alert(mensaje ); */

}		


