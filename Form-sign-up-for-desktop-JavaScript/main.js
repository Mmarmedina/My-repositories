//* Seleccionar el formulario
const form = document.querySelector('.sign-up-form')
console.log(form)

//* Crear la función que hace todo lo que pasa tras hacer click en el formulario
const handleSubmit = (event) => {

    // Evitar el comportamiento por defecto
    event.preventDefault()

    // Guardar en una variable el valor de los distintos campos del formulario. Se añade método .trim al final para quitar posibles espacios en blanco
    const nameValue = form.name.value.trim()
    const emailValue = form.email.value.trim()
    const countryValue = form.country.value
    const dateValue = form.date.valueAsDate
    const passValue = form.password.value.trim()
    const termsValue = form.conditions.checked

    console.log (nameValue, emailValue, countryValue,dateValue,passValue,termsValue)

    //? Revisión nombre.
    if (nameValue === ''|| isNaN (nameValue) === false) {
     
        // Borde rojo al input (poner)
        form.name.classList.add('is-invalid')
        console.log (form.name.className)
     
        // Sale el mensaje de error debajo del input. 
        // Seleccionar el span: que está oculto por la clase .message-error-hidden.
        const spanName = document.querySelector('.form-input-name span')
        console.log(spanName)

        spanName.className = 'message-error'
        spanName.innerHTML = '🧐 Write your name'
        console.log (spanName.className)
        
        return

    }

    // Borde rojo (quitar). Se tiene que quedar sin clases, para que se quite el borde rojo.
    form.name.classList.remove('is-invalid')
    console.log(form.name.className)

    // Quitar el mensaje de error
    const spanName = document.querySelector('.form-input-name span')
    spanName.className = 'message-error-hidden'
    console.log (spanName.className)

    //? Revisión mail
    // Variable para guardar la expresión regular
    const checkMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    // Comprueba que el mail que mete el usuario (almacenado en la variable emailValue) no "coincide" con la expresión regular (y le dará error).
    const spanEmail = document.querySelector('.form-input-email span')
    console.log (spanEmail)
    
    if (emailValue === '' || !checkMail.test(emailValue)) {

        console.log ('hola')
       
        // Borde rojo al input (poner) cuando da error.
        form.email.classList.add('is-invalid')
        console.log(form.email.className)

        spanEmail.className = 'message-error'
        spanEmail.innerHTML = '📩 Check your email'
        console.log (spanEmail.className)
        
        return
    }

    form.email.classList.remove ('is-invalid')
    console.log (form.email.className)

    spanEmail.className = 'message-error-hidden'
    console.log (spanEmail.className)

    //? Revisión del select
    const selectElement = document.querySelector('[name="country"]')
    console.log (selectElement)

    const spanCountry = document.querySelector('.form-input-select span')
    console.log(spanCountry)

    if (selectElement.selectedIndex === 0) {

        form.country.className = 'is-invalid'
        console.log (form.country.className)
        
        spanCountry.className = 'message-error'
        spanCountry.innerHTML = '⬆️ Select one option'

        console.log(spanCountry.className)

        return
    }

    form.country.classList.remove('is-invalid')
    console.log (form.country.className)

    spanCountry.className = 'message-error-hidden'
    console.log (spanCountry.className)

    //? Revisión fecha
    const spanBirthday = document.querySelector('.form-input-date span')
    console.log (spanBirthday)
    
    if (dateValue === null || dateValue === '') {

        form.date.className = 'is-invalid'
        console.log (form.date.className)

        spanBirthday.className = 'message-error'
        spanBirthday.innerHTML = '🍰 What is your date of birth?'

        console.log (spanBirthday.className)
        
        return
    }

    form.date.classList.remove('is-invalid')
    console.log (form.date.className)

    spanBirthday.className = 'message-error-hidden'

     //? Revisión contraseña    
    const spanPass = document.querySelector('.form-input-password span')
    console.log (spanPass)
    
    if (passValue === '') {

        form.password.className = 'is-invalid'
        console.log (form.password.className)
   
        spanPass.className = 'message-error'
        spanPass.innerHTML = '🔑 Create your password'
        
        return
    }

    form.password.classList.remove('is-invalid')
    spanPass.className = 'message-error-hidden'

    //? Revisión términos y condiciones
    const divTerms = document.querySelector('.form-input-checkbox')
    console.log(divTerms)

    if (termsValue === false) {
            
        divTerms.className = 'form-input-checkbox is-invalid-checkbox'
        console.log (divTerms)
        
        // spanTerms.className = 'is-invalid-checkbox'        
        return
    }

    divTerms.className = 'form-input-checkbox'
    console.log (divTerms.className)    

    console.log ('Información enviada-->', nameValue, emailValue, countryValue,dateValue,passValue,termsValue)
}

//* Escuchar el evento submit, y ejecutar la función después de dar click al botón de enviar. 
form.addEventListener('submit', (event) => handleSubmit(event))

//* Que salga el formulario al hacer click en sign up
// Seleccionar el enlace
const signUpLink = document.querySelector('#sign-up-link')
console.log(signUpLink)

const backdrop = document.querySelector('.backdrop')
console.log (backdrop)

// Escuchar el click al pinchar "sign-up"
signUpLink.addEventListener('click', () => {    
    const form = document.querySelector('.sign-up-form')
    form.classList.add('sign-up-form-open')
    console.log (form)

    backdrop.classList.toggle('backdrop-open')
    console.log(backdrop.className)    
})
        
//*Cerrar el formulario
// Seleccionar el icono de cerrar
const closeForm = document.querySelector('i')
console.log (closeForm)

// Escuchar el icono de cerrar
closeForm.addEventListener('click', () =>{
    const form = document.querySelector('.sign-up-form')
    form.classList.remove ('sign-up-form-open')
    backdrop.classList.remove('backdrop-open')
})






