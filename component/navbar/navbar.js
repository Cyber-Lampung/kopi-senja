const menuCheck = document.getElementById("menu");
const navbar = document.getElementById("nav");

menuCheck.addEventListener("click", () => {
  if (menuCheck.checked) {
    navbar.style.left = "0px";
    navbar.style.transition = "all 1s ease";
  } else {
    navbar.style.left = "-250px";
    navbar.style.transition = "all 1s ease";
  }
});
