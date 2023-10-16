
const allTask = [
    {
        id: 1, 
        task: 'Comprar leche',
        priority: 'normal', 
    },
    {
        id: 2, 
        task: 'Llamar al médico para pedir una cita',
        priority: 'intermediate', 
    },
    {
        id: 3, 
        task: 'Terminar el informe para el trabajo',
        priority: 'urgent', 
    },
]

let counterID = 3
console.log (allTask)

//* Seleccionar los elementos: 
//? Seleccionar form que añade nuevas tareas. 
const formNewTask = document.querySelector('.create-task')
console.log (formNewTask)

//? Seleccionar el elemento HTML (section) que incluye la lista de tareas. 
const listTask = document.querySelector('.list-tasks')
console.log (listTask)


//* Función para comprobar si introduce bien la nueva tarea en el input. 
const checkEmptyInputAndGetValue = (input) => {

    // Si deja el input de la tarea vacío, se añade la clase is-invalid, que sirve para poner de rojo el border del input, a modo de advertencia.    
    if (input.value.trim() === ''){
        
        // Se pone rojo el borde y el placeholder al dejar el campo vacío.
        input.classList.add('is-invalid', 'is-invalid-placeholder-red')      
        
        // Si deja vacío, devuelve null la función.
        return null
    }else{
        formNewTask.writeTask.classList.remove('is-invalid')
        return input.value
    }       
}

const printTasks = ()=>{

    // Borramos el section en el que se incluyen todas las tareas. Lo ponemos en blanco.
    listTask.innerHTML = ''
    
    console.log (listTask)

    for (let task of allTask) {
        
        // Crear en cada vuelta el article de cada tarea. 
        const taskHTML = document.createElement('article')

        // Añadirle al article sus clases
        taskHTML.className = 'article.task'
        console.log (taskHTML.className)

        // Contenido HTML
        taskHTML.innerHTML = `
        <article class="task">
            <p><i class="bi bi-caret-right"></i>
            ${task.task}</p>
            <i class="bi bi-trash"></i>
        </article>       
        `  
        listTask.append(taskHTML)
    
       // Guardar en una variable el valor escogido en el select.
        const priorityValue = formNewTask.priority.value
        console.log (priorityValue)

       if (task.priority === 'urgent'){
            taskHTML.style.backgroundColor = 'red'
       }else if (task.priority === 'intermediate'){
            taskHTML.style.backgroundColor = 'var( --color-primary-yellow)'
       }else {
            taskHTML.style.backgroundColor = 'green' 
       }
            
    }
    
}  

//* Función para gestionar el botón de enviar. 
const handleSubmit = (event) => {
    // Prevenir el comportamiento por defecto del formulario. 
    event.preventDefault()

    // Tras darle a enviar, se ejecuta la función createTask, con el input que sirve para escribir las tareas, y el valor lo guardas en la variable nameTask.
    const nameTask = checkEmptyInputAndGetValue(formNewTask.writeTask)
    console.log(nameTask)

    // Si deja en blanco el campo se corta la función.
    if (nameTask === null){
        return
    }

    // Guardar en una variable el valor escogido en el select.
    const priorityValue = formNewTask.priority.value
    console.log (priorityValue)

    // Si escribe un nombre, se imprime en consola los datos que ha metido el usuario
    console.log(`Tarea añadida
        Name: ${nameTask}
        Priority: ${priorityValue}
    `)

    // El contador de ID suma 1, cada vez que añade bien una tarea.
    counterID++

    // Crear un objeto idéntico al de la base de datos, con id, title y priority.
    const newTask = {
        id: counterID,
        task: nameTask, 
        priority: priorityValue,
    }
    
    // Meter la nueva tarea en el array ("en la base de datos").
    allTask.push(newTask)
    console.log (allTask)

    // Función que hace que la tarea se genere en pantalla. 
    printTasks()

}
    
//? Escuchar el evento submit y llamar a la función handleSubmit cuando se le de a guardar)
formNewTask.addEventListener('submit', handleSubmit)
