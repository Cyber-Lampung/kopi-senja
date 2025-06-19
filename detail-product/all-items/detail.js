function ubahButoon() {
  const button = document.getElementById("pesan");

  button.addEventListener("click", () => {
    if (button.click) {
      setTimeout(() => {
        button.disabled;
      }, 1000);
    }
  });
}

ubahButoon();

function jumlahData() {
  let jumlahAwal = 0;
  let jumlahData;

  let hargaawal = 4;
  let totalJumlah;

  // mengambil jumlag id

  const jumlahPesanan = document.getElementById("jumlah");

  // mengambil button plus dan kurang

  const plus = document.getElementById("tambah");
  const kurang = document.getElementById("kurang");
  const items = document.getElementById("items");
  const itemsProduck = document.querySelector(".items");
  const totalHarga = document.getElementById("total");

  plus.addEventListener("click", () => {
    jumlahData = jumlahAwal += 1;

    items.classList = "items";

    if (items.classList == "items") {
      items.textContent = jumlahData;
    }
    itemsProduck.style.display = "flex";

    jumlahPesanan.textContent = jumlahData;

    // menambahkan harga ketika penambahan

    totalJumlah = hargaawal * jumlahData;

    totalHarga.textContent = ` Rp. ${totalJumlah}.000 `;
  });

  kurang.addEventListener("click", () => {
    jumlahData = jumlahAwal -= 1;

    console.log(jumlahData);

    if (jumlahData === 0) {
      console.log("batas pemesanan");
      jumlahPesanan.textContent = 0;
    } else {
      jumlahPesanan.textContent = jumlahData;
    }

    if (items.classList == "items") {
      items.textContent = jumlahData;
    }

    itemsProduck.style.display = "flex";

    if (jumlahData === 0) {
      itemsProduck.style.display = "none";
    }

    // pengurangan harga ketika penambahan

    totalJumlah -= hargaawal;

    totalHarga.textContent = `Rp. ${totalJumlah}.000`;
  });
}

jumlahData();

// function back

const back = document
  .querySelector(".arrow-left")
  .addEventListener("click", (r) => {
    r.preventDefault();

    setTimeout(() => {
      window.location.href = "/index/index.html";
    }, 2000);
  });
