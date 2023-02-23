function mostrar()
{
	let i;
	let repeticiones;
	let contador; 
	contador = 0

	for(i = 0; i < repeticiones; i++){

		i = prompt("igrese un numero");
		if(i %2 == 0){
			contador = contador + 1;
			console.log(i);
		}
	}

}//FIN DE LA FUNCIÓN