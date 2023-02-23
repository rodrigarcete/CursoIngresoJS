function mostrar()
{

	let numero;
	let cantidadDivisores;


	cantidadDivisores = 0;

	numero = parseInt(prompt("ingrese un numero"));

	for (let i = 0; i < numero; i++)
	{
		if(numero % i == 0)
		{
			cantidadDivisores = cantidadDivisores + 1;
		}
	} 

	document.write("La cantidad de divisores de " + numero + "es " + cantidadDivisores)


}//FIN DE LA FUNCIÓN