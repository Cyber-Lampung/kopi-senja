function auth() {
  // ambil form auth

  const button = document.getElementById("button");

  button.addEventListener("click", (r) => {
    //  no auto refresh
    r.preventDefault();

    // start

    // element input

    const email = document.getElementById("email").value;
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    // user array

    const userarray = [];

    // blacklist character

    const blacklist = [
      "$",
      "!",
      "#",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "`",
      "--",
      "'",
    ];

    try {
      // try

      const notive = document.getElementById("notive");

      const gagal = `<div
            class="notive"
            style="
              position: relative;
              top: -30px;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 300px;
              margin: auto;
              font-family: 'Courier New', Courier, monospace;
              border-radius: 20px;
              height: 40px;
              background-color: white;
            "
          >
            <h3>Gagal send</h3>
          </div>`;

      const succes = `<div
            class="notive"
            style="
              position: relative;
              top: -30px;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 300px;
              margin: auto;
              font-family: 'Courier New', Courier, monospace;
              border-radius: 20px;
              height: 40px;
              background-color: white;
            "
          >
            <h3>Succes Send</h3>
          </div>`;

      if (email === "" || user === "" || pass === "") {
        setTimeout(() => {
          notive.style.display = "none";
        }, 1000);

        setTimeout(() => {
          notive.innerHTML = gagal;
          notive.style.display = "block";
        }, 0);
      } else {
        setTimeout(() => {
          notive.style.display = "none";
        }, 1000);

        setTimeout(() => {
          notive.innerHTML = succes;
          notive.style.display = "block";
        });
      }

      if (pass.length < 8) {
        setTimeout(() => {
          notive.style.display = "none";
        }, 1000);

        setTimeout(() => {
          notive.innerHTML = gagal;
          notive.style.display = "block";
        }, 0);
      }
      // callback user

      function datauser(email, user, password, callback) {
        // save user di localStorage

        const getData = [
          { email: email, user: btoa(user), password: btoa(password) },
        ];
        getData.forEach((items) => {
          const DataJson = JSON.stringify(items);
          localStorage.setItem("LoginUser", DataJson);
        });

        // testing

        callback();
      }

      datauser(email, user, pass);

      // catch
    } catch {
      console.log("aman");
    }

    //
  });
}

auth();
