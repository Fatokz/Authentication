let details = JSON.parse(localStorage.getItem("userFound"));
let users = document.getElementById("users");
let title = document.getElementById("title");
let readFile = document.getElementById("readFile");
let textArea = document.getElementById("textArea");
let myPost = document.getElementById("myPost");
let image = document.getElementById("image");
let makes = document.getElementById("make")
let allpost = document.getElementById("allpost");
let dpost = document.getElementById("dpost");
let like = document.getElementById("like");

allpost.style.display = "none"
like.style.display = "none"

console.log(details);
let blogimage = "";

let blogPosts = JSON.parse(localStorage.getItem('myBlog')) || []

console.log(blogPosts);

let date = new Date()

if (details == undefined) {
    window.location.href = "../Login/index.html"
}
else {
    users.innerHTML = `${details.username}`
    // alert(`Welcome ${details.username}`)
}

function logOut() {
    localStorage.removeItem("userFound")
    window.location.href = "../Login/login.html"
}

readFile.addEventListener("change", function (event) {
    console.log(event.target.files);
    let file = event.target.files[0];
    console.log(file);

    let reader = new FileReader()
    reader.addEventListener("load", (event) => {
        let result = event.target.result;
        console.log(result);
        blogimage = result
        image.src = result
    });

    if (file) {
        reader.readAsDataURL(file);
    }
});

myPost.addEventListener("click", function () {
    let data = {
        user: `${details.username}`,
        topic: title.value,
        liked: false,
        comment: textArea.value,
        image: blogimage,
        date: date.toLocaleString()
    }

    blogPosts.push(data)
    console.log(blogPosts);
    localStorage.setItem("myBlog", JSON.stringify(blogPosts))
})

function make() {
    makes.style.display = "block"
    allpost.style.display = "none"
    like.style.display = "none"
}

function allPost() {
    makes.style.display = "none"
    allpost.style.display = "block"
    like.style.display = "none"
}

function liked() {
    makes.style.display = "none"
    allpost.style.display = "none"
    like.style.display = "block"
}

for (let index = 0; index < blogPosts.length; index++) {
    const blogs = blogPosts[index];
    dpost.innerHTML +=
        `<div>
     <h1>${blogs.topic}</h1>
     <img src=${blogs.image} /> 

    </div>`

}