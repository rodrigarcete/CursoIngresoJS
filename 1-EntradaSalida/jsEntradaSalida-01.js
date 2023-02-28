/*

Ejercicio 2

Dr. Gregory Cat (Diagnostico Veterinario)
Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.

Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:

Nombre de la mascota
Edad (Validar 1 - 20)
Tipo: (Validar “gato”, “perro”, “hamster”)
Peso: (Más de 0)
Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
“picazon de abeja”)
Vacuna antirrábica (validar “si”, ”no”)

Informes:

a) Nombre de la mascota más vieja con la vacuna antirrábica
b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
c) El tipo de mascota con más ingresos por problemas digestivos.
d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
e) Cantidad de perros ingresados por otitis.


*/
function mostrar()
{
	let nombreMascota;
	let edad;
	let tipo;
	let peso;
	let diagnóstico;
	let vacuna;
	let respuesta;
	let mascotaVieja;
	let edadMascotaVieja;
	let flag;
	let contMascotasParasitos;
	let contPerro;
	let contGato;
	let contHamster;
	let flagJoven;
	let edadMascotaJoven;
	let mascotaJoven;
	let diagnosticoJoven;
	let contPerrosOtitis;
	



	respuesta = "si";
	flag = 0;
	contMascotasParasitos = 0;
	contPerro = 0;
	contGato = 0;
	contHamster = 0;
	flagJoven = 0;
	contPerrosOtitis = 0;

	//ingreso de datos
	while (respuesta == "si")
	{ 
		nombreMascota = prompt("Ingrese nombre de la  mascota");
		edad = prompt("Ingrese la edad");
		edad = parseInt(edad);
		while ( edad < 1 || edad > 20)
		{ 
			edad = prompt("ReIngrese la edad");
		  	edad = parseInt(edad);
		
		} 
		tipo = prompt("Ingrese el tipo de mascota");
		while (tipo != "perro" && tipo != "gato" && tipo != "hamster")
		{ 
			tipo = prompt("Ingrese el tipo de mascota");

	 	} 
		peso = prompt("Ingrese el peso");
		peso = parseInt(peso);
		while (peso < 1)
		{ 
			peso = prompt("ReIngrese el peso");
			peso = parseInt(peso);
		} 
		diagnóstico = prompt("ingrese el diagnostico");
		while (diagnóstico != "problemas digestivos" &&  diagnóstico != "otitis" && diagnóstico != "alergias en la piel" && diagnóstico 
		!= "parasitos" && diagnóstico !="picazon de abeja")
		{
			diagnóstico = prompt("ingrese el diagnostico");
		} 
		vacuna = prompt("tiene vacuna?");
		while (vacuna != "si" && vacuna != "no" )
		{
			vacuna = prompt("tiene vacuna?");
		}

		//caluculos

		if (vacuna == "si")
		{ 
			if(edad > edadMascotaVieja || flag == 0 )
			{
				flag = 1;
				edadMascotaVieja = edad;
				mascotaVieja = nombreMascota;
			} 
		}

		//b
		if(vacuna == "no" && diagnóstico == "parasitos")
		{
			contMascotasParasitos++;
		}

		//c
		if (diagnóstico == "problemas digestivos")
		{
			switch(tipo)
			{
				case "gato":
				contGato++;
				break;
				case "perro":
				contPerro++;
				break;
				case "hamster":
				contHamster++;
				break;

			}
		}
		//d
	 
	 	if(edad < edadMascotaJoven || flagJoven == 0 )
		{
			flagJoven = 1;
			edadMascotaJoven = edad;
			mascotaJoven = nombreMascota;
			diagnosticoJoven = diagnóstico;
		} 

		//E
		if(tipo == "perro" && diagnóstico == "otitis")
		{
			contPerrosOtitis++;
		}
	

		
		
		respuesta = prompt("Queres cargar otra mascota");
	}


	if(contGato > contPerro && contGato > contHamster) 
	{
		alert("se ingresaron mas gatos con problemas digestivos");
	}else 
	{
		if(contPerro > contHamster)
		{
			alert("se ingresaron mas perros con problemas digestivos")
		}
		else
		{
			alert("se ingresaron mas hamster con problemas digestivos");
		}
	} 
	
	
	alert("El nombre de la mascota mas vieja es " + mascotaVieja);
	alert("mascota con parasitos sin vacuna" + contMascotasParasitos);
	alert("nombre de la mascota mas joven es" + mascotaJoven + "su diagnostico es" + diagnosticoJoven + " y tiene"+ edadMascotaJoven);
	alert("Perros con otitis  " + contPerrosOtitis);

}
