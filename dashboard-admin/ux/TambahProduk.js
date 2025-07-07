function TambahProduk() {
  const objekData = [];

  // ambil data button

  const btn = document.getElementById("BtnTambahProduk");

  btn.addEventListener("click", () => {
    // get data produk

    const nameProduk = document.getElementById("nameProduk").value;
    const decs = document.getElementById("decs").value;
    const image = document.getElementById("upload").value;

    //   check data

    if (nameProduk === null || decs === null || image === null) {
      console.log("gagal get data empety value");
    }

    try {
      const ObjekProduk = {
        NamaBarang: nameProduk,
        Decs: decs,
        image: image,
      };

      objekData.push(ObjekProduk);

      //   fetch data

      fetch("http://localhost:3000/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: nameProduk,
          decs: decs,
          image: image,
        }),
      });
    } catch {
      console.log("gagal ambil data");
    }

    console.log(objekData);
  });
}

TambahProduk();
