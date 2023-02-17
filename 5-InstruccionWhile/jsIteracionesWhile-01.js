/* Heber Garcete
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	//declaro la varaible
	let	contador;

//iniciar variable
	contador = 1;
	
	while(contador < 11) 
	{

		contador = contador + 1;
		alert(contador);
	}
	alert('iteración while');
}