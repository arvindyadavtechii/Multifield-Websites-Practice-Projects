const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon =menuBtn.querySelector("i");

menuBtn.addEventListener('click', (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line": "ri-menu-line");
});

navLinks.addEventListener('click', (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

scrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});

scrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
});

scrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
   delay: 1000,
});

scrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
   delay: 1500,
});

scrollReveal().reveal(".header__btn", {
    ...scrollRevealOption,
   delay: 2000,
});

scrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
   origin: "left",
});

scrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 500
});

scrollReveal().reveal(".about__content p", {
    ...scrollRevealOption,
    delay: 1000
});

scrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 1500
});

scrollReveal().reveal(".service__card", {
    ...scrollRevealOption,
    duration: 1000,
    interval: 500,
});

scrollReveal().reveal(".facility__content .section__header", {
    ...scrollRevealOption,
});

scrollReveal().reveal(".facility__content p", {
    ...scrollRevealOption,
    delay: 500
});

scrollReveal().reveal(".mentor__card", {
    ...scrollRevealOption,
    interval: 500,
});

scrollReveal().reveal(".banner__content h2", {
    ...scrollRevealOption,
});

scrollReveal().reveal(".banner__content p", {
    ...scrollRevealOption,
    delay: 500,
});



