function gantiTampilan() {
  // ganti tampilan

  const person = document.querySelector(".person");
  const setting = document.querySelector(".setting");
  const keamanan = document.querySelector(".log");

  const valuePerson = document.getElementById("person");
  const valueSetting = document.getElementById("setting");
  const valueKeamanan = document.getElementById("keamanandanTentang");

  try {
    person.addEventListener("click", () => {
      valuePerson.style.display = "block";
      valueSetting.style.display = "none";
      valueKeamanan.style.display = "none";
    });

    setting.addEventListener("click", () => {
      valuePerson.style.display = "none";
      valueSetting.style.display = "block";
      valueKeamanan.style.display = "none";
    });

    keamanan.addEventListener("click", () => {
      valuePerson.style.display = "none";
      valueSetting.style.display = "none";
      valueKeamanan.style.display = "block";
    });
  } catch (err) {
    console.log("message : ", err);
  }
}

gantiTampilan();
