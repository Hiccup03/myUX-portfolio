const menuToggle = document.querySelector(".menu-toggle");

const primaryNav = document.querySelector("#primary-nav");

console.log("menu button:", menuToggle);
console.log("navigation: ", primaryNav);

menuToggle.addEventListener("click", function () {
    const isOpen = primaryNav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", isOpen);
});
