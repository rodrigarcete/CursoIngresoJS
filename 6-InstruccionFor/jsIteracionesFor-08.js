function mostrar()
{
	let numero;
	let contadordDivisores;
	
	contadordDivisores = 0

	numero = parseInt(prompt("ingrese un numero"));

	while(isNaN(numero))
	{
		numero = parseInt(prompt("Error, ingrese un numero"));
	}

	for(let i = 2; i < numero; i++)
	{
		if(numero % i == 0)
		{
			console.log(numero + "es primo ")
		}
	}


}//FIN DE LA FUNCIÓN