function HendleAsideNavbar() {
  // element navbar

  const dashboard = document.querySelector(".dashboard");
  const produk = document.querySelector(".element");
  const tambahProduk = document.querySelector(".Widgets");
  const Form = document.querySelector(".Form");
  const tables = document.querySelector(".tables");

  //   element content
  const dashboardContainer = document.getElementById("dashboardContainer");
  const listProduk = document.getElementById("listProduk");
  const TambahProduk = document.getElementById("TambahProduk");
  const listUser = document.getElementById("listUser");
  const setting = document.getElementById("setting");

  dashboard.addEventListener("click", () => {
    if (dashboard.click) {
      dashboardContainer.style.display = "block";
      listProduk.style.display = "none";
      TambahProduk.style.display = "none";
      listUser.style.display = "none";
      setting.style.display = "none";
    }
  });

  produk.addEventListener("click", () => {
    if (produk.click) {
      dashboardContainer.style.display = "none";
      listProduk.style.display = "block";
      TambahProduk.style.display = "none";
      listUser.style.display = "none";
      setting.style.display = "none";
    }
  });

  tambahProduk.addEventListener("click", () => {
    if (tambahProduk.click) {
      dashboardContainer.style.display = "none";
      listProduk.style.display = "none";
      TambahProduk.style.display = "block";
      listUser.style.display = "none";
      setting.style.display = "none";
    }
  });

  Form.addEventListener("click", () => {
    if (Form.click) {
      dashboardContainer.style.display = "none";
      listProduk.style.display = "none";
      TambahProduk.style.display = "none";
      listUser.style.display = "block";
      setting.style.display = "none";
    }
  });

  tables.addEventListener("click", () => {
    if (tables.click) {
      dashboardContainer.style.display = "none";
      listProduk.style.display = "none";
      TambahProduk.style.display = "none";
      listUser.style.display = "none";
      setting.style.display = "block";
    }
  });
}

HendleAsideNavbar();
