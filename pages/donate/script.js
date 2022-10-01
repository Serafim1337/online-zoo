const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", burgerMenuHandler);

function burgerMenuHandler() {
  burgerMenu.classList.toggle("cross");
}
