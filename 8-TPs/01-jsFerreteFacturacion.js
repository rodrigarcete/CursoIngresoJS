/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno
    let precioDos
    let precioTres
    let sumaDePrecios;
    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno  = parseInt(precioUno)
    precioDos  = parseInt(precioDos)
    precioTres = parseInt(precioTres)

    sumaDePrecios = precioUno + precioDos + precioTres;

    alert("la suma total es : " + sumaDePrecios)




	
}
function Promedio () 
{
    let precioUno
    let precioDos
    let precioTres
    let sumaDePrecios;
    let promedio;

    
    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno  = parseInt(precioUno)
    precioDos  = parseInt(precioDos)
    precioTres = parseInt(precioTres)

    sumaDePrecios = precioUno + precioDos + precioTres;

    promedio    =  sumaDePrecios / 3

    alert("El promedio de los precios es : " + promedio)
    
	
}
function PrecioFinal () 
{
    let precioUno
    let precioDos
    let precioTres
    let sumaDePrecios;
    let promedio;
    let precioFinal;
    let IVA;

    IVA = 21;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno  = parseInt(precioUno)
    precioDos  = parseInt(precioDos)
    precioTres = parseInt(precioTres)

    sumaDePrecios = precioUno + precioDos + precioTres;
    precioFinal    = sumaDePrecios +  sumaDePrecios * IVA / 100

    

    alert("El precio final con el IVA DEL 21% es : " + precioFinal  )
    
	
}