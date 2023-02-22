/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let suma = 0;
    let numero;
    let producto = 1;

    while (true){
        numero = prompt ("ingrese un numero o ingrese 'salir' para terminar la operacion");

        if (numero === 'salir'){
            break;
        }

        numero = parseFloat(numero);

        if (isNaN(numero)) {
            alert ("Ingrese un numero valido para continuar");
            continue;
        }
		
        if (numero >= 0){
			suma += numero;
		} else {
			producto *= numero;
		}
	}

	document.getElementById("txtIdSuma").value=suma;
    document.getElementById("txtIdProducto").value=producto;
}//FIN DE LA FUNCIÓN