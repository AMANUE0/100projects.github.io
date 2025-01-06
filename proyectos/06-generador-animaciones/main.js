
let menuButton = document.getElementById("menu-bar");
let closeMenuButton = document.getElementById("close-menu");
let sidebar = document.getElementById("sidebar");

menuButton.addEventListener("click", () => {
    sidebar.style.display = "block";
    menuButton.style.display = "none";
});

closeMenuButton.addEventListener("click", () => {
    sidebar.style.display = "none";
    menuButton.style.display = "block";
});

let elementEdit = document.getElementsByClassName("subjet-animation")[0];

let borderInput = document.getElementById("border-input");
let borderRadius = document.getElementById("border-radius-input");
let background = document.getElementById("background-color-input");
let width = document.getElementById("width-input");
let heigth = document.getElementById("heigth-input");

let testButton = document.getElementById("test");
testButton.addEventListener("click", () => {
    elementEdit.style.border =  borderInput.value;
    elementEdit.style.borderRadius =  borderRadius.value;
    elementEdit.style.background =  background.value;
    elementEdit.style.width =  width.value;
    elementEdit.style.height =  heigth.value;
});

let bounce = document.getElementsByClassName("animation-bounce")[0];
let flash = document.getElementsByClassName("animation-flash")[0];
let pulse = document.getElementsByClassName("animation-pulse")[0];

bounce.addEventListener("click", () => {
    elementEdit.classList.remove("bounce", "flash", "pulse");
    elementEdit.classList.add("bounce");
});
flash.addEventListener("click", () => {
    elementEdit.classList.remove("bounce", "flash", "pulse");
    elementEdit.classList.add("flash");
});
pulse.addEventListener("click", () => {
    elementEdit.classList.remove("bounce", "flash", "pulse");
    elementEdit.classList.add("pulse");
});