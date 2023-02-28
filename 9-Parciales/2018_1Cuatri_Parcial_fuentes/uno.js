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
    //
  /*  for(let i = 0; i < 5;i++)
    {
       tipo = prompt('Ingrese tipo de "barbijo" , "jabon"  o "alcohol":');
       while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol" ) 
       { tipo = prompt ('Tipo invalido. Ingrese tipo de "barbijo" , "jabon"  o "alcohol": ');
       }
    
       precio = parseFloat(prompt("Ingrese  precio $(100-300):"));
       while( precio < 100  || precio > 300 || isNaN (precio)){  //!(precio >= 100 && precio <= 300)
        parseInt(prompt("Error. Ingrese  precio $(100-300):"));  
    
       }*/
    
       precio = parseFloat(prompt("Ingrese  precio $(100-300):"));
       while( precio < 100  || precio > 300 || isNaN (precio)){  //!(precio >= 100 && precio <= 300)
        parseInt(prompt("Error. Ingrese  precio $(100-300):"));

    
}
