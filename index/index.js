function navbar() {
  const menuicon = document.querySelector(".menu");
  const inputCheckbox = document.getElementById("menu");
  const navbar = document.querySelector(".navbar");
  const closeI = document.getElementById("close");
  const close = document.querySelector(".close");

  menuicon.addEventListener("click", () => {
    if (inputCheckbox.checked) {
      navbar.style.left = "-10px";
      menuicon.style.display = "none";
      close.style.display = "block";
    }
  });

  closeI.addEventListener("click", () => {
    if (closeI.checked) {
      navbar.style.left = "-300px";
      close.style.display = "none";
      menuicon.style.display = "block";
    }
  });
}

navbar();

function search() {
  // element htmla

  const formsearch = document.getElementById("search-form");

  formsearch.addEventListener("submit", (r) => {
    r.preventDefault();

    // ambil data value dari judul items

    const card = document.querySelectorAll(".card");
    const valueJudul = document.querySelectorAll(".card span");
    const inputSearch = document.getElementById("search").value.toLowerCase();

    if (inputSearch == "") {
      console.log("not value");
    }

    valueJudul.forEach((items) => {
      if (items.innerHTML.toLowerCase().includes(inputSearch.toLowerCase())) {
        card.style.display = "none";
      } else {
        card.style.display = "none";
      }
    });
  });
}

search();
