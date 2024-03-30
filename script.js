const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', () => {
        navbar.classList.remove("open"); 
        menu.classList.remove("bx-x");
    });
});

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
};
