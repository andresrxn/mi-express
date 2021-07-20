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

var controller = new ScrollMagic.Controller();


var scaleElements = document.getElementsByClassName("scale");
var mostrarArribaElements = document.getElementsByClassName("mostrarArriba");
var opacityElements = document.getElementsByClassName("opacity");
var popupElements = document.getElementsByClassName("popup");

for (var i = 0; i < scaleElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
            triggerElement: scaleElements[i], // 
            reverse: false,
            triggerHook: 0.8,
        })
        .setClassToggle(scaleElements[i], "animated")

    .addTo(controller);
}

for (var i = 0; i < mostrarArribaElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
            triggerElement: mostrarArribaElements[i], // 
            reverse: false,
            triggerHook: 0.8,
        })
        .setClassToggle(mostrarArribaElements[i], "animated")

    .addTo(controller);
}

for (var i = 0; i < opacityElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
            triggerElement: opacityElements[i], // 
            reverse: false,
            triggerHook: 0.8,
        })
        .setClassToggle(opacityElements[i], "animated")

    .addTo(controller);
}

for (var i = 0; i < popupElements.length; i++) { // create a scene for each element
    new ScrollMagic.Scene({
            triggerElement: popupElements[i], // 
            reverse: false,
            triggerHook: 0.8,
        })
        .setClassToggle(popupElements[i], "animated")

    .addTo(controller);
}

// var sceneOpacity = new ScrollMagic.Scene({
//         triggerElement: '.opacity',

//         reverse: false,
//         triggerHook: 0.8,
//     })
//     .setClassToggle('.opacity', 'animated')
//     .addTo(controller);

// var sceneShowUp = new ScrollMagic.Scene({
//         triggerElement: '.mostrarArriba',

//         reverse: false,
//         triggerHook: 0.8,
//     })
//     .setClassToggle('.mostrarArriba', 'animated')
//     .addTo(controller);

// var sceneScale = new ScrollMagic.Scene({
//         triggerElement: '.scale',

//         reverse: false,
//         triggerHook: 0.8,
//     })
//     .setClassToggle('.scale', 'animated')
//     .addTo(controller);
// var sceneScale = new ScrollMagic.Scene({
//         triggerElement: '.popup',

//         reverse: false,
//         triggerHook: 0.8,
//     })
//     .setClassToggle('.popup', 'animated')
//     .addTo(controller);