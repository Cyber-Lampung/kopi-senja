function getUser() {
  const form = document.getElementById("auth-login");

  form.addEventListener("submit", (e) => {
    // no auto refresh
    e.preventDefault();

    // array user

    const arrayUser = [];

    const data = localStorage.getItem("LoginUser");

    // ubah data -> object

    const objUser = JSON.parse(data);

    // push user data => array

    arrayUser.push(objUser);

    // testing
    // console.log(arrayUser);

    // ambil data element html data inputan user

    const auth = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    // element html

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

    // validasi inputan user

    try {
      // check length user inputan password

      // blacklist password character

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
        blacklist.forEach((lst) => {
          if (pass.length < 8) {
            // code for succes and no

            setTimeout(() => {
              notive.style.display = "none";
            }, 3000);

            setTimeout(() => {
              notive.style.display = "block";
              notive.innerHTML = gagal;
            }, 0);
          } else {
            if (auth.includes(lst) || pass.includes(lst)) {
              // code for succes and no

              setTimeout(() => {
                notive.style.display = "none";
              }, 3000);

              setTimeout(() => {
                notive.style.display = "block";
                notive.innerHTML = gagal;
              }, 100);
            } else {
              setTimeout(() => {
                notive.style.display = "none";
              }, 3000);

              setTimeout(() => {
                notive.style.display = "block";
                notive.innerHTML = succes;
              }, 100);
            }
          }
        });
      } catch {
        console.log(err);
      }

      // batas catch
    } catch {
      console.log("gagal");
    }

    // user auth
  });
}

getUser();
