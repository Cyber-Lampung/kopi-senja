import { dataUsr } from "../../js/auth/user/user.js";

const userData = dataUsr;

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // user inputan

  const email = document.getElementById("email").value;
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  //console.log(email, user, pass);

  if (pass.length <= 8) {
    console.log("no strong password");
  }

  // push user in data user

  const objUser = {
    email: email,
    user: user,
    password: pass,
  };

  userData.push(objUser);

  console.log(userData);

  // end user inputan
});
