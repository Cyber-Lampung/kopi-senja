function getUser() {
  const form = document.getElementById("formLogin");

  form.addEventListener("submit", (e) => {
    // no auto refresh
    e.preventDefault();
    e.stopPropagation();

    // ambil name dari setiap element

    const username = form.user.value;
    const password = form.pass.value;

    // memastikan inputan tidak kosong

    if (!username || !password) {
      console.log("not value invalid");
    }

    // ambil user dari localStorage

    const user = localStorage.getItem("dataUser");

    // parse
    const dataUser = JSON.parse(user);

    // validasi jika user ada dan redirect

    const validasiUser =
      dataUser.user.includes(username) &&
      dataUser.pass.includes(btoa(password));

    console.log(validasiUser);

    if (validasiUser) {
      console.log((document.cookie = btoa(username) + "test cookie"));
    }

    // if (
    //   dataUser.email.includes(username) ||
    //   (dataUser.user.includes(username) &&
    //     dataUser.pass.includes(btoa(password)))
    // ) {
    //   console.log("user ditemukan");
    // } else {
    //   console.error((error) => {
    //     console.log("Meassage : ", error);
    //   });
    // }
  });
}

getUser();
