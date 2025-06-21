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
    window.location.href = "/index/index.html";
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

function cart() {
  const cart = document.querySelector(".shoping-cart");
  cart.addEventListener("click", (e) => {
    e.preventDefault();

    window.location.href = "../../cart/cart-pesan/cart.html";
  });
}

cart();
