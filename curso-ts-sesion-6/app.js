"use strict";
//Clase que represente una tarea
//1. nombre de la tarea
//2. ¿Se ha completado?
class ToDoItem {
    constructor(task, isComplete) {
        this.task = task;
        this.isComplete = isComplete;
    }
}
//Administrador de las tareas
//1-list de tareas
//2-defina operacion a ejecutar con las tares... eliminar, agregar... modificar, etc
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    //definimos la variable tasks del tipo arreglo de ToDoItem(clase) y la arrancamos como arreglo vacio
    addTask(task) {
        //la funcion añadir tarea, que no devuevle nada, le introducimos un string y define un newItem que crea un objeto tipo ToDoItem(clase) con el nombre y por defecto "false" pq está sin completar
        const newItem = new ToDoItem(task, false);
        this.tasks.push(newItem); //Añade el nuevo item al array;
    }
}
const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-task");
const incompleteTasksHolder = document.getElementById("incomplete-tasks");
const completedTasksHolder = document.getElementById("completed-tasks");
const taskManager = new TaskManager();
addButton.addEventListener("click", () => {
    console.log(taskInput.value);
});
