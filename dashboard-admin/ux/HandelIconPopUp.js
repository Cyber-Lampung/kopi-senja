import { getDataId } from "../../data-product/items/api-produck/produc.js";
import { DeleteProduk } from "./DeleteProduk.js";

// function for handel delete produk

function HandelDeleteDataProduk() {
  const btnHandeEditProduk = document.querySelectorAll("#HandelEditProduk");
  const btnCloseShow = document.getElementById("DeleteProduk");
  const closeMenuDelete = document.querySelector(".close");

  closeMenuDelete.addEventListener("click", () => {
    btnCloseShow.style.display = "none";
  });

  btnHandeEditProduk.forEach((btnHandel) => {
    btnHandel.addEventListener("click", () => {
      btnCloseShow.style.display = "block";
    });
  });
}

HandelDeleteDataProduk();
