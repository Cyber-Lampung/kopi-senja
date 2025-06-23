import { product } from "../../data-product/items/api-produck/produc.js";

// const dataid = product.map((items) => {
//   const item = items.id;
//   return item;
// });

product.forEach((items) => {
  // data element html

  const img = document.querySelectorAll(".image");
  img.forEach((imageI) => {
    const dataI = imageI.dataset.id;
    if (items.id.includes(dataI)) {
      imageI.src = "../../" + items.image;
    }
  });
});

product.forEach((items) => {
  // data element html
  const jenis = document.querySelectorAll("#identity");
  jenis.forEach((dataJ) => {
    const dataK = dataJ.dataset.id;
    if (items.id.includes(dataK)) {
      dataJ.append(items.jenis);
    } else {
      console.log("no");
    }
  });
});

product.forEach((items) => {
  // data element html
  const decs = document.querySelectorAll("#decs");
  decs.forEach((dataD) => {
    const dataK = dataD.dataset.id;
    if (items.id.includes(dataK)) {
      dataD.append(items.decs);
    } else {
      console.log("no");
    }
  });
});

const back = document.querySelector(".back");

back.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = "../../../index/index.html";
  }, 1000);
});
