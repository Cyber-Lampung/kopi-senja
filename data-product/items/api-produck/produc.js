export const product = [
  {
    id: "data-1",
    jenis: "kopi chapuchino",
    harga: "4.000",
    image: "/image/image-product/kopi-chapuchino.webp",
  },
  {
    id: "data-2",
    jenis: "kopi Cincau",
    harga: "3.000",
    image: "/image/image-product/images.jpg",
  },
  {
    id: "data-3",
    jenis: "kopi Dingin",
    harga: "2.000",
    image: "/image/image-product/kopi-dingin.jpg",
  },
  {
    id: "data-4",
    jenis: "kopi gula aren",
    harga: "6.000",
    image: "/image/image-product/gula-aren.webp",
  },
  {
    id: "data-5",
    jenis: "kopi barista",
    harga: "5.000",
    image: "/image/image-product/kopi-barista.jpg",
  },
  {
    id: "data-6",
    jenis: "kopi susu",
    harga: "7.000",
    image: "/image/image-product/kopi-susu.jpg",
  },
];

export function getDataId(dataProduck) {
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
            function SendData(data) {
              data.forEach((items) => {
                if (items.id.includes(dataId)) {
                  function sendApi() {
                    // function send to local storage
                    try {
                      try {
                        const button = document.querySelectorAll(
                          ".button-Detail button"
                        );

                        button.forEach((buttons) => {
                          try {
                            buttons.addEventListener("click", () => {
                              setTimeout(() => {
                                window.location.href =
                                  "../animation-loading-items/loadng.html?next=../detail-product/all-items/detail.html";
                              }, 100);
                            });
                          } catch {
                            console.log("error button");
                          }

                          localStorage.setItem("identity", items.jenis);
                          localStorage.setItem("harga", items.harga);
                          localStorage.setItem("image", items.image);
                        });
                      } catch {
                        console.log("error redirect");
                      }
                    } catch {
                      console.log("error");
                    }
                  }

                  sendApi();
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
