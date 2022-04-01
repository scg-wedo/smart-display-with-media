const form = document.querySelector('#create-account-form');
const nameInput = document.querySelector('#contact-name');
const surnameInput = document.querySelector('#contact-surname');
const phoneInput = document.querySelector('#contact-phone');
const emailInput = document.querySelector('#contact-email');
// var isValid = true;
// form.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     validateForm()

// });
function validateForm(isSubmit){
    this.isValid = true;
    
    //NAME
    if(nameInput.value.trim() == ''){
        setError(nameInput, 'name cannot be empty');
    }else if(nameInput.value.trim().length <5 || nameInput.value.trim().length >50){
        setError(nameInput, 'Name must be with in 5 and 50');
    }else{
        setSuccess(nameInput);
    }
   
     //SURNAME
     if(surnameInput.value.trim() == ''){
        setError(surnameInput, 'surname cannot be empty');
     }else if(surnameInput.value.trim().length <5 || surnameInput.value.trim().length >15){
        setError(surnameInput, 'surName must be with in 5 and 15');
    }else{
        setSuccess(surnameInput);
    }
     //PHONE
     if(phoneInput.value.trim() == ''){
        setError(phoneInput, 'Phone Number cannot be empty');
     }else if(phoneInput.value.trim().length < 10){
         setError (phoneInput, 'phone number should be 10digits')
     }
     else{
        setSuccess(phoneInput);
    }
    //EMAIL
    if(emailInput.value.trim() == ''){
        setError(emailInput, 'provide email address');
    }else if (isEmailValid(emailInput.value)){
        setSuccess(emailInput);

    }else{
        setError(emailInput, 'Provide valid email address');
    }
    if(isSubmit && this.isValid){
        window.location.href = "./submit.html";
    }
        
}
function test(){
    if(nameInput.value.trim() == ''){
        setError(nameInput, 'name cannot be empty');
    }else if(nameInput.value.trim().length <5 || nameInput.value.trim().length >50){
        setError(nameInput, 'Name must be with in 5 and 50');
    }else{
        setSuccess(nameInput);
    }
}

function setError(element, errorMessage){
    this.isValid = false;
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('span.error-style');
    paragraph.textContent =  errorMessage;

}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);

}

// js to format phone number
function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7 ){
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6,
    )}-${phoneNumber.slice(6,9)}`;

   

}

function phonenumberFormatter(){
    const inputField = document.getElementById('contact-phone');
    const formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;
}