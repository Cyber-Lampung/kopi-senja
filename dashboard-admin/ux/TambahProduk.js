import { product } from "../../data-product/items/api-produck/produc.js";

// localstorage data global dan data yang akan dibutuhkan seperti import export file
const localData = localStorage.getItem("DatabaseSimulasi");
const number = Math.random();

// localData diubah ke JSON.parse untuk menjadikannya menjadi bentuk Objek bukan JSON.stringify

let dataProduk = JSON.parse(localData);

function TambahProduk() {
  // get btn yang akan di event atau di click untuk send data

  const btnSendData = document.getElementById("UploadProduk");

  btnSendData.addEventListener("click", () => {
    // getElement data di html

    const image = document.getElementById("image").value;
    const identity = document.getElementById("identity").value;
    const hargaProduk = document.getElementById("HargaProduk").value;
    const decsProduktext = document.getElementById("decsProduktext").value;

    // validasi inputan user

    if (!image || !identity || !hargaProduk || !decsProduktext) {
      alert("data harus diisi semua");
      return;
    }

    // jika berhasil maka lanjutkan send ke data localStorage

    dataProduk.id += `data-${number}`;
    dataProduk.image += image;
    dataProduk.jenis += identity;
    dataProduk.harga += hargaProduk;
    dataProduk.decs += decsProduktext;

    console.log(dataProduk);
  });
}

TambahProduk();
