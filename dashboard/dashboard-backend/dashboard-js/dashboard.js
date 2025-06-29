// navbar

function navbar() {
  const navbarList = document.getElementById("navbar-list");
  const checkbox = document.getElementById("menu");
  const menu = document.querySelector(".menu-list");

  menu.addEventListener("click", () => {
    if (checkbox.checked) {
      navbarList.style.left = "-300px";
    } else {
      navbarList.style.left = "20px";
    }
  });
}

navbar();
