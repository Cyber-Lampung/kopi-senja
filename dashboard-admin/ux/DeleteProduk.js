import { product } from "../../data-product/items/api-produck/produc.js";

// function delete produk

function DeleteProduk() {
  // membuat ketika user mengclick icon delete maka mentriger element button

  const btnHandeDeleteProduk = document.querySelectorAll("#handelDeleteProduk");
  const mainContentDeleteProduk = document.querySelector(".mainContentDelete");

  btnHandeDeleteProduk.forEach((itemDelete) => {
    // memdapatkan item dari setiap element

    itemDelete.addEventListener("click", () => {
      console.log(mainContentDeleteProduk);
    });
  });
}

DeleteProduk();
