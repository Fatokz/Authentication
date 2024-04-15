let details = JSON.parse(localStorage.getItem("userFound"));
let users = document.getElementById("users");
let title = document.getElementById("title");
let readFile = document.getElementById("readFile");
let textArea = document.getElementById("textArea");
let myPost = document.getElementById("myPost");
let image = document.getElementById("image");
let myImage = document.getElementById("myImage");
let makes = document.getElementById("make")
let allpost = document.getElementById("allpost");
let dpost = document.getElementById("dpost");
let like = document.getElementById("like");
let dliked = document.getElementById("dliked");
let profile = document.getElementById("me")


let getInfo = JSON.parse(localStorage.getItem("userdetails"));
console.log(getInfo);

allpost.style.display = "none"
like.style.display = "none"
console.log(details);
let blogimage = "";
let Mypics = "";

function iff() {
    if(details.profile){
        myImage.src = details.profile 
    }
}

iff()


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
    window.location.href = "../Login/index.html"
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

    if (title.value == "" && textArea.value == "") {
        alert("Empty")
    }
    else {
        blogPosts.push(data)
        console.log(blogPosts);
        localStorage.setItem("myBlog", JSON.stringify(blogPosts))
        alert("blog posted successfully")

        allPost();
        dispFunc();
        likePg();
    }

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

    dispFunc();
    likePg()
}


function liked() {
    makes.style.display = "none"
    allpost.style.display = "none"
    like.style.display = "block"
    // allPost()
    likePg()
}



function dispFunc() {
    dpost.innerHTML = ""
    for (let index = 0; index < blogPosts.length; index++) {
        const blogs = blogPosts[index];
        // console.log(blogs);
        dpost.innerHTML +=
            `<div id = "blogPost">
         <h1>${blogs.user}</h1>
         <h1>${blogs.topic}</h1>
         <h1>${blogs.comment}</h1>
         <h1>${blogs.date}</h1>
         <img src=${blogs.image} /> 
         <button id="likk" onclick="dlike(${index})">${blogs.liked == false ? "like" : "unlike"}</button>
        </div>`
    }
}

dispFunc();

function dlike(i) {
    // console.log(blogPosts);

    console.log(i);
    // let likk = document.getElementById(`likk${i}`)
    // likk.innerHTML == "like" ? likk.innerHTML = "liked" : likk.innerHTML = "like";
    // blogPosts[i].liked = !blogPosts.liked,
    if (blogPosts[i].liked == false) {
        blogPosts[i].liked = true
    } else {
        blogPosts[i].liked = false
    }
    localStorage.setItem("myBlog", JSON.stringify(blogPosts))
    // console.log(likk.innerHTML);
    // console.log(event.target);

    dispFunc();
}

function likePg() {
    dliked.innerHTML = ""
    let myLike = blogPosts.filter(el => el.liked == true)
    console.log(myLike);
    myLike.forEach(el => {
        dliked.innerHTML +=
        `<div id = "fetch">
        <h1>${el.user}</h1>
         <h1>${el.topic}</h1>
         <h1>${el.comment}</h1>
         <h1>${el.date}</h1>
         <img src=${el.image} /> 
        </div>`

        
    // dispFunc()
    // allPost()
    });
}

likePg();

function meUser() {
    profile.click()
}

function fileMe(event) {
    console.log(event.target.files);
    let filer = event.target.files[0];
    console.log(filer);

    let loader = new FileReader()
    loader.addEventListener("load", (event) => {
        let results = event.target.result;
        console.log(results);
        Mypics = results
        updateUser()
        // localStorage.setItem("myBlog", JSON.stringify(blogPosts))
    });

    if (filer) {
        loader.readAsDataURL(filer);
    }
}

function updateUser() {
   let myIndex = getInfo.findIndex(el => el.email == details.email)
   console.log(getInfo[myIndex]);

   getInfo[myIndex] = {
    username: getInfo[myIndex].username,
    email:getInfo[myIndex].email,
    password: getInfo[myIndex].password,
    terms: getInfo[myIndex].terms,
    profile: Mypics
   }
   console.log(getInfo);
   localStorage.setItem("userdetails", JSON.stringify(getInfo))
}