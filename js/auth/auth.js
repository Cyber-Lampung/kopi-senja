export const dataUserLogin = [];

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
    document.getElementById("pass").style.border = "solid 2px red";
  } else if (pass.length >= 8) {
    document.getElementById("pass").style.border = "none";
  }

  // push user in data user

  const objUser = {
    email: email,
    user: user,
    password: pass,
  };
  const userJson = JSON.stringify(objUser);
  dataUserLogin.push(objUser);
  localStorage.setItem("localuser", userJson);

  setTimeout(() => {
    localStorage.removeItem("localuser");
  }, 20000);

  // end user inputan
});
