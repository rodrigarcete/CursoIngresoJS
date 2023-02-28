/*1)
El alumno deberá ingresar: 
Nombre del alumno 
Carrera(Programación, Psicología, Diseño gráfico) 
Estado de la carrera: en curso-abandono-finalizado 
Sexo (femenino-masculino-nobinario) 
Edad (18 o más) 
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran. 
El programa deberá informar: 
A. Cantidad total de alumnos de cada carrera. 
B. Cantidad total de mujeres que cursan la carrera de programación 
C. Cantidad de alumnos no binarios. D. Promedio de notas de los alumnos finalizantes. 
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología. 
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?

2)Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
Nombre
Situcación laboral ("buscando" , "trabajando" o "solo estudiante")
Cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
Edad (validar)
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo

3)debemos alquilar el servicio de transporte para llegar a Bariloche con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
Edad(solo pueden ir mayores de edad),
temperatura corporal(validar)
y sexo (validar).
NOTA:el precio por pasajero es de $9000.
Se debe informar (solo si corresponde):
a) La cantidad de personas con PAMI de mas de 60 años.
b) El nombre y temperatura de la mujer OSDE mas joven.
c) Cuanto sale el viaje total sin descuento.
d) Si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/

function mostrar()

{
  let nombreAlumnoIng;
  let carreraAlumnoIng;
  let estadoAlumnoIng;
  let sexoAlumnoIng;
  let edadAlumnoIng;
  let notaAlumIng;
  let respuesta;
  let contTotalAlumnos;
  let pregunta;

  respuesta = "si"
 
  respuesta = "si";

	respuesta=prompt("desea ingresar a un alumno?");
  
  
while(respuesta = "si")
  { 
    nombreAlumnoIng = prompt("Ingrese el nombre del alumno");
    carreraAlumnoIng =prompt("ingrese la carrera del alumno");
    while(carreraAlumnoIng !="Programación" && carreraAlumnoIng != "Psicología" && carreraAlumnoIng != "Diseño gráfico")
    {
      carreraAlumnoIng = prompt("ERROR. ingrese la carrera del alumno");
    }
    estado = prompt("ingrese el estado del alumno")
    while(estado != "curso" && estado != "abandono" && estado !=  "finalizado")
    {
      estadoAlumnoIng = prompt("ERROR.ingrese el estado del alumno");
    }
    sexoAlumnoIng = prompt("ingrese el sexo del alumno")
    while(sexo != "femenino" && sexoAlumnoIng != "masculino" && sexoAlumnoIng != "nobinario")
    {
      sexoAlumnoIng = prompt("ERROR.ingrese el sexo del alumno");
    }
    edadAlumnoIng = prompt("ingrese la edad");
    edadAlumnoIng  = parseInt(edadAlumnoIng);
    while(edadAlumnoIng < 17)
    {
      edadAlumnoIng = prompt("ingrese la edad");
      edadAlumnoIng  = parseInt(edadAlumnoIng);
    }
    nota = prompt ("ingrese la nota del alumno")
    nota = parseInt(nota)
    while( nota < 1  || nota > 10)
    {
      nota = prompt ("EROR.ingrese la nota del alumno")
      nota = parseInt(nota)
    }
    //A
        if(respuesta = "si")
        {
        contTotalAlumnos++;
        }
    
    


  respuesta = prompt("Queres cargar otro alumno");
}


  alert( "el total de alumnos es " + contTotalAlumnos);





















}
