let user = document.getElementById("user")
let password = document.getElementById("key")
let eye = document.getElementById("eye");
let userdetails = JSON.parse(localStorage.getItem("userdetails"))
let timeout = document.getElementById("timeout")

console.log(userdetails);

console.log(timeout);

let vName = false;
console.log(vName);

function login(event) {
    vName = true
    console.log(vName);
    event.preventDefault()
    console.log(user.value);
    console.log(password.value);
    let logIn = userdetails.find(userdetails => userdetails.email == user.value && userdetails.password == password.value)
    console.log(logIn);
    if (user.value == "" || password.value == "") {
        alert("Please fill out both email and password fields or sign up if you haven't already.")
        return;
    } else if (logIn) {
        vName == false ? timeout.innerHTML = "Login" : timeout.innerHTML = "Please wait ...😎"
        setTimeout(() => {
            alert(`Login successful ${logIn.username}`)
            localStorage.setItem("userFound", JSON.stringify(logIn))
            window.location.href = "../Dashboard/dashboard.html"
        }, 5000);
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