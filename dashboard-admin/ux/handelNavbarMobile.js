const navbar = document.querySelector(".container-navbar-left");
function HandelNavbarMobile() {
  const checkClose = document.querySelector(".x");

  checkClose.addEventListener("click", () => {
    if (checkClose.click) {
      navbar.style.display = "none";
    }
  });
}

HandelNavbarMobile();

function HandelNavbarMobileMenu() {
  const list = document.querySelector(".list");

  list.addEventListener("click", () => {
    navbar.style.display = "";
  });
}

HandelNavbarMobileMenu();

function HandelNavbarAsideLeft() {
  const slideLeft = document.querySelector(".slideLeft");
  const mainContentList = document.querySelector(".mainContentList");
  const asideNavbarLeft = document.getElementById("asideNavbarLeft");

  slideLeft.addEventListener("click", () => {
    if (asideNavbarLeft.checked) {
      mainContentList.style.left = "0px";
    } else {
      mainContentList.style.left = "-70px";
    }
  });
}

HandelNavbarAsideLeft();
