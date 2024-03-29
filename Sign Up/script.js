let pass;

function show() {
    if (pass == 1) {
        document.getElementById("password").type="password"
        document.getElementById("open").span =`${'<i class="fa-solid fa-eye-slash"></i>'}`
        pass == 0;
    }
    else{
        document.getElementById("password").type="text"
        document.getElementById("hide").span =`${'<i class="fa-solid fa-eye"></i>'}`
        pass == 1;

    }
}