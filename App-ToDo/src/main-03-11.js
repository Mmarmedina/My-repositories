import { nanoid } from 'nanoid/nanoid.js'

//* Seleccionar los elementos del DOM.
// Seleccionar form que añade nuevas tareas. 
const formNewTask = document.querySelector('.create-task')
console.log (formNewTask)

// Seleccionar el elemento HTML (section) que incluye la lista de tareas. 
const listTask = document.querySelector('.list-tasks')
console.log (listTask)

//* Crear base de datos.
const allTasks = [
    {
        id: nanoid(), 
        task: 'Comprar leche',
        priority: 'normal', 
    },
    {
        id: nanoid(), 
        task: 'Llamar al médico para pedir una cita',
        priority: 'intermediate', 
    },
    {
        id: nanoid(), 
        task: 'Terminar el informe para el trabajo',
        priority: 'urgent', 
    },
]

console.log (allTasks)

//* Función para eliminar tareas.
const deleteTask = (deleteID)=>{

    //? Método 1. 
    // for (let i = 0; i < allTasks.length; i++){

    //     if (allTasks[i].id === deleteID ){
    //         allTasks.splice(i,1)
    //     }
    // }   
    // console.log (allTasks)

    //? Método 2
    allTasks.forEach((taskObj, i) => {

        if(taskObj.id === deleteID) {
            allTasks.splice(i, 1)
        }
    })
    console.log (allTasks) 

    printTasks()
}

//* Crear el HTML de las tareas (articles)
const createTaskHTML = (task) => {

    // Crear en cada vuelta el article de cada tarea.
    const taskHTML = document.createElement('article')

    // Añadirle al article sus clases.
    taskHTML.className = 'article.task'
    console.log (taskHTML.className)
    
    // Añadir el contenido HTML
    taskHTML.innerHTML = `
    <article class="task">
        <p><i class="bi bi-caret-right"></i>
        ${task.task}</p>
        <i class="bi bi-trash deleteIcon"></i>              
    </article>       
    ` 
    return taskHTML
}

//* Poner de color la tarea según la prioridad.     
const colorTask = (taskpriority, taskHTML)=> {    
    // Guardar en una variable el valor escogido en el select.
    const priorityValue = formNewTask.priority.value
    console.log (priorityValue)

    // Colores
    const colors = {
        colorUrgentTask: 'hsla(352, 76%, 48%, 0.732)',
        colorIntermediateTask: 'hsla(42, 95%, 57%, 0.755)',
        colorNormalTask: 'hsla(127, 59%, 73%, 0.88)'
    }

    // Según la prioridad se pone la tarea de un color, usando el siguiente condicional. 
    if (taskpriority === 'urgent'){
        taskHTML.style.backgroundColor = colors.colorUrgentTask
    }else if (taskpriority === 'intermediate'){
        taskHTML.style.backgroundColor = colors.colorIntermediateTask
    }else {
        taskHTML.style.backgroundColor =  colors.colorNormalTask
    }
}

//* Función para sacar en pantalla las tareas. 
const printTasks = ()=>{
    //* Borramos el section en el que se incluyen todas las tareas. Lo ponemos en blanco.
    listTask.innerHTML = ''    
    console.log (listTask)

    // * Se crean los articles (tareas) en cada vuelta del bucle. 
    for (let task of allTasks) {
        
        const taskHTML = createTaskHTML(task)
        listTask.append(taskHTML)
        
        colorTask(task.priority, taskHTML)

        // Seleccionar el icono de eliminar que crea en cada vuelta del bucle.
        const deleteTaskIcon = taskHTML.querySelector('.deleteIcon')

        // Escuchar el icono de eliminar en cada vuelta del bucle, si se hace click sobre él, se lanza una función encargada de eliminar la tarea.
        deleteTaskIcon.addEventListener('click', () => {deleteTask(task.id)})
        console.log (task.id)             
    }     
}  

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

//* Función para crear mensaje de alerta cuando le da a guardar sin escribir nada en el campo "nueva tarea".
const createAlertBootstrap = (mensaje = 'Rellena el campo vacío', color = 'danger') => {
    const alertHTML = document.createElement('div')
    alertHTML.className = `alert alert-${color} alert-dismissible shadow position-absolute start-50 top-50 translate-middle-x w-50`
    alertHTML.innerHTML = `
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    <div>${mensaje}</div>    `
        
    const fadeInOut = alertHTML.animate([ 
      { opacity: 0, offset: 0 }, 
      { opacity: 1, offset: 0.1 }, 
      { opacity: 1, offset: 0.9 }, 
      { opacity: 0, offset: 1 } 
    ], { duration: 2500, fill: 'forwards' })  
    
    fadeInOut.addEventListener('finish', () => alertHTML.remove())   
  
    document.body.append(alertHTML)
  }

