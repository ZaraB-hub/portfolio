
window.addEventListener('DOMContentLoaded', () => {


    const img=document.getElementById("loading");
    const body=document.getElementById("body");

    const menuItem = document.querySelector(".nav__menu");
    const overlay = document.querySelector(".overlay");
    const x = document.querySelector(".nav__x");
    const navLinks = document.querySelector(".nav__right");
    const main = document.querySelector("main");

    body.addEventListener("load",()=>{
        img.classList.remove("loading");
    });
    
    menuItem.addEventListener("click", () => {
        menuItem.style.display = "none";
        overlay.style.display = "block";
        x.style.display = "block";
        main.classList.add("blur");
        navLinks.style.display = "flex";
    });

    x.addEventListener("click", () => {
        menuItem.style.display = "block";
        overlay.classList.add('slide-out');
        setTimeout(() => {
            overlay.style.display = "none";
            overlay.classList.remove("slide-out")
        }, 750);

        x.style.display = "none";
        x.classList.add("hidden");
        main.classList.remove("blur");
        navLinks.style.display = "none";



    });
});
