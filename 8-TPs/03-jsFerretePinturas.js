/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    /* A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
   como pasarla : (32 °F − 32) × 5/9 = 0 °C */
   let far;
   let centigrados;


   far = document.getElementById("txtIdTemperatura").value;
   far = parseFloat (far)

   centigrados = (far - 32) * 5 /9

  alert(far + " Farenheit es igual a " + centigrados)
	
}

function CentigradosFahrenheit () 
{
   /* A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
   como pasarla : (32 °F − 32) × 5/9 = 0 °C */
   let far;
   let centigrados;


   far = document.getElementById("").value;
   far = parseFloat (far)

   centigrados = (far - 32) * 5 /9

  alert(far + " Farenheit es igual a " + centigrados)

   




	
}
