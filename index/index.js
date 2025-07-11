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
  // element html

  const searchForm = document.getElementById("searchForm");

  searchForm.addEventListener("submit", (s) => {
    s.stopPropagation();
    s.preventDefault();

    const input = document.getElementById("search").value;
    const card = document.querySelectorAll(".card");
    const cardText = document.querySelectorAll(".identity-kopi p");

    cardText.forEach((items) => {
      try {
        const data = items.outerText;

        const endSearch = input.toLowerCase() == data.toLowerCase();

        if (endSearch === true) {
          card.forEach((item) => {
            let found = false;
            const dataC = item.children.item(1).innerText.toLowerCase();

            if (dataC == input) {
              found = true;
            }

            if (found) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }

            setTimeout(() => {
              item.style.display = "block";
            }, 5000);
          });
        }
      } catch {
        console.log("err");
      }
    });
  });
}

search();
