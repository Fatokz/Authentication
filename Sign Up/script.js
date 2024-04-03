let username = document.getElementById("username1");
let email = document.getElementById("email");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let checker = document.getElementById("checkbox");
let eye = document.getElementById("eye");
let eyes = document.getElementById("eyes");
let table = document.getElementById("table");
let sub = document.getElementById("submit");

// sub.setAttribute("disabled", true);
table.innerHTML = ''
let datas = [] && JSON.parse(localStorage.getItem("userdetails"))

function signUp() {
    if (username.value == '' || email.value == '' || password1.value == '' || password2.value == '') {
        alert('All fields are mandatory')
    } else if (password1.value !== password2.value) {
        alert('Password does not match')
    } else if (password1.value.length < 8 && password2.value.length < 8) {
        alert('Your passwork is less than 8')
    }
    else if (checker.checked !== true) {
        alert('Please agree to terms and conditions')
    }
    else {
        let UserDataObj = {
            username: username.value,
            email: email.value,
            password: password2.value,
            terms: checker.checked
        }
        // sub.removeAttribute("disabled");

        const existuser = datas.find(user => user.email == email.value);
        console.log(existuser);

        if (existuser) {
            alert("E-mail already exist")
        } else {
            datas.push(UserDataObj)
            localStorage.setItem("userdetails", JSON.stringify(datas))
            alert(`Signup successful.  ${username.value}  Please login.`)
            console.log(datas);
        }

        // datas.push(UserDataObj)
        // alert(`sign up successful ${username.value}`)
        // console.log(datas);



        displayTable()



        username.value = ''
        email.value = ''
        password1.value = ''
        password2.value = ''
        checker.checked = false
    }
}

eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
function show() {
    if (password1.type == 'password' || eye.innerHTML == '<i class="fa-solid fa-eye-slash"></i>') {
        password1.type = 'text'
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>'
    } else {
        password1.type = 'password'
        eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    }
}

eyes.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
function shows() {
    if (password2.type == 'password' || eyes.innerHTML == '<i class="fa-solid fa-eye-slash"></i>') {
        password2.type = 'text'
        eyes.innerHTML = '<i class="fa-solid fa-eye"></i>'
    } else {
        password2.type = 'password'
        eyes.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    }
}

let displayTable = () => {
    table.innerHTML = ''
    displayTable.innerHTML = ''
    datas.forEach((data) => {
        table.innerHTML +=
            `
        <tr>
        <td> ${data.username}</td>
        <td> ${data.email}</td>
        <td> ${data.password}</td>
        <td> ${data.terms}</td>
        </tr>
        `
    });
}