//* Función para crear una nueva tarea en la base de datos.
const createNewTaskBBDD = (pnameTask,ppriorityValue) => {
     // Crear un objeto idéntico al de la base de datos, con id, title y priority.
     const newTask = {
        id: nanoid(),
        task: pnameTask, 
        priority: ppriorityValue,
    }    
    // Meter la nueva tarea en el array ("en la base de datos").
    allTasks.push(newTask)
    console.log (allTasks)
}


//* Función para gestionar el botón de enviar. 
const handleSubmit = (event) => {
    // Prevenir el comportamiento por defecto del formulario. 
    event.preventDefault()

    // Tras darle a enviar, se ejecuta la función checkEmptyInputAndGetValue, pasando como parámetro el input dónde se escriben las tareas, y la tarea que escribe el usuario se guarda en la variable nameTask.
    const nameTask = checkEmptyInputAndGetValue(formNewTask.writeTask)
    console.log(nameTask)

    // Si deja en blanco el campo se corta la función.
    if (nameTask === null){
        createAlertBootstrap('Escribe tu tarea 😊', 'danger')
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
       
    // Meter la nueva tarea en el array ("en la base de datos").
    createNewTaskBBDD(nameTask, priorityValue)

    // Imprime todos las tareas de nuevo, incluyendo la nueva.    
    printTasks()              
}

//? Escuchar el evento submit y llamar a la función handleSubmit cuando se le de a guardar).
formNewTask.addEventListener('submit', handleSubmit)

// Con esto al cargar la página salen las 3 tareas.
printTasks()



//? Escuchar cuando se cambia de valor el select (ya está seleccionado)
// Seleccionar el select de filtrado.
const selectFilter = document.getElementById('Frecuency')
console.log (selectFilter)


selectFilter.addEventListener('change', (event) => {

  // ? Generar nuevos arrays, filtrando por prioridad.
  const arrayUrgentTasks = allTasks.filter((task) => {  return task.priority === 'urgent' })
  console.log (arrayUrgentTasks)

  const arrayNomalTasks = allTasks.filter(task => { return task.priority === 'normal'})
  console.log (arrayNomalTasks)

  const arrayIntermediateTasks = allTasks.filter(task => {return task.priority === 'intermediate'})
  console.log (arrayIntermediateTasks)

  
  // Aquí ahora hay que hacer que al hacer click en uno pasa esto.     
  const selectedValue = selectFilter.value 
  console.log (selectedValue)


  if (selectedValue === 'allTasks'){
    console.log ('jopetis') 
            
    //* Borramos el section en el que se incluyen todas las tareas. Lo ponemos en blanco.
    listTask.innerHTML = ''    
    console.log (listTask)

    // * Se crean los articles (tareas) en cada vuelta del bucle. 
    for (let task of allTasks) {
        
        const taskHTML = createTaskHTML(task)
        listTask.append(taskHTML)
        
        colorTask(task.priority, taskHTML)

        // Seleccionar el icono de eliminar que crea en cada vuelta del bucle.
        const deleteTaskIcon = taskHTML.querySelector('.deleteIcon')

        // Escuchar el icono de eliminar en cada vuelta del bucle, si se hace click sobre él, se lanza una función encargada de eliminar la tarea.
        deleteTaskIcon.addEventListener('click', () => {deleteTask(task.id)})
        console.log (task.id)             
    } 


  }else if (selectedValue === 'urgent') {
    console.log ('urgente')    
  }else if (selectedValue === 'intermediate') {
    console.log ('intermediate')
  }else if (selectedValue === 'normal') {
    console.log ('normal')
  }
})

// Crear la función print para que la ejecute pasandole un array en particular. 
// Sustituir los bucles por el método eachfor.
// Repasar que vi ayer y como se puede aplicar.
// # Ejemplo con la librería
    // JAVASCRIPT-DIA 15-Parte 2: minuto 42. 
    // 06-DOM-JAVASCRIPT\41-app-library-localStorage
    // Vuelve a explicacion en 1:00:00 horas.
    // 2:00:00












