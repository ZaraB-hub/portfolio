


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

    const pictures = document.querySelectorAll(".card__picture");
    pictures.forEach((picture) => {

        picture.addEventListener("click", () => {
            console.log("zara");

            var overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            overlay.style.zIndex = "9999";

            console.log(overlay);

            var fullImg = document.createElement("img");
            // Set the src attribute of the fullImg element to the src of the clicked image
            fullImg.src = picture.querySelector("img").src;
            fullImg.style.maxWidth = "80%";
            fullImg.style.maxHeight = "80%";
            fullImg.style.position = "absolute";
            fullImg.style.top = "50%";
            fullImg.style.left = "50%";
            fullImg.style.transform = "translate(-50%, -50%)";

            console.log(fullImg);
            overlay.appendChild(fullImg);


            // Add the image to the overlay element
            document.body.appendChild(overlay);

            // Add a click event listener to the overlay element to close it when clicked
            overlay.addEventListener("click", function () {
                document.body.removeChild(overlay);
            });

        })
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
