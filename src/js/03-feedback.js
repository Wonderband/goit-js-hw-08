import throttle from 'lodash.throttle';

const onInputHandle = function(event) {    
    try {         
        localStorage.setItem("feedback-form-state", 
        JSON.stringify({email: emailEl.value, message: textAreaEl.value}));   
    } catch(error) {
        console.error("Get state error: ", error.message);
    }
}

const loadFromStorage = function(event) {
    try {
        const dataStored = JSON.parse(localStorage.getItem("feedback-form-state")) ||
        {"email": "", "message": ""};
        emailEl.value = dataStored.email;
        textAreaEl.value = dataStored.message;
    } catch(error) {
        console.error("Get state error: ", error.message);
    }    
}

const totalReset = function(event) {
    event.preventDefault();   
    console.log(localStorage.getItem("feedback-form-state") || "Local Storage is empty! ");       
    emailEl.value = '';
    textAreaEl.value = '';
    localStorage.clear();
}

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector("input");
const textAreaEl = document.querySelector("textarea");


window.addEventListener('DOMContentLoaded', loadFromStorage);
formEl.addEventListener('input', throttle(onInputHandle, 500));
formEl.addEventListener('submit', totalReset);

