<!--


// cors options

// const corsOptions = {
//   origin: "http://localhost:3000",
//   methods: "GET,HEAD,PUT,POST,PATCH,DELETE",
//   credentials: true,
//   optionsSeccesStatus: 204,
// };

// http.use(cors(corsOptions));


// http
//   .createServer(function (req, res) {
//     res.writeHead(403, { "Content-Type": "text/html" });
//     switch (req.url) {
//       case "admin":
//         res.write("Cannot acces page admin");
//         break;
//     }
//     res.end();
//   })
//   .listen(3000);


const http = require("http");
const ReadFile = require("fs");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/about":
        ReadFile.readFile("../../index/index.html", (err, data) => {
          if (err) throw err;

          //   kirim response
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
        break;

      case "/admin":
        res.addListener("error", () => {
          res.write("ok");
        });
        break;

      case "/api":
        // cors manage

        res.setHeader("Access-Control-Allow-Origin", "*"); // allow request from any origin ( for development, restrict in production)
        res.setHeader(
          "Access-Control-Allow-Method",
          "GET,HEAD,PUT,POST,PATCH,DELETE,OPTIONS"
        ); // allowed HTTP methods

        res.setHeader(
          "Access-Control-Allow-Headers",
          "Content-Type, Authorization"
        ); // allow request headers

        res.writeHead(200, {
          "Content-Type": "application/json",
          "Access-Control-Request-Method": "POST",
        });
        fetch("http://localhost:3000/api")
          .then((response) => {
            console.log(response);
          })
          .then((dataObj) => console.log(dataObj))
          .catch((err) => console.error(err));

        break;
    }
    res.end();
  })
  .listen(3000);


 -->

<!-- Server yang diganti -->

<!--

const http = require("http");
const fs = require("fs");

// automatisasi content-type

// content-type

const html = { "Content-Type": "text/html" };
const css = { "Content-Type": "text/css" };
const js = { "Content-Type": "application/javascript" };
const ImageP = { "Content-Type": "image/png" };
const ImageJ = { "Content-Type": "image/jpg" };
const ImageW = { "Content-Type": "image/webp" };

