const body = document.querySelector("body")
const openButton = document.querySelector(".nav-icon");
const closeButton = document.querySelector(".close-icon");
const heroImage = document.querySelector(".hero-ill");
let carousel = document.querySelectorAll(".rev-c");
let navBar = document.querySelector(".container-nav");
let dot = document.querySelectorAll(".dot");



openButton.addEventListener("click", ()=> {
    heroImage.classList.add("ops");
    navBar.style.width = "315px";
    openButton.classList.add("void")
    closeButton.classList.add("ghost");
    body.classList.add("overlay");
});

closeButton.addEventListener("click", ()=> {
    navBar.style.width = "0px";
    closeButton.classList.remove("ghost");
    body.classList.remove("overlay");
    heroImage.classList.remove("ops");
    openButton.classList.remove("void")
});

let slideIndex = 0
carouselSlide();

function carouselSlide() {

    for(let i = 0; i<carousel.length; i++){
        carousel[i].style.display = "none";
    }
    
    slideIndex++;
    if(slideIndex > carousel.length) {
       slideIndex = 1;
    }

    for( i = 0; i < dot.length; i++){
       dot[i].className = dot[i].className.replace("active", "");
    }
    
    carousel[slideIndex-1].style.display = "block";
    dot[slideIndex-1].className += " active";
    setTimeout(carouselSlide, 6000);
}


