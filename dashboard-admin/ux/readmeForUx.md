<!-- function TambahProduk() {
const objekData = [];

// ambil data button

const btn = document.getElementById("BtnTambahProduk");

btn.addEventListener("click", () => {
// get data produk

    const nameProduk = document.getElementById("nameProduk").value;
    const decs = document.getElementById("decs").value;
    const image = document.getElementById("upload").value;

    //   check data

    if (!nameProduk || !decs || !image) {
      console.log("gagal get data empety value");
      return;
    }

    try {
      const ObjekProduk = {
        NamaBarang: nameProduk,
        Decs: decs,
        image: image,
      };

      //   fetch data simulasi

      fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ObjekProduk),
      });
    } catch {
      console.log("gagal ambil data");
    }

});
}

TambahProduk(); -->
