const hamburger = document.getElementById("menuToggle");
const nav = document.querySelector("nav ul");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
    });
});
