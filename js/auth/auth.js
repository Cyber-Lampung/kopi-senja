function auth() {
  // ambil form auth

  const form = document.getElementById("auth-sign");

  form.addEventListener("click", (r) => {
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

      console.log(userarray);

      //
    } catch {
      console.log("aman");
    }

    //
  });
}

auth();
