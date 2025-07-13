template product

 <!-- <script>

        const product = [
            {id: 1, nama: "kopi hitam", gambar: "../image-product/kopi-hitam.webp"},
            {id: 2, nama: "kopi dingin", gambar: "../image-product/kopi-hitam.webp"},
            {id: 3, nama: "kopi hangat", gambar: "../image-product/kopi-hitam.webp"}
        ]

        const cardContainer = document.getElementById('cardContainer');

        product.forEach(items => {

            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                
                <a href="deails.html?id=${items.id}">
                    <img src="${items.gambar}" alt="" width="300"<br>
                    <strong>${items.nama}</strong>
                </a>        
            `;

            cardContainer.appendChild(card)

        })

    </script> -->

<!--



1. menghitung jumlah produk yang dibeli
2. jika dikurangi maka inkut berkurang totalnya
3. total akan terus terupdate setelah jumlah barang dikurangi atau ditambahkan



 -->

<!-- // function detail(dataPoduk = hargaProduct) {
// // mengambil setiap element button

// const kecil = document.getElementById("kecil");
// const sedang = document.getElementById("sedang");
// const besar = document.getElementById("besar");

// // mengambil data setiap items harga

// const T = document.getElementById("total");

// // function ganti harga ketika ganti ukuran

// }

// detail(); -->

<!--

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

 -->
