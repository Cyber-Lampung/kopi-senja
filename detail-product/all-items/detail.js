function ubahButoon() {
  const button = document.getElementById("cart");

  button.addEventListener("click", () => {
    if (button.click) {
      setTimeout(() => {
        button.disabled;
      }, 1000);
    }
  });
}

ubahButoon();

// data global function dataclick
let jumlahAwal = 0;
let jumlahData;
const totalHarga = document.getElementById("total");
let totalJumlah;

function dataclick() {
  let hargaawal = localStorage.getItem("harga");

  // mengambil jumlag id

  const jumlahPesanan = document.getElementById("jumlah");

  // mengambil button plus dan kurang

  const plus = document.getElementById("tambah");
  const kurang = document.getElementById("kurang");

  plus.addEventListener("click", () => {
    jumlahData = jumlahAwal += 1;

    jumlahPesanan.textContent = jumlahData;

    localStorage.setItem("nilai", jumlahData);

    // menambahkan harga ketika penambahan

    totalJumlah = hargaawal * jumlahData;

    totalHarga.textContent = ` Rp. ${totalJumlah}.000 `;
  });

  kurang.addEventListener("click", () => {
    jumlahData = jumlahAwal -= 1;

    localStorage.setItem("nilai", jumlahData);

    if (jumlahData === 0) {
      console.log("batas pemesanan");
      jumlahPesanan.textContent = 0;
    } else {
      jumlahPesanan.textContent = jumlahData;
    }

    if (items.classList == "items") {
      items.textContent = jumlahData;
    }

    // pengurangan harga ketika penambahan

    totalJumlah -= hargaawal;

    totalHarga.textContent = `Rp. ${totalJumlah}.000`;
  });
}

dataclick();

// function back

document.querySelector(".arrow-left").addEventListener("click", (r) => {
  r.preventDefault();

  setTimeout(() => {
    window.location.href = "/moreproduct";
  }, 1000);
});

const iden = document.getElementById("identityProduk");
const harga = document.getElementById("harga");
const image = document.getElementById("image");
const decs = document.getElementById("decs-items");

iden.append(localStorage.getItem("identity"));
harga.append(localStorage.getItem("harga"));
image.src = "../../" + localStorage.getItem("image");
decs.append(localStorage.getItem("decs"));

function button() {
  const button = document.getElementById("cart");

  button.addEventListener("click", () => {
    localStorage.setItem("total", totalJumlah);

    try {
      if (localStorage.getItem("total") == "undefined") {
        alert("data tidak boleh kosong");
      }
      // kirim data ke local storage yang nanti akan  di ambil untuk append data ke items list
      const dataItems = {
        //

        jenis: localStorage.getItem("identity"),
        total: totalJumlah,

        //
      };

      //
    } catch {
      console.log(console.log("error massage"));
    }
  });
}

button();

// cart items

function cart() {
  const cart = document.querySelector(".shoping-cart");
  cart.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "/cart";
  });
}

cart();

// button to append cart product

export let arrayDataItem = [];

//
export function cartProduct() {
  const btn = document.getElementById("cart");
  btn.addEventListener("click", () => {
    const itemsData = document.getElementById("itemsData");
    console.log(itemsData);

    const dataObjek = {
      jenis: iden.innerHTML,
      totalProduk: jumlahData,
      total: totalJumlah + ".000",
    };

    // data elemen html
    const div = (document.createElement("div").innerHTML = `

    <div id="data">
                <div class="items">
                  <div class="jenis-items">
                    <h4>${dataObjek.jenis}</h4>
                  </div>
                  <br />
                  <div class="harga">
                    <h5>Rp. ${dataObjek.total}</h5>
                  </div>
                </div>

                <div class="navigasi-items">
                  <div
                    class="plus-minus"
                    style="display: flex; gap: 1rem; align-items: center"
                  >
                    <button
                      style="
                        width: 25px;
                        height: 25px;
                        border-radius: 6px;
                        background-color: transparent;
                        border: solid 2px black;
                      "
                    >
                      +
                    </button>
                    <span
                      style="font-family: sans-serif; font-size: 15px"
                      id="jumlah"
                      >${dataObjek.totalProduk}</span
                    >
                    <button
                      style="
                        width: 25px;
                        height: 25px;
                        border-radius: 6px;
                        background-color: transparent;
                        border: solid 2px black;
                      "
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>

    `);

    // panggil element itemsData

    itemsData.append(div);
  });
}

cartProduct();
