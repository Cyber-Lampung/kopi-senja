const person = document.getElementById("items1");

person.addEventListener("click", () => {
  window.location.href = "../animation-loading-items/loadng.html";

  setTimeout(() => {
<<<<<<< HEAD
    window.location.href = "../detail-product/itens/api-product/produc.js";
  }, 2000);
});

console.log(person);
=======
    window.location.href = "http://127.0.0.1:5500/index";
    window.location.href =
      "http://127.0.0.1:5500/detail-product/all-items/detail.html";
  }, 5000);
});

// setTimeout(() => {
// }, 4100);
>>>>>>> master

function produc(idperson) {
  const product = [
    { id: 1, jenis: "kopi-barista", harga: "4.000" },
    { id: 2, jenis: "kopi-panas", harga: "3.000" },
    { id: 3, jenis: "kopi-dingin", harga: "3.000" },
    { id: 4, jenis: "kopi-asmara", harga: "3.000" },
  ];

  product.forEach((item) => {
    if (item.id == idperson) {
      console.log(item.jenis, ":", item.harga);
    }
  });
}

produc(person);
