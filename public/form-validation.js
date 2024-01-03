const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const username = document.getElementById('username')
const password = document.getElementById('password')
const confirm1 = document.getElementById('confirm')
const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    validate()
    if (!validate()) {
        e.preventDefault();

    }

})

function validate() {
    fullname.classList.remove('success');
    email.classList.remove('success');

    username.classList.remove('success');
    password.classList.remove('success');
    confirm1.classList.remove('success');

    let fullname_value = fullname.value.trim();
    let email_value = email.value.trim();
    let username_value = username.value.trim();
    let password_value = password.value.trim();
    let confirm1_value = confirm1.value.trim();
    let result = true;
    let password_length = password_value.length;

    if (fullname_value == '') {
        fullname.classList.add('error');
        console.log(fullname)
        result = false

    } else {
        fullname.classList.remove('error')
        fullname.classList.add('success')
        if (result === true) {
            result = true

        }
    }
    if (email_value == '') {
        email.classList.add('error')
        result = false


    } else if (!validateEmail(email_value)) {
        email.classList.add('error')
        console.log('seelan')
        result = false

    } else {
        email.classList.remove('error')
        email.classList.add('success')
        if (result === true) {
            result = true

        }
    }

    if (username_value == "") {
        username.classList.add('error')
        result = false


    } else {
        username.classList.remove('error')
        username.classList.add('success')
        if (result === true) {
            result = true

        }
    }
    if (password_value = '') {
        password.classList.add('error');
        result = false
    } else if (password_length <= 8) {
        password.classList.add('error');
        result = false
        console.log('seekab')
    } else {
        if (result === true) {
            result = true

        }
        password.classList.remove('error')
        password.classList.add('success')
    }
    if (confirm1_value == '') {
        confirm1.classList.add('error')
        result = false
        console.log("seelanb")
    } else if (!confirm1_value === password_value) {
        confirm1.classList.add('error')
        result = false
        console.log(confirm1_value)
    } else {
        if (result === true) {
            result = true

        }
        confirm1.classList.remove('error')
        confirm1.classList.add('success')
    }
    console.log(fullname_value)
    console.log(email_value)
    console.log(username_value)
    console.log(password_value)
    console.log(confirm1_value)
    return result
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};