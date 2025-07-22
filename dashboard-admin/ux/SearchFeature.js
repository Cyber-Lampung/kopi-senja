function searchFeature() {
  // ambil form search

  let searchForm = document.getElementById("formSearch");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // ambil search value

    const valueSearch = document.getElementById("input").value.toLowerCase();

    let rows = document.querySelectorAll("table tr");

    rows.forEach((row, index) => {
      if (index == 0) return;

      const td = row.querySelectorAll("td");

      let rowUsername = false;

      td.forEach((cellUser) => {
        if (cellUser.innerText.toLowerCase().includes(valueSearch)) {
          rowUsername = true;
        }
      });
      row.style.visibility = rowUsername ? "visible" : "collapse";
    });
  });
}

searchFeature();
