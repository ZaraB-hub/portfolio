


window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector(".nav__right");
    const sections = Array.from(document.getElementsByClassName('scroll'));

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.8) {
                section.classList.add('visible');
            }
        });
    });


    const buttonMenu = document.querySelector(".hambruger__menu");
    buttonMenu.addEventListener("click", () => {
        const currentState = buttonMenu.getAttribute("data-state");
        if (!currentState || currentState === "closed") {
            buttonMenu.setAttribute("data-state", "opened");
            buttonMenu.setAttribute("aria-expanded", "true");
            navLinks.style.display = "flex";
            navLinks.classList.add("animate__slideInRight");
        } else {
            buttonMenu.setAttribute("data-state", "closed");
            buttonMenu.setAttribute("aria-expanded", "false");
            navLinks.classList.remove("animate__slideInRight");
            navLinks.classList.add("animate__slideOutRight");
            navLinks.addEventListener("animationend", () => {
                navLinks.style.display = "none";
                navLinks.classList.remove("animate__slideOutRight");
            }, { once: true });

        }
    });



});
