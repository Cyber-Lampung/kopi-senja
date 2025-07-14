function navigasicart() {
  const back = document.querySelector(".back");
  const home = document.getElementById("home");

  back.addEventListener("click", () => {
    setTimeout(() => {
      window.location.href = "/more-product/html/more-product.html";
    }, 1000);
  });

  home.addEventListener("click", () => {
    setTimeout(() => {
      window.location.href = "../../../index/index.html";
    }, 1000);
  });
}

navigasicart();

// ambil data dari localStorage

const dataProduk = {
  NameProduk: localStorage.getItem("identity"),
  jumlahProduk: localStorage.getItem("nilai"),
  total: `${localStorage.getItem("total")}.000`,
};

console.log(dataProduk);
