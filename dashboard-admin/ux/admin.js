import { product } from "../../data-product/items/api-produck/produc.js";

// btn.addEventListener("click", () => {
product.forEach((items) => {
  const data = `

    <div id="card">
        <div class="listProduk">
        
            <div class="produk">
                <div class="imageProduk">
                    <img
                        src="${items.image}"
                        alt="gula aren"
                    />
                    </div>
                        <div class="identityProduk">
                            <p>${items.jenis}</p>
                        </div>
                    <div class="decsripsiProduk">
                        <p>${items.decs}</p>
                    </div>
                    <div class="buttonDelete">
                        <button id="handelDeleteProduk" name="${items.id}">
                            <i class="delete bi-trash-fill"></i>
                        </button>
                </div>
            </div>

        </div>
    </div>
    
    `;

  document.getElementById("card").innerHTML += data;
});
// });
