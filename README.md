# tareas
CRUD de tareas
Esta aplicación esta creada con Spring boot, Mongo DB y RactJS, es una aplicación para la administración de tareas, el usuario podrá crear, listar, aactualizar y eliminar sus tareas diarias.

En la rama master se encuentra el Backend que esta desarrollado en java, y en la rama front se encuentra la carpeta front con todo el codigo para la interface que esta desarrollado en RactJS.
Para su correcto funcionamiento debes clonar el repositorio simplemente de la rama front, ahí se encuentra todo el proyecto.
Se debe contar tambien con una base datos muy simple de Mongo DB así:
Base de datos en Mongo DB
Nombre: tareas
Collection: tarea
Estructura:
{
	“id”
	“nombre”
	“completado”
}
id y nombre son de tipo string y completado de tipo bool, donde obviamente se almacenará el identificador de la tarea, el nombre de la tarea y en completado un true si la tarea esta completada o false si aun no lo esta.
