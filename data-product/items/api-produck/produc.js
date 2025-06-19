let identity = document.getElementById("span");
console.log(identity);

const product = [
  { id: "data-1", jenis: "kopi chapuchino", harga: "4.000", image: "" },
  { id: "data-2", jenis: "kopi Cincau", harga: "3.000", image: "" },
  { id: "data-3", jenis: "kopi Dingin", harga: "3.000", image: "" },
  { id: "data-4", jenis: "kopi gula aren", harga: "3.000", image: "" },
  { id: "data-5", jenis: "kopi barista", harga: "3.000", image: "" },
  { id: "data-6", jenis: "kopi asmara", harga: "3.000", image: "" },
];

function getDataId(dataProduck) {
  const id = document.querySelectorAll(".card");

  dataProduck.forEach((item) => {
    let JsonData = JSON.stringify(item);

    id.forEach((data) => {
      // id yang akan di kirim atau di append ke html

      //
      data.addEventListener("click", () => {
        const dataId = data.attributes.getNamedItem("data-id").textContent;

        // mencoba untuk mencari data jika ada maka try = succes
        try {
          if (JsonData.includes(dataId)) {
            console.log("succes");

            function SendData(data) {
              data.forEach((items) => {
                if (items.id.includes(dataId)) {
                  console.log(items.harga);
                }
              });
            }

            SendData(dataProduck);
          } else if (JsonData.includes(!dataId)) {
            console.log("err");
          }

          // jika data tidak di temukan maka  catch = error
        } catch {
          console.log("error");
        }
      });
    });
  });
}

getDataId(product);
