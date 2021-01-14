const openNav =  document.querySelector(".btn__open");
const closeNav = document.querySelector(".btn__close");
const menu = document.querySelector(".nav__list");


const menuLeft = menu.getBoundingClientRect().left;

openNav.addEventListener("click", () => {
    if(menuLeft < 0) {
        menu.classList.add("show")
    }
})

closeNav.addEventListener("click", () => {
    if(menuLeft < 0) {
        menu.classList.remove("show")
    }
})