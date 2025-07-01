// form start
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // save user to aray

  const local = localStorage.getItem("localuser");

  let localtoObjek = JSON.parse(local);

  // user inputan

  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  //console.log(email, user, pass);

  if (pass.length <= 8) {
    console.log("no strong password");
  }

  // push user in data user

  // login users

  let foundUser = localtoObjek.user === user && localtoObjek.password === pass;

  if (foundUser) {
    // redirect to dashboard jika ketemu to acount

    window.location.href = "../../dashboard/dashboard-ui/dashboard.html";
  } else {
    console.log("user not found ");
  }

  // end user inputan
});
