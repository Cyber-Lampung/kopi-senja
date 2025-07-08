const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // routing for web admin

  switch (req.url) {
    case "/home":
      fs.readFile(
        "../../dashboard-admin/ui/admin-page/admin.html",
        (err, data) => {
          if (err) throw err;

          // kirim response

          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      );
      break;

    case "/admin.css":
      fs.readFile(
        "../../dashboard-admin/publik-css-admin/admin.css",
        (err, css) => {
          if (err) throw err;

          // css file admin

          res.writeHead(200, { "Content-Type": "text/css" });
          res.write(css);
          res.end();
        }
      );
      break;

    case "/appendFile.js":
      fs.readFile(
        "../../dashboard-admin/ux/appendFile.js",
        (err, appendFile) => {
          if (err) throw err;

          // file adminRoute

          res.writeHead(200, { "Content-Type": "application/javascript" });
          res.write(appendFile);
          res.end();
        }
      );
      break;

    case "/component/navbar/navbar.html":
      fs.readFile(
        "../../component/navbar/navbar.html",
        "utf-8",
        (err, navbar) => {
          if (err) throw err;

          // get navbar

          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          res.end(navbar);
        }
      );
      break;

    case "/component/navbar/navbar.js":
      fs.readFile("../../component/navbar/navbar.js", (err, navbarjs) => {
        if (err) throw err;

        // get navbar javascript

        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.write(navbarjs);
        res.end();
      });
      break;

    case "/navbar.css":
      fs.readFile("../../component/navbar/navbar.css", (err, navbarcss) => {
        if (err) throw err;

        // get navbar css

        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(navbarcss);
        res.end();
      });
      break;

    case "/TambahProduk":
      fs.readFile(
        "../../dashboard-admin/ui/TambahProduk/TambahProduk.html",
        (err, produk) => {
          if (err) throw err;

          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(produk);
          res.end();
        }
      );
      break;

    case "/TambahProduk.css":
      fs.readFile(
        "../../dashboard-admin/publik-css-admin/TambahProduk.css",
        (err, produk) => {
          if (err) throw err;

          res.writeHead(200, { "Content-Type": "text/css" });
          res.end(produk);
        }
      );
      break;

    case "/TambahProduk.js":
      fs.readFile("../../dashboard-admin/ux/TambahProduk.js", (err, produk) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.end(produk);
      });
      break;

    case "/setting":
      fs.readFile(
        "../../dashboard-admin/ui/settingAdmin/Setting.html",
        (err, setting) => {
          if (err) throw err;

          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(setting);
          res.end();
        }
      );
      break;

    case "/settingAdmin.css":
      fs.readFile(
        "../../dashboard-admin/publik-css-admin/settingAdmin.css",
        (err, setting) => {
          if (err) throw err;

          res.writeHead(200, { "Content-Type": "text/css" });
          res.write(setting);
          res.end();
        }
      );
      break;

    case "/setting.js":
      fs.readFile("../../dashboard-admin/ux/setting.js", (err, setting) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.end(setting);
      });
      break;

    case "/listUser":
      fs.readFile(
        "../../dashboard-admin/ui/listUser/listUser.html",
        (err, listUser) => {
          if (err) throw err;

          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(listUser);
          res.end();
        }
      );
      break;

    case "/listUser.css":
      fs.readFile(
        "../../dashboard-admin/publik-css-admin/listUser.css",
        (err, listUsercss) => {
          if (err) throw err;

          res.writeHead(200, { "Content-Type": "text/css" });
          res.write(listUsercss);
          res.end();
        }
      );
      break;

    default:
      break;
  }
  console.log(`berjalan pada url http://127.0.0.1:3000${req.url} `);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server berjalan pada port 3000");
});
