import { nanoid } from '../node_modules/nanoid/nanoid.js'

//* Seleccionar los elementos del DOM.
// Seleccionar form que añade nuevas tareas. 
const formNewTask = document.querySelector('.create-task')
console.log (formNewTask)

// Seleccionar el elemento HTML (section) que incluye la lista de tareas. 
const listTask = document.querySelector('.list-tasks')
console.log (listTask)


let allTasks

//* LocalStorage
const getTasksFromLocalStorage = () => {  
    // Si en el localStore no hay nada que hay se guarde un array vacío (no null). 
    if (localStorage.getItem('allTasks') === null) {
        allTasks = []
    }else{
        allTasks = JSON.parse(localStorage.getItem('allTasks'))
    }   
}

//* Cada vez que metamos una tarea nueva o eliminemos tarea, hay que actualizar el localStorage.
const updateTaskToLocalStorage = () => {

     // Después de añadir nuevo elemento se mete en localStorage el array de tareas actualizado.
     localStorage.setItem('allTasks', JSON.stringify(allTasks))
}

//* Función para eliminar tareas.
const deleteTask = (deleteID)=>{

    //? Método 1: genera un array nuevo con todas las tareas sobre las que no se ha hecho click para eliminarlas.
    allTasks = allTasks.filter ((taskObj) => { return taskObj.id !== deleteID})
    console.log(allTasks)

    //? Método 2 
    // for (let i = 0; i < allTasks.length; i++){

    //     if (allTasks[i].id === deleteID ){
    //         allTasks.splice(i,1)
    //     }
    // }   
    // console.log (allTasks)

    //? Método 3
    // allTasks.forEach((taskObj, i) => {

    //     if(taskObj.id === deleteID) {
    //         allTasks.splice(i, 1)
    //     }

    //     // Después de eliminar actualizar localStore con la nueva versión del array.
    //     updateTaskToLocalStorage()
    // })
    // console.log (allTasks) 

    
    updateTaskToLocalStorage()

    printTasks()
}

//* Crear el HTML de las tareas (articles)
const createTaskHTML = (task) => {

    // Crear en cada vuelta el article de cada tarea.
    const taskHTML = document.createElement('article')
    console.log (taskHTML)

    // Añadirle al article sus clases.
    taskHTML.className = 'article.task'
    // console.log (taskHTML.className)
    console.log (taskHTML)
    
    // Añadir el contenido HTML
    taskHTML.innerHTML = `
    <article class="task">
        <p><i class="bi bi-caret-right"></i>
        ${task.task}</p>
        <i class="bi bi-trash deleteIcon"></i>              
    </article>       
    ` 
    // Seleccionar el icono de eliminar que crea en cada vuelta del bucle.
    const deleteTaskIcon = taskHTML.querySelector('.deleteIcon')

    // Escuchar el icono de eliminar en cada vuelta del bucle, si se hace click sobre él, se lanza una función encargada de eliminar la tarea.
    deleteTaskIcon.addEventListener('click', () => {deleteTask(task.id)})
    console.log (task.id)     

    return taskHTML
}

