const form = document.querySelector('.js-form'),
    inputsData = document.querySelectorAll('.js-input'),
    username = document.querySelector('.js-input-username'),
    email = document.querySelector('.js-input-email'),
    password = document.querySelector('.js-input-password'),
    button = document.querySelector('.js-button');

function validateEmail(email) {
    let something = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return something.test(String(email).toLowerCase());
}

function validatePassword(password){
    if (password.length < 8){
        return false;
    }
    return true;
}

function validateUsername(username){
    if(username.length < 7){
        return false;
    }
    return true;
}

function validate(){
    let emailVal = email.value,
        passwordVal = password.value,
        usernameVal = username.value,
        emptyInputs = Array.from(inputsData)
            .filter(input => input.value === '');

    inputsData.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            return false;
        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('inputs not filled');
        return false;
    }

    if(!validateEmail(emailVal)) {
        console.log('email not valid');
        email.classList.add('error');
        return false;
    } else {
        email.classList.remove('error');
    }

    if (!validatePassword(passwordVal) || passwordVal === ''){
        console.log('password not valid');
        password.classList.add('error');
        return false;
    } else {
        password.classList.remove('error');
    }

    if (!validateUsername(usernameVal) || usernameVal === ''){
        console.log('username not valid');
        username.classList.add('error');
        return false;
    } else {
        username.classList.remove('error');
    }
    return true;
}

function zapros(){
    something = prompt("Enter 2+2: ", "Hello");
    if (something === '4'){
        document.write("Registration successfully");
    }
}

password.oninput = function () {
    if (!validatePassword(password.value) || password.value === ''){
        console.log('password not valid');
        password.classList.add('error');
        return false;
    } else {
        password.classList.remove('error');
    }
}

form.onsubmit = function (e) {
    e.preventDefault();
    if (validate() === true){
        valueConfirm = confirm("Click OK if you have completed the form")
        if (valueConfirm){
            zapros();
            window.open('videoFile.html', 'new window', 'width = 1200, height=800');
        }
    } else {
        alert("Exception");
    }
}

button.onclick = function (){
    thisWindow = window.open('second.html','new window','width=450, height=200, left=350, top=50');
}


