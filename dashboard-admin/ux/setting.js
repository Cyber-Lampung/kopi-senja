function navbarIcon() {
  // ambil data icon dari setiap element

  const personI = document.querySelector(".Profile");
  const gearI = document.querySelector(".Gear");
  const shieldI = document.querySelector(".auth");
  const logoutI = document.querySelector(".logout");

  //   ambil data element dari setiap div

  const personE = document.querySelector(".container-person");
  const gearE = document.querySelector(".setting-box");
  const shieldE = document.querySelector(".shield-box");
  const logoutE = document.querySelector(".logout-box");

  // logic for visibility

  personI.addEventListener("click", () => {
    if (personI.click) {
      personE.style.display = "block";
      gearE.style.display = "none";
      shieldE.style.display = "none";
      logoutE.style.display = "none";
    }
  });

  gearI.addEventListener("click", () => {
    if (gearI.click) {
      personE.style.display = "none";
      gearE.style.display = "block";
      shieldE.style.display = "none";
      logoutE.style.display = "none";
    }
  });

  shieldI.addEventListener("click", () => {
    if (shieldI.click) {
      personE.style.display = "none";
      gearE.style.display = "none";
      shieldE.style.display = "block";
      logoutE.style.display = "none";
    }
  });

  logoutI.addEventListener("click", () => {
    if (logoutI.click) {
      personE.style.display = "none";
      gearE.style.display = "none";
      shieldE.style.display = "none";
      logoutE.style.display = "block";
    }
  });
}

navbarIcon();