const server = http.createServer((req, res) => {
  // routing for web admin

  switch (req.url) {
    case "/":
      fs.readFile("../../index/index.html", (err, index) => {
        if (err) throw err;

        res.writeHead(200, html);
        res.write(index);
        res.end();
      });
      break;

    case "/index.css":
      fs.readFile("../../index/index.css", (err, indexcss) => {
        if (err) throw err;

        res.writeHead(200, css);
        res.write(indexcss);
        res.end();
      });
      break;

    case "/index.js":
      fs.readFile("../../index/index.js", (err, indexjs) => {
        if (err) throw err;

        res.writeHead(200, js);
        res.write(indexjs);
        res.end();
      });
      break;

    case "/produc.js":
      fs.readFile(
        "../../data-product/items/api-produck/produc.js",
        (err, produkjs) => {
          if (err) throw err;

          res.writeHead(200, js);
          res.write(produkjs);
          res.end();
        }
      );
      break;

    case "/image/image-product/kopi-barista.jpg":
      fs.readFile(
        "../../image/image-product/kopi-barista.jpg",
        (err, image) => {
          if (err) throw err;

          res.writeHead(200, ImageJ);
          res.end(image);
        }
      );
      break;

    case "/image/image-product/images.jpg":
      fs.readFile("../../image/image-product/images.jpg", (err, image) => {
        if (err) throw err;

        res.writeHead(200, ImageJ);
        res.end(image);
      });
      break;

    case "/image/image-product/gula-aren.webp":
      fs.readFile("../../image/image-product/gula-aren.webp", (err, image) => {
        if (err) throw err;

        res.writeHead(200, ImageW);
        res.end(image);
      });
      break;

    case "/image/image-product/images.jpg":
      fs.readFile("../../image/image-product/images.jpg", (err, image) => {
        if (err) throw err;

        res.writeHead(200, ImageJ);
        res.end(image);
      });
      break;

    case "/image/image-product/kopi-chapuchino.webp":
      fs.readFile(
        "../../image/image-product/kopi-chapuchino.webp",
        (err, image) => {
          if (err) throw err;

          res.writeHead(200, ImageW);
          res.end(image);
        }
      );
      break;

    case "/image/image-product/kopi-dingin.jpg":
      fs.readFile("../../image/image-product/kopi-dingin.jpg", (err, image) => {
        if (err) throw err;

        res.writeHead(200, ImageJ);
        res.end(image);
      });
      break;

    case "/image/image-product/kopi-hitam.webp":
      fs.readFile("../../image/image-product/kopi-hitam.webp", (err, image) => {
        if (err) throw err;

        res.writeHead(200, ImageW);
        res.end(image);
      });
      break;

    case "/image/image-product/kopi-susu.jpg":
      fs.readFile("../../image/image-product/kopi-susu.jpg", (err, image) => {
        if (err) throw err;

        res.writeHead(200, ImageJ);
        res.end(image);
      });
      break;

    // more produk

    case "/moreproduct":
      fs.readFile(
        "../../more-product/html/more-product.html",
        (err, moreProduk) => {
          if (err) throw err;

          res.writeHead(200, html);
          res.write(moreProduk);
          res.end();
        }
      );
      break;

    case "/more-product.js":
      fs.readFile(
        "../../more-product/js/more-product.js",
        (err, moreProduk) => {
          if (err) throw err;

          res.writeHead(200, js);
          res.write(moreProduk);
          res.end();
        }
      );
      break;

    case "/more-product.css":
      fs.readFile(
        "../../more-product/css/more-product.css",
        (err, moreProduk) => {
          if (err) throw err;

          res.writeHead(200, css);
          res.write(moreProduk);
          res.end();
        }
      );
      break;

    // api produk js

    case "/data-product/items/api-produck/produc.js":
      fs.readFile(
        "../../data-product/items/api-produck/produc.js",
        (err, moreProduk) => {
          if (err) throw err;

          res.writeHead(200, js);
          res.write(moreProduk);
          res.end();
        }
      );
      break;

    // image more produk

    case "//image/image-product/kopi-barista.jpg":
      fs.readFile(
        "../../image/image-product/kopi-barista.jpg",
        (err, image) => {
          if (err) throw err;

          res.writeHead(200, ImageJ);
          res.end(image);
        }
      );
      break;

    case "//image/image-product/images.jpg":
      fs.readFile("../../image/image-product/images.jpg", (err, image) => {
        if (err) throw err;

        res.writeHead(200, ImageJ);
        res.end(image);
      });
      break;

    case "//image/image-product/gula-aren.webp":
      fs.readFile("../../image/image-product/gula-aren.webp", (err, image) => {
        if (err) throw err;

        res.writeHead(200, ImageW);
        res.end(image);
      });
      break;

    case "//image/image-product/images.jpg":
      fs.readFile("../../image/image-product/images.jpg", (err, image) => {
        if (err) throw err;

        res.writeHead(200, ImageJ);
        res.end(image);
      });
      break;

    case "//image/image-product/kopi-chapuchino.webp":
      fs.readFile(
        "../../image/image-product/kopi-chapuchino.webp",
        (err, image) => {
          if (err) throw err;

          res.writeHead(200, ImageW);
          res.end(image);
        }
      );
      break;

    case "//image/image-product/kopi-dingin.jpg":
      fs.readFile("../../image/image-product/kopi-dingin.jpg", (err, image) => {
        if (err) throw err;

        res.writeHead(200, ImageJ);
        res.end(image);
      });
      break;

    case "//image/image-product/kopi-hitam.webp":
      fs.readFile("../../image/image-product/kopi-hitam.webp", (err, image) => {
        if (err) throw err;

        res.writeHead(200, ImageW);
        res.end(image);
      });
      break;

    case "//image/image-product/kopi-susu.jpg":
      fs.readFile("../../image/image-product/kopi-susu.jpg", (err, image) => {
        if (err) throw err;

        res.writeHead(200, ImageJ);
        res.end(image);
      });
      break;

    // end more produk

    // loading animation

    case "/animation-loading-items/loadng.html":
      fs.readFile(
        "../../animation-loading-items/loadng.html",
        (err, loading) => {
          if (err) throw err;

          res.writeHead(200, html);
          res.write(loading);
          res.end();
        }
      );
      break;

    case "/animation-loading-items/loadin.css":
      fs.readFile(
        "../../animation-loading-items/loadin.css",
        (err, loading) => {
          if (err) throw err;

          res.writeHead(200, css);
          res.write(loading);
          res.end();
        }
      );
      break;

    case "/animation-loading-items/loading.js":
      fs.readFile(
        "../../animation-loading-items/loading.js",
        (err, loading) => {
          if (err) throw err;

          res.writeHead(200, js);
          res.write(loading);
          res.end();
        }
      );
      break;

    // detail produk

    case "/animation-loading-items/loadng.html?next=/detail-product/all-items/detail.html":
      fs.readFile(
        "../../detail-product/all-items/detail.html",
        (err, detail) => {
          if (err) throw err;

          res.writeHead(200, html);
          res.write(detail);
          res.end();
        }
      );
      break;

    case "/detail.css":
      fs.readFile(
        "../../detail-product/all-items/detail.css",
        (err, detail) => {
          if (err) throw err;

          res.writeHead(200, css);
          res.write(detail);
          res.end();
        }
      );
      break;

    case "/detail.js":
      fs.readFile(
        "../../detail-product/all-items/detail.js",
        (err, detailjs) => {
          if (err) throw err;

          res.writeHead(200, js);
          res.write(detailjs);
          res.end();
        }
      );
      break;

    // end loading animation

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

    // login route

    case "/login":
      fs.readFile("../../auth/login/auth-login.html", (err, login) => {
        if (err) throw err;

        res.writeHead(200, html);
        res.write(login);
        res.end();
      });
      break;

    case "/auth-login.css":
      fs.readFile("../../auth/login/auth-login.css", (err, logincss) => {
        if (err) throw err;

        res.writeHead(200, css);
        res.write(logincss);
        res.end();
      });
      break;

    case "/Desain-tanpa-judul.png":
      fs.readFile(
        "../../image/auth-image/Desain-tanpa-judul.png",
        (err, backGloadD) => {
          if (err) throw err;

          res.writeHead(200, ImageP);
          res.write(backGloadD);
          res.end();
        }
      );
      break;

    case "/coffe.png":
      fs.readFile("../../image/auth-image/coffe.png", (err, backGload) => {
        if (err) throw err;

        res.writeHead(200, ImageP);
        res.write(backGload);
        res.end();
      });
      break;

    case "/auth-login.js":
      fs.readFile("../auth/auth-login.js", (err, authloginjs) => {
        if (err) throw err;

        res.writeHead(200, js);
        res.write(authloginjs);
        res.end();
      });
      break;

    case "/auth-login.js":
      fs.readFile("../auth/auth-login.js", (err, authloginjs) => {
        if (err) throw err;

        res.writeHead(200, js);
        res.write(authloginjs);
        res.end();
      });
      break;

    // sign route

    case "/sign":
      fs.readFile("../../auth/sign/auth-sign.html", (err, sign) => {
        if (err) throw err;

        res.writeHead(200, html);
        res.write(sign);
        res.end();
      });
      break;

    case "/auth-sign.css":
      fs.readFile("../../auth/sign/auth-sign.css", (err, signcss) => {
        if (err) throw err;

        res.writeHead(200, css);
        res.write(signcss);
        res.end();
      });
      break;

    case "/auth.js":
      fs.readFile("../../js/auth/auth.js", (err, authjs) => {
        if (err) throw err;

        res.writeHead(200, js);
        res.write(authjs);
        res.end();
      });
      break;

    case "/image-person.png":
      fs.readFile(
        "../../image/auth-image/image-person.png",
        (err, imageperson) => {
          if (err) throw err;

          res.writeHead(200, ImageP);
          res.write(imageperson);
          res.end();
        }
      );
      break;

    // cart

    case "/cart":
      fs.readFile("../../cart/cart-pesan/cart.html", (err, cart) => {
        if (err) throw err;

        res.writeHead(200, html);
        res.write(cart);
        res.end();
      });
      break;

    case "/cart.css":
      fs.readFile("../../cart/cart-pesan/cart.css", (err, cartcss) => {
        if (err) throw err;

        res.writeHead(200, css);
        res.write(cartcss);
        res.end();
      });
      break;

    case "/cart.js":
      fs.readFile("../../cart/cart-pesan/cart.js", (err, cartjs) => {
        if (err) throw err;

        res.writeHead(200, js);
        res.write(cartjs);
        res.end();
      });
      break;

    case "/detail":
      fs.readFile(
        "../../detail-product/all-items/detail.html",
        (err, detail) => {
          if (err) throw err;

          res.writeHead(200, html);
          res.write(detail);
          res.end();
        }
      );
      break;

    // icon favicon

    case "/favicon.ico":
      fs.readFile("../../favicon.ico", (err, ico) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "image/ico" });
        res.write(ico);
        res.end();
      });
      break;

    default:
      break;
  }

  console.log(`berjalan pada url http://127.0.0.1:3000${req.url} `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



 -->
