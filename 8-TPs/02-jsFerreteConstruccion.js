/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
a=
*/


function Rectangulo () 
{
     /*A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
     perimetro : largo *2  + base * 2
     para 3 hilos de alambre tengo que hacer perimetro  * 3
      */

     let largo;
     let ancho;
     let perimetro;
     let alambre;


     largo = document.getElementById("txtIdLargo").value;
     ancho = document.getElementById("txtIdAncho").value;

     largo = parseFloat (largo);
     ancho = parseFloat(ancho);

    perimetro = largo * 2 + ancho * 2;
    alambre = perimetro * 3; 
    
    console.log(alambre)







}
function Circulo () 
{
	/* B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
    perimetro de un circulo es  : 2 * 3,14 * R */

    let radio;
    let perimetro;
    let alambre;

  




}
function Materiales () 
{
	 /*C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
     para sacar el are de un rectangulo se hace : largo * ancho
     para sacar las bolsas de cemento multiplico metro cuadrado por cemento y luego cal  */


     
}