
let details = JSON.parse(localStorage.getItem("userFound"));
console.log(details);

if (details == undefined){
    window.location.href ="index.html"
}
else {
    alert(`Welcome ${details.username}`)
}

function logOut() {
    localStorage.removeItem("userFound")
    window.location.href ="index.html"
}