//* Poner de color la tarea según la prioridad.     
const colorTask = (taskpriority, taskHTML)=> {    
    // Guardar en una variable el valor escogido en el select (al terminar eliminar).
    // const priorityValue = formNewTask.priority.value
    // console.log (priorityValue)

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

    // * Se crean los articles (tareas) con el método .forEach (alternativa bucle).
    allTasks.forEach((task) => {

        // Crear las tareas
        const taskHTML = createTaskHTML(task)

        // Añade en cada vuelta al section cada article creado
        listTask.append(taskHTML)
            
        // Pintar la tarea en función de la urgencia.
        colorTask(task.priority, taskHTML)
    })
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
     // Crear un objeto idéntico al de la base de datos con id, title y priority.
    const newTask = {
        id: nanoid(),
        task: pnameTask, 
        priority: ppriorityValue,
    }
    
    // Hacer un push con una nueva referencia. 
    allTasks = [...allTasks, newTask]
    console.log (allTasks)

    // Método alternativo: meter la nueva tarea en el array ("en la base de datos"), mutando el array original.
    // allTasks.push(newTask)
    
    updateTaskToLocalStorage()   
   
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

//* Escuchar el evento submit y llamar a la función handleSubmit cuando se le de a guardar.
formNewTask.addEventListener('submit', handleSubmit)

getTasksFromLocalStorage()
printTasks()


//* Escuchar cuando se cambia de valor el select (ya está seleccionado)
// Seleccionar el select de filtrado de tareas.
const selectFilter = document.getElementById('Frecuency')
console.log (selectFilter)

const handleFilterSelect = () => {

    const selectedValue = selectFilter.value 
    console.log (selectedValue)
        
    // //* Generar nuevos arrays, filtrando por prioridad.
    const arrayUrgentTasks = allTasks.filter((task) => {  return task.priority === 'urgent' })
    console.log (arrayUrgentTasks)

    printTasks()

    const arrayNomalTasks = allTasks.filter(task => { return task.priority === 'normal'})
    console.log (arrayNomalTasks)

    const arrayIntermediateTasks = allTasks.filter(task => {return task.priority === 'intermediate'})
    console.log (arrayIntermediateTasks)

}

selectFilter.addEventListener('change', handleFilterSelect)



// selectFilter.addEventListener('change', (event) => {

//     const selectedValue = selectFilter.value 
//     console.log (selectedValue)
        
//     //* Generar nuevos arrays, filtrando por prioridad.
//     const arrayUrgentTasks = allTasks.filter((task) => {  return task.priority === 'urgent' })
//     console.log (arrayUrgentTasks)

//     const arrayNomalTasks = allTasks.filter(task => { return task.priority === 'normal'})
//     console.log (arrayNomalTasks)

//     const arrayIntermediateTasks = allTasks.filter(task => {return task.priority === 'intermediate'})
//     console.log (arrayIntermediateTasks)




//       if (selectedValue === 'allTasks'){
//         console.log ('jopetis') 
                
//         //* Borramos el section en el que se incluyen todas las tareas. Lo ponemos en blanco.
//         listTask.innerHTML = ''    
//         console.log (listTask)


//          // * Se crean los articles (tareas) con el método .forEach (alternativa bucle).
//          allTasks.forEach((task) => {

//             // Crear las tareas
//             const taskHTML = createTaskHTML(task)

//             // Añade en cada vuelta al section cada article creado
//             listTask.append(taskHTML)
                
//             // Pintar la tarea en función de la urgencia.
//             colorTask(task.priority, taskHTML)
//         })    

//       }else if (selectedValue === 'urgent') {
//         console.log ('urgente')    
//       }else if (selectedValue === 'intermediate') {
//         console.log ('intermediate')
//       }else if (selectedValue === 'normal') {
//         console.log ('normal')
//       }

//   // * Se crean los articles (tareas) en cada vuelta del bucle. 
//     for (let task of allTasks) {
        
//         const taskHTML = createTaskHTML(task)
//         listTask.append(taskHTML)
        
//         colorTask(task.priority, taskHTML)

//         // // Seleccionar el icono de eliminar que crea en cada vuelta del bucle.
//         // const deleteTaskIcon = taskHTML.querySelector('.deleteIcon')

//         // // Escuchar el icono de eliminar en cada vuelta del bucle, si se hace click sobre él, se lanza una función encargada de eliminar la tarea.
//         // deleteTaskIcon.addEventListener('click', () => {deleteTask(task.id)})
//         // console.log (task.id)             
//     } 


// })
































// filter 1:20:43

// const allTasksFilter = allTasks.filter((taskObj) => { return taskObj.priority === 'normal' })
// console.log (allTasksFilter)





// Crear local storage: 

    // Nueva función

// Crea un nueva referencia cuando añade nuevo libro? 

// recorrer todas las tareas del array y una a una comprobar primero si son de la urgencia que está seleccionada en el desplegable (o sea, si en el desplegable poner "Ver todas" las muestro todas, pero si pone "Urgente" solo mostraré las taresas que son urgentes, y lo mismo con intermedia y normal.

// y después de esa comprobación, miramos si el input de búsqueda tiene algún texto. Si lo tiene, tenemos que comprobar que el nombre de la tarea actual que estamos procesando contiene dentro ese texto:



//* Crear base de datos.
// const allTasks = [
//     {
//         id: nanoid(), 
//         task: 'Comprar leche',
//         priority: 'normal', 
//     },
//     {
//         id: nanoid(), 
//         task: 'Llamar al médico para pedir una cita',
//         priority: 'intermediate', 
//     },
//     {
//         id: nanoid(), 
//         task: 'Terminar el informe para el trabajo',
//         priority: 'urgent', 
//     },
// ]
// console.log (allTasks)























// Crear la función print para que la ejecute pasandole un array en particular. 
// Sustituir los bucles por el método eachfor.
// Repasar que vi ayer y como se puede aplicar.
// # Ejemplo con la librería
    // JAVASCRIPT-DIA 15-Parte 2: minuto 42. 
    // 06-DOM-JAVASCRIPT\41-app-library-localStorage
    // Vuelve a explicacion en 1:00:00 horas.
    // 2:00:00













