function navigasicart() {
  const back = document.querySelector(".back");
  const home = document.getElementById("home");

  back.addEventListener("click", () => {
    setTimeout(() => {
      window.location.href = "../../../detail-product/all-items/detail.html";
    }, 1000);
  });

  home.addEventListener("click", () => {
    setTimeout(() => {
      window.location.href = "../../../index/index.html";
    }, 1000);
  });
}

navigasicart();

// ambil data dai html
