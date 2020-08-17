const ul = document.getElementById("ul")
const burger = document.getElementById("burger")

burger.addEventListener("click", hamburger)

function hamburger(){
    ul.classList.toggle("show")
}