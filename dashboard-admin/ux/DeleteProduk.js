import { product } from "../../data-product/items/api-produck/produc.js";

// function delete produk

export function DeleteProduk() {
  // membuat ketika user mengclick icon delete maka mentriger element button

  const btnDeleteProduk = document.querySelectorAll("#handelDeleteProduk");

  btnDeleteProduk.forEach((btnDel) => {
    btnDel.addEventListener("click", () => {
      const idProduk = btnDel.attributes[1].textContent;

      const hapusProduk = prompt("Apakah kamu yakin ingin menghapus produk ? ");

      if (hapusProduk.toLocaleLowerCase() === "yes") {
        const CheckData = product.findIndex(
          (ProdukId) => ProdukId.id === idProduk
        );

        if (CheckData != -1) {
          product.slice(CheckData, 1);
          console.log("data berhasil dihapus");
        } else {
          console.log("produk tidak ditemukan");
        }
      }
    });
  });
}

DeleteProduk();
