let formName = document.getElementById('form-name')
let formEmail = document.getElementById('form-email')
let formNumber = document.getElementById('form-number')
let formBirthDate = document.getElementById('form-birth')
let form = document.getElementById('registration-form')
let errorContainer = document.getElementById('form-error__container')
let errorElement = document.getElementById('form-error')
let errorHeader = document.getElementById('form-error_header-text')
let submitButton = document.getElementById('registration-submit-btn')
let nextButton = document.getElementById('next-btn')
let formNameCheck = document.getElementById('form-name-icon')
let formEmailCheck = document.getElementById('form-email-icon')
let formNumberCheck = document.getElementById('form-number-icon')

form.addEventListener('submit', (e) => {  

     // Form name validations
     if (formName.value === '' || formName.value == null){
        message.push('Name is required')
        messageTitle.push('Invalid Name')
        formNameCheck.style.display = 'none'
        formName.style.backgroundColor = 'rgba(255, 239, 239, 1)'
        formName.style.color = '#DC3545'
        checkMessages()
    } else if (formName.value.length <  2){
        message.push('Name must be 2 characters')
        messageTitle.push('Invalid Name')
        formNameCheck.style.display = 'none'
        formNameCheck.style.display = 'none'
        formName.style.backgroundColor = 'rgba(255, 239, 239, 1)'
        formName.style.color = '#DC3545'
        checkMessages()
    } else {
        formNameCheck.style.display = 'inline'
        formName.style.backgroundColor = '#FFF'
        formName.style.color = '#212529'
    }

    // Form email validations
    if (formEmail.value === '' || formEmail.value.split('@')[1] !== 'redberry.com') {
        messageTitle.push('Invalid Email')
        message.push('Please enter valid email address')
        formEmailCheck.style.display = 'none'
        formEmail.style.backgroundColor = 'rgba(255, 239, 239, 1)'
        formEmail.style.color = '#DC3545'
        checkMessages()
    } else {
        formEmailCheck.style.display = 'inline'
        formEmail.style.backgroundColor = '#FFF'
        formEmail.style.color = '#212529'
    }


    // Phone number validations
    if (formNumber.value.length != 9) {
        messageTitle.push('Invalid Phone Number')
        message.push('Please enter valid Phone Number')
        formNumberCheck.style.display = 'none'
        formNumber.style.backgroundColor = 'rgba(255, 239, 239, 1)'
        formNumber.style.color = '#DC3545'
        checkMessages()
    } else {
        formNumberCheck.style.display = 'inline'
        formNumber.style.backgroundColor = '#FFF'
        formNumber.style.color = '#212529'
    }

    if (formBirthDate.value ==  '') {
        messageTitle.push('Invalid Birth Date')
        message.push('Please enter valid birth date')
        checkMessages()
    }

        e.preventDefault
})

closeError = () => {
    errorContainer.style.display = "none"
    
}

let message = []
let messageTitle = []



secondSteps = () => {


}


let checkMessages = () => {
    console.log(message)
    if (message) {
        errorElement.innerText = message[0]
        errorHeader.innerText = messageTitle[0]    
        errorContainer.style.display = "flex"
    } else {
        submitButton.style.display = "flex";
        nextButton.style.display = "none";
    }
}