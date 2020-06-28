//**📝 Lista de tareas**

// - Crear un programa que tenga un menú con las siguientes opciones:
// - **AGREGAR TAREA:** debe pedir al usuario ingresar una tarea y agregarla a la lista de tareas
// - **MODIFICAR TAREA:** debe pedir al usuario ingresar el número de tarea que se desea modificar, mostrarla, y pedir que ingrese la tarea a reemplazarla o modificarla
// - **ELIMINAR TAREA:** debe pedir al usuario ingresar el número de tarea a eliminar, mostrarla, y pedirle confirmar si desea eliminarla o no
// - **VER TAREAS:** debe listar todas las tareas hasta el momento
// - **SALIR:** debe terminar la ejecución del programa
// - El programa debe mostrar el menú de opciones, y permitir ingresar una opción. Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú. Si se elige SALIR, debe terminar el programa. Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones.

/*
-declarar variables tarea - array
-crear menu
-crear fx para las opciones
-agregar tarea - ingreso por el usuario y un push al array.
-modificar tarea: ingresar el indice de la tarea, ingresar cambios en el indice y modificar en array
-eliminar tarea: ingresar indice y eliminar.
-mostrar todas las tareas
*/

const tasks = [];

const addTask = () => {
    const taskToAdd = prompt("Ingrese la tarea");
    tasks.push(taskToAdd);
    console.log(tasks);
}

const modifyTask = () => {
    const indexTask = Number(prompt("Ingrese el número de índice de la tarea"));
    const taskInput = prompt("Ingrese el nombre de la tarea");
    tasks[indexTask] = taskInput;
    console.log(tasks);
}

const deleteTask = () => {
    const indexTask = Number(prompt("Ingrese el número de índice de la tarea"));
    
    const userDecision = confirm(`Tarea a eliminar: ${tasks[indexTask]}`);

    if (userDecision == true) {
        tasks.splice(indexTask,1);
    }
}

const showAllTasks = () => {
    alert(`Tareas: ${tasks}`);
}

const taskMenu = () => {

    let action = "";

    while(action !== "SALIR") {

        action = prompt("Elija una de las siguientes opciones: VER TAREAS, AGREGAR, MODIFICAR, ELIMINAR o SALIR");

        switch(action) {
            case "AGREGAR":
                addTask();
                break;
            case "MODIFICAR":
                modifyTask();
                break;
            case "ELIMINAR":
                deleteTask();
                break;
            case "VER TAREAS":
                showAllTasks();
                break;
            case "SALIR":
                alert("Adiós!!");
                break;
            default:
                alert("Opción incorrecta");
        }

    }
}

taskMenu();