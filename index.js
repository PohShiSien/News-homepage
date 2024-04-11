const button = document.getElementById("menu-button");
const navBar = document.getElementById("navBar-content");
const body = document.getElementById("body");

function toggleNavbar() {
    body.classList.toggle("hidden");
    navBar.classList.toggle("hidden");
    let img = button.querySelector("img");
    if (img.getAttribute("src") === "images/icon-menu.svg") {
        img.src = "images/icon-menu-close.svg"
    } else {
        img.src = "images/icon-menu.svg"
    };
}

button.addEventListener("click", toggleNavbar);
