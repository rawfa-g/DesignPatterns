//Clase que represente una tarea
//1. nombre de la tarea
//2. ¿Se ha completado?

class ToDoItem {
  constructor(public task: string, public isCompleted: boolean) {}
}
10;

//Administrador de las tareas
//1-list de tareas
//2-defina operacion a ejecutar con las tares... eliminar, agregar... modificar, etc

class TaskManager {
  tasks: ToDoItem[] = [];
  //definimos la variable tasks del tipo arreglo de ToDoItem(clase) y la arrancamos como arreglo vacio

  addTask(task: string): void {
    //la funcion añadir tarea, que no devuevle nada, le introducimos un string y define un newItem que crea un objeto tipo ToDoItem(clase) con el nombre y por defecto "false" pq está sin completar
    const newItem = new ToDoItem(task, false);
    this.tasks.push(newItem); //Añade el nuevo item al array;
  }
}

class HTMLHelper {
  static createTaskItem(task: ToDoItem): HTMLLIElement {
    const listItem = document.createElement("li");
    const checkBox = document.createElement("input");
    const label = document.createElement("label");

    checkBox.addEventListener("change", () => {
      if (checkBox.checked) {
        task.isCompleted = true;
        displayTasks();
      }
    });

    (checkBox.type = "checkbox"), (label.innerText = task.task);

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
  }
}

const taskInput = <HTMLInputElement>document.getElementById("new-task")!;
const addButton = document.getElementById("add-task")!;
const uncompletedTasksHolder = document.getElementById("incomplete-tasks")!;
const completedTasksHolder = document.getElementById("completed-tasks")!;

const taskManager = new TaskManager();

addButton.addEventListener("click", () => {
  taskManager.addTask(taskInput.value);
  displayTasks();
  clear();
});

function displayTasks() {
  completedTasksHolder.innerHTML = "";
  uncompletedTasksHolder.innerHTML = "";

  taskManager.tasks.forEach((element) => {
    var listItem = HTMLHelper.createTaskItem(element);
    if (element.isCompleted) {
      completedTasksHolder.appendChild(listItem);
    } else {
      uncompletedTasksHolder.appendChild(listItem);
    }
  });
}

function clear() {
  taskInput.value = "";
}
