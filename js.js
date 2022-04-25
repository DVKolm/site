const form = document.querySelector('.js-form'),
    inputsData = document.querySelectorAll('.js-input'),
    username = document.querySelector('.js-input-username'),
    email = document.querySelector('.js-input-email'),
    password = document.querySelector('.js-input-password');

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

    form.onsubmit = function (e) {
        let emailVal = email.value,
            passwordVal = password.value,
            usernameVal = username.value,
            emptyInputs = Array.from(inputsData)
            .filter(input => input.value === '');
    
        inputsData.forEach(function (input) {
            if (input.value === '') {
                input.classList.add('error');
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
            inputEmail.classList.add('error');
            return false;
        } else {
            inputEmail.classList.remove('error');
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
        e.preventDefault();
    }

const data = {
    lastName: lastName.value,
    firstName: firstName.value,
    patronymic: patronymic.value,
    username: username.value,
    email: email.value,
    password: password.value,
};

// function Box2(){
//     example = prompt("Input your lastname: ", "Guest");
//     if (example === username.value){
//         console.log(data);
//     }
// }

// function popBox(){
//     x = confirm;
//     if (x === true){
//         Box2();
//     }
//     else {
//         document.write('Try again');
//     }
// }


