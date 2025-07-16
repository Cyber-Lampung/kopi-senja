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
      return;
    }

    // send value input ke localStorage

    const user = {
      email: email,
      user: username,
      pass: btoa(password),
    };

    localStorage.setItem("dataUser", JSON.stringify(user));

    async function fetchUser(user) {
      try {
        const response = await fetch("http://localhost:3000/api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const result = await response.json();
        console.log("data dari result : ", result);
      } catch (error) {
        console.log("Message : ", error);
      }
    }

    fetchUser(user);

    // test

    console.log(email, username, password);
  });
}

getUser();
