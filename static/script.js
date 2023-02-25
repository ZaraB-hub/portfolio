


window.addEventListener('DOMContentLoaded', () => {
    const menuItem = document.querySelector(".nav__menu");
    const overlay = document.querySelector(".overlay");
    const x = document.querySelector(".nav__x");
    const navLinks = document.querySelector(".nav__right");
    const main = document.querySelector("main");
    const sections = Array.from(document.getElementsByClassName('scroll'));

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.8) {
                section.classList.add('visible');
            }
        });
    });


    // const inputs = document.getElementsByTagName("input");
    // console.log(inputs)
    // Array.from(inputs).forEach((input) => {
    //     input.addEventListener("focus", () => {
    //         const label = document.querySelector(`label[for="${input.id}"]`);
    //         label.classList.add("small__font");
    //         console.log(label.classList);

    //     });






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
