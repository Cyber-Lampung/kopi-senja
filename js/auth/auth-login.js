import { dataUsr } from "../../js/auth/user/user.js";

const userData = dataUsr;

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // user inputan

  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  //console.log(email, user, pass);

  if (pass.length <= 8) {
    console.log("no strong password");
  }

  // push user in data user

  const founduser = userData.map((item) => console.log(item));

  if (founduser) {
    // window.location.href = "../../dashboard/dashboard-ui/dashboard.html";
    console.log(userData);
  } else {
    console.log("user not found");
  }

  // end user inputan
});
