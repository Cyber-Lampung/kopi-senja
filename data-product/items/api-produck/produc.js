export const product = [
  {
    id: "data-1",
    jenis: "kopi chapuchino",
    harga: "4.000",
    image: "/image/image-product/kopi-chapuchino.webp",
    decs: "kopi chapuchino adalah kopi yang sangat cocok untuk ketika ingin diminum pada siang hari antara chapuchino yang sangat legit sekali",
  },
  {
    id: "data-2",
    jenis: "kopi Cincau",
    harga: "3.000",
    image: "/image/image-product/images.jpg",
    decs: "ini adalah kopi yang dicampur dengan cincau jadi antara cincau dengan kopi bercamput menjadi 1",
  },
  {
    id: "data-3",
    jenis: "kopi Dingin",
    harga: "2.000",
    image: "/image/image-product/kopi-dingin.jpg",
    decs: "Ini adalah kopi dengan ciri khas Lampung yaitu kopi hitam manis yang dipadukan dengan cangkir putih",
  },
  {
    id: "data-4",
    jenis: "kopi gula aren",
    harga: "6.000",
    image: "/image/image-product/gula-aren.webp",
    decs: "Ini adalah kopi dengan rasa gula aren yang sangat legit dan sangat cocok untuk diminum saat nyantai",
  },
  {
    id: "data-5",
    jenis: "kopi barista",
    harga: "5.000",
    image: "/image/image-product/kopi-barista.jpg",
    decs: "kopi dengan pemandangan estitic yang sangat bagus dengan begitu anda akan menambahkan mood anda karena medapatkan kopi yang sangat estetic",
  },
  {
    id: "data-6",
    jenis: "kopi susu",
    harga: "7.000",
    image: "/image/image-product/kopi-susu.jpg",
    decs: "kopi yang bagus dan enak yaitu antara perpaduan antar kopi dengan susu yang sangat enak sekali dan mendapatkan nutrisi dari susu",
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
                          localStorage.setItem("decs", items.decs);
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
