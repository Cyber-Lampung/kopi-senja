import { product } from "../../data-product/items/api-produck/produc.js";

// const dataid = product.map((items) => {
//   const item = items.id;
//   return item;
// });

product.forEach((items) => {
  // data element html

  const img = document.querySelectorAll(".image");
  img.forEach((imageI) => {
    const dataI = imageI.dataset.id;
    if (items.id.includes(dataI)) {
      imageI.src = "../../" + items.image;
    }
  });
});

product.forEach((items) => {
  // data element html
  const jenis = document.querySelectorAll("#identity");
  jenis.forEach((dataJ) => {
    const dataK = dataJ.dataset.id;
    if (items.id.includes(dataK)) {
      dataJ.append(items.jenis);
    } else {
      console.log("no");
    }
  });
});

product.forEach((items) => {
  // data element html
  const decs = document.querySelectorAll("#decs");
  decs.forEach((dataD) => {
    const dataK = dataD.dataset.id;
    if (items.id.includes(dataK)) {
      dataD.append(items.decs);
    } else {
      console.log("no");
    }
  });
});

const back = document.querySelector(".back");

back.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = "/index/index.html";
  }, 1000);
});

// cart items

function cart() {
  const cart = document.querySelector(".shoping-cart");
  cart.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "/cart";
  });
}

cart();

function searchForm() {
  const searchForm = document.getElementById("searchForm");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const input = document.getElementById("search").value;
    const card = document.querySelectorAll(".card");
    const cardText = document.querySelectorAll(".identity-kopi p");

    cardText.forEach((items) => {
      const data = items.outerText.toLowerCase();

      const endSearch = input === data;

      if (endSearch === true) {
        card.forEach((item) => {
          let found = false;

          const dataC = item.children.item(1).innerText.toLowerCase();

          if (dataC == input.toLowerCase()) {
            found = true;
          }

          if (found) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }

          setTimeout(() => {
            item.style.display = "block";
          }, 4000);
        });
      }
    });
  });
}

searchForm();
