import { product } from "../../data-product/items/api-produck/produc.js";
import { DeleteProduk } from "./DeleteProduk.js";

function GetDataClick() {
  const btnHandeDeleteProduk = document.querySelectorAll("#HandelEditProduk");

  btnHandeDeleteProduk.forEach((btn) => {
    // jika di click maka akan mentriger element berikut
    btn.addEventListener("click", () => {
      // alert(btn.name); => btn.name untuk engidentifikasi bahwa benar name ada

      const id = btn.name;

      const foundProduk = product.find((Produk) => Produk.id === id);

      if (foundProduk) {
        const dataProdukUi = `
        
        
                        <div class="ContentDelete" style="display: flex">
                            <div class="imageProdukDelete">
                            <img
                                class="imageProdukDeleteItems"
                                src="${foundProduk.image}"
                                width="160px"
                                height="150px"
                                alt=""
                            />
                            </div>
                            <div class="contentTextProduk" style="margin: 10px 3%">
                            <div class="identityProdukDelete">
                                <h3
                                style="
                                    color: black;
                                    font-size: 16px;
                                    font-weight: bold;
                                "
                                >
                                ${foundProduk.jenis}
                                </h3>
                            </div>

                            <div class="descProdukDelete">
                                <p
                                style="
                                    color: black;
                                    font-size: 10px;
                                    width: 200px;
                                    margin-top: 10px;
                                "
                                >
                                ${foundProduk.decs}
                                </p>
                            </div>
                            <div class="hargaProdukDelete">
                                <p
                                style="
                                    color: black;
                                    font-size: 10px;
                                    margin-top: 40px;
                                    font-weight: bold;
                                "
                                >
                                Rp. ${foundProduk.harga}
                                </p>
                            </div>
                            </div>
                        </div>
                        <div class="buttonValidasiDelete" style="float: right">
                            <button
                            style="
                                width: 130px;
                                height: 30px;
                                background: white;
                                color: black;
                                font-weight: bold;
                                font-family: sans-serif;
                                font-size: 13px;
                                border-radius: 10px;
                                cursor: pointer;
                                border: solid 2px black;
                            " id="btnDeleteProduk"
                            >
                            Save Produk
                            </button>
                        </div>
                        
        
        `;

        document.querySelector(".mainContentDelete").innerHTML = dataProdukUi;
      }
    });
  });
}

GetDataClick();
