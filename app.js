var pages = ["Home", "About", "Interact"]

function navMenu(){
    var nav = document.createElement("nav")
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);

    document.body.appendChild(nav);

    function createButton(pg){
        var button = document.createElement("button")
        button.innerHTML = pg
        button.addEventListener("click", function () {
            navigate(pg);
        })
        nav.appendChild(button);
    }
}

function createWrapper(){
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg){
    if(pg === "Home"){
        homePage()
    } else if(pg === "About"){
        aboutPage()
    } else if(pg === "Interact"){
        interactPage()
    }
}

function homePage(){
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Home";
    wrapper.appendChild(header);
}

function aboutPage(){
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "About";
    var about = document.createElement("h3");
    about.style.color = "Red"
    about.innerHTML = "Isaiah Sparks"
    wrapper.appendChild(header);
    wrapper.appendChild(about);
}

function interactPage(){
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Interact";

    var number = document.createElement("h2")
    number.style.color = "blue"
    var numberchange = 0
    number.innerHTML = "Your number is: " + numberchange

    var button = document.createElement("button")
    button.innerHTML = "Add 1"
    button.addEventListener("click", function () {
        numberchange = numberchange + 1;
        number.innerHTML = "Your number is: " + numberchange;
    })

    wrapper.appendChild(header);
    wrapper.appendChild(number);
    wrapper.appendChild(button);
}


navMenu();
createWrapper();
navigate("Home");