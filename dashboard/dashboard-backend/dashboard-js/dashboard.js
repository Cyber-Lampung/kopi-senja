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

// visibility balance config

function visibility() {
  // visibility balance incoming balance

  const danaIncoming = document.getElementById("danaIncoming");
  const checkI = document.getElementById("incoming");

  checkI.addEventListener("click", () => {
    if (checkI.checked) {
      danaIncoming.textContent = "***********";
    } else {
      danaIncoming.textContent = "200.000";
    }
  });

  const danaout = document.getElementById("danaout");
  const checkO = document.getElementById("checkO");

  checkO.addEventListener("click", () => {
    if (checkO.checked) {
      danaout.textContent = "***********";
    } else {
      danaout.textContent = "200.000";
    }
  });

  const danaJ = document.getElementById("danaJ");
  const checkj = document.getElementById("checkJ");

  checkj.addEventListener("click", () => {
    if (checkj.checked) {
      danaJ.textContent = "***********";
    } else {
      danaJ.textContent = "200.000";
    }
  });
}

visibility();

function gantiTampilan() {
  // ganti tampilan

  const person = document.getElementById("person");
  const setting = document.getElementById("setting");
  const Keamanan = document.getElementById("person");

  try {
    console.log(person, setting);
  } catch (err) {
    console.log("message : ", err);
  }
}

gantiTampilan();
