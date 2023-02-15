/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipecantLampa” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipecantLampa” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantLamp;
    let marca;
    let porcentaje;
    let aumento;
    let precioBase;
    let precio;
    let precioDes;
    let precioFinal;
    let precioImpuesto;
    let impuesto;
    let mensaje;

    aumento = 10;
    precioBase = 35;
    porcentaje = 0;


    cantLamp =parseInt( document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value; 



    if( cantLamp >5) {
        porcentaje = 50;

    }else if( cantLamp == 5) {
        if(marca == "ArgentinaLuz") 
        porcentaje = 40;
    }else {   
        porcentaje = 30;
    }else if (cantLamp == 4 )  {   
        if (marca == "ArgentinaLuz" || marca == "FelipecantLampa") 
            porcentaje = 25;
    }else  {
            porcentaje = 20;
           
    }else if (cantLamp == 3) {
            porcentaje = 15;

    }else if (marca == "FelipecantLampa") { 
                porcentaje = 10;
    }else {
            porcentaje = 5;
    }else {
            porcentaje = 0;

    }

        precioDes = precio * porcentaje / 100;
        precioFinal = precio - precioDes;

        mensaje = "$" + precioFinal;

        if (precioFinal >= 120 ) {
            impuesto =precioFinal * aumento / 100
            precioImpuesto = precioFinal + aumento;
            alert ("Usted pago $ " + precioImpuesto + " de IIBB., siendo $ " + impuesto + " el impuesto que se pago.");
        } 
        
        document.getElementById("txtIdprecioDescuento").value = mensaje;


       
}
