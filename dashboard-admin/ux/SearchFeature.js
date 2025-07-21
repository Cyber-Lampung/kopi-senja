function searchFeature() {
  const formSearch = document.getElementById("formSearch");

  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchValue = document.getElementById("input").value;
    // ambil nama nama data user di dalam list

    const nameAccount = document.querySelectorAll("#user");
    const tdElement = document.querySelectorAll("#datauser");

    nameAccount.forEach((datauser) => {
      const user = datauser.innerText;

      const found = searchValue.find(user);

      if (found == true) {
        tdElement.forEach((Element) => {
          Element.style.display = "none";
        });
      }

      //
    });
  });
}

searchFeature();
