import { getDataId } from "../../data-product/items/api-produck/produc.js";

// function for handel delete produk

function HandelDeleteDataProduk() {
  const btnHandeDeleteProduk = document.querySelectorAll("#handelDeleteProduk");

  btnHandeDeleteProduk.forEach((btnHandel) => {
    btnHandel.addEventListener("click", () => {
      alert(1);
    });
  });
}

HandelDeleteDataProduk();
