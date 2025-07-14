// save user credential

export const datauser = [];

function sign() {
  // value user

  const formSign = document.getElementById("form");

  formSign.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    // validasi value user

    if (email === "" || username === "" || password === "") {
      console.log("not value user");
    }

    // strong password minimal 8 character
    if (password.length <= 8) {
      console.log("not strong password");
    }

    // save user credential to send objek

    const dataUser = {
      email: email,
      username: username,
      password: password,
    };

    datauser.push(dataUser);

    console.log(datauser);
  });
}

sign();
