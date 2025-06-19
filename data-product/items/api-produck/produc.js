const person = document.getElementById("items1");
const items2 = document.getElementById("items2");

person.addEventListener("click", () => {
  window.location.href =
    "../animation-loading-items/loadng.html?goto=../detail-product/all-items/detail.html";
});
``;
items2.addEventListener("click", () => {
  window.location.href =
    "../animation-loading-items/loadng.html?goto=../detail-product/all-items/detail.html";
});

// setTimeout(() => {
// }, 4100);

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
