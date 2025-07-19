import { getDataId } from "../../data-product/items/api-produck/produc.js";

// function for handel delete produk

function HandelDeleteDataProduk() {
  const btnHandeDeleteProduk = document.querySelectorAll("#handelDeleteProduk");
  const btnCloseShow = document.getElementById("DeleteProduk");
  const closeMenuDelete = document.querySelector(".close");

  closeMenuDelete.addEventListener("click", () => {
    btnCloseShow.style.display = "none";
  });

  btnHandeDeleteProduk.forEach((btnHandel) => {
    btnHandel.addEventListener("click", () => {
      btnCloseShow.style.display = "block";
    });
  });
}

HandelDeleteDataProduk();
