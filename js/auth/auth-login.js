import { datauser } from "../../js/auth/auth.js";

console.log(datauser);

function login() {
  const formLogin = document.getElementById("formLogin");

  formLogin.addEventListener("submit", (r) => {
    r.preventDefault();

    // login logic

    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    // validasi user login ya 😁😁

    if (username === "" || password === "") {
      console.log("not valid inputan kosong");
    }

    // validasi value length password
    if (password.length <= 8) {
      console.log("password kurang dari 8");
    }

    // jika validasi lolos semua maka lanjut ke tahap pengecekan
  });
}

login();
