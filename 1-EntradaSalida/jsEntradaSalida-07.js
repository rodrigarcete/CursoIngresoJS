/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numUnoText;
	let numDosText;
	let numUno;
	let numDos;
	let mensaje;

	numUnoText	= document.getElementById("txtIdNumeroUno").value
	numDosText	= document.getElementById("txtIdNumeroDos").value
	
	numUno	= parseInt (numUnoText)
	numDos = parseInt (numDosText)
	mensaje = "La suma es " + (numUno + numDos)
	
	alert(mensaje);	
}

function restar()
{
	let numUnoText;
	let numDosText;
	let numUno;
	let numDos;
	let mensaje;

	numUnoText	= document.getElementById("txtIdNumeroUno").value
	numDosText	= document.getElementById("txtIdNumeroDos").value
	
	numUno	= parseInt (numUnoText)
	numDos = parseInt (numDosText)
	mensaje = "La resta es " + (numUno - numDos)

	alert(mensaje)
	
}

function multiplicar()
{ 	
	let numUnoText;
	let numDosText;
	let numUno;
	let numDos;
	let mensaje;

	numUnoText	= document.getElementById("txtIdNumeroUno").value
	numDosText	= document.getElementById("txtIdNumeroDos").value
	
	numUno	= parseInt (numUnoText)
	numDos = parseInt (numDosText)
	mensaje = "La multiplicacion es " + (numUno * numDos)
	
	alert(mensaje)
	
}

function dividir()
{
	let numUnoText;
	let numDosText;
	let numUno;
	let numDos;
	let mensaje;

	numUnoText	= document.getElementById("txtIdNumeroUno").value
	numDosText	= document.getElementById("txtIdNumeroDos").value
	
	numUno	= parseInt (numUnoText)
	numDos = parseInt (numDosText)
	mensaje = "La Division es " + (numUno / numDos)
	
	alert(mensaje)
	
}

