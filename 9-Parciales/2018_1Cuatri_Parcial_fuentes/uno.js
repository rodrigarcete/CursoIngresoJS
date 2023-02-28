/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
    let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let acumuladorBarbijo = 0;
    let acumuladorAlcohol = 0;
    let acumuladorJabon = 0;
    let contBarbijo = 0;
    let contAlcohol = 0;
    let contJabon = 0;
    let precioAlcoholBarato;
    let cantidadAlcoholBarato;
    let fabricanteAlcoholBarato;
    let promedioCompra;
    let mayorTipo;
    
  
  
  

  
    for(let i = 0; i < 5;i++)
  {
   tipo = prompt("ingrese el tipo del producto")
    while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol")
    {
      tipo =prompt("error.ingrese el tipo del producto");
    }
   precio = prompt("ingrese el precio");
   precio = parseInt(precio);
   while(precio < 100 || precio > 300)
   {
    precio = prompt("error.ingrese un precio valido");
    precio = parseInt(precio);
  
   }
   cantidad = prompt("ingrese la cantidad");
   cantidad = parseint(cantidad);
   while(cantidad < 0 || cantidad > 1000)
   {
    cantidad = prompt("EROR.ingrese una cantidad valida")
    cantidad = parseint(cantidad);
  }
  marca = prompt("ingrese la marca ");
  fabricante = prompt("ingrese el fabricante");
  if()




}
    
  
  
  
  
  
  
}
