const burgerMenu = document.querySelector(".burger_menu");
const offScreenMenu = document.querySelector(".off_screen_menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active"); // Skifter burger-menuens tilstand
  offScreenMenu.classList.toggle("active"); // Skifter tilstanden på den skjulte menu
});
