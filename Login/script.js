let user = document.getElementById("user")
let password = document.getElementById("key")
let eye = document.getElementById("eye");
let userdetails = JSON.parse(localStorage.getItem("userdetails"))
console.log(userdetails);


function login() {
    console.log(user.value);
    console.log(password.value);
    let logIn = userdetails.find(userdetails => userdetails.email == user.value && userdetails.password == password.value)
    console.log(logIn);
    if (user.value == "" || password.value == "") {
        alert("Please fill out both email and password fields or sign up if you haven't already.")
    }
    else if (logIn) {
        alert(`Login successful ${user.value}`)
    }
    else {
        alert("Account not registered")
    }
    let details = {
        email: user.value,
        password: password.value
    }
    console.log(details);

    user.value = ''
    password.value = ''
}

eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
function show() {
    if (password.type == 'password' || eye.innerHTML == '<i class="fa-solid fa-eye-slash"></i>') {
        password.type = 'text'
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>'
    } else {
        password.type = 'password'
        eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    }
}