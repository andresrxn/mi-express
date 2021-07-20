function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.getElementById("nav");
    const navLinks = document.querySelectorAll(".nav-links .nav-links-li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.15}s`;
            }

        });

        //Burger Animation
        burger.classList.toggle("toggle");
    });


}

navSlide();