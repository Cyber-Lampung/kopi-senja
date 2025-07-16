function getUser() {
  // form untuk sign

  const form = document.getElementById("form-sign");

  // addEventlistiner form

  form.addEventListener("submit", (e) => {
    // supaya tidak auto refresh

    e.preventDefault();
    e.stopPropagation();

    // ambil value user input lewat name

    const email = form.email.value;
    const username = form.user.value;
    const password = form.pass.value;

    // validasi value not empety

    if (!email || !username || !password) {
      console.log("value not empety");
    }

    // send value input ke localStorage

    const user = {
      email: email,
      user: username,
      pass: btoa(password),
    };

    localStorage.setItem("dataUser", JSON.stringify(user));

    // test

    console.log(email, username, password);
  });
}

getUser();
