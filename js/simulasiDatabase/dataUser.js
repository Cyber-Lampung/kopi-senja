const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // cors handel

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // membuat file path

  if (req.method == "POST" && req.url === "/api") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const parseData = JSON.parse(body);
        console.log("Data diterima oleh backend :", parseData);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "oke", received: parseData }));
      } catch (error) {
        console.log("message : ", error);
      }
    });

    return;
  }

  switch (req.url) {
    //   else if (req.method === "GET") {
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     res.end(JSON.stringify({ message: "Ini GET dari /api" }));
    //   } else if (req.method === "OPTIONS") {
    //     res.writeHead(204);
    //     res.end();
    //   } else {
    //     res.writeHead(405);
    //     res.end("Method Not Allowed");
    //   }

    //   case path login
    case "/login":
      fs.readFile("../../auth/login/auth-login.html", (err, login) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("404 not found");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(login);
      });
      break;

    //   case path sign in

    case "/sign":
      fs.readFile("../../auth/sign/auth-sign.html", (err, sign) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write("404 not found");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(sign);
      });
      break;

    //   external css,js,efek

    case "/auth-login.css":
      fs.readFile("../../auth/login/auth-login.css", (err, css) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(css);
      });
      break;

    //   sign css

    case "/auth-sign.css":
      fs.readFile("../../auth/sign/auth-sign.css", (err, css) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(css);
      });
      break;

    case "/auth-login.js":
      fs.readFile("../../js/auth/auth-login.js", (err, js) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.end(js);
      });
      break;

    case "/auth-sign.js":
      fs.readFile("../../js/auth/auth-sign.js", (err, js) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.end(js);
      });
      break;

    case "/coffe.png":
      fs.readFile("../../image/auth-image/coffe.png", (err, png) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(png);
      });
      break;

    case "/image-person.png":
      fs.readFile("../../image/auth-image/image-person.png", (err, png) => {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(png);
      });
      break;

    case "/Desain-tanpa-judul.png":
      fs.readFile(
        "../../image/auth-image/Desain-tanpa-judul.png",
        (err, png) => {
          if (err) throw err;

          res.writeHead(200, { "Content-Type": "image/png" });
          res.end(png);
        }
      );
      break;
  }
});

server.listen(3000, "127.0.0.1", () => {
  try {
    console.log("server berjalan pada : http://127.0.0.1:3000");
  } catch {
    console.log((err) => {
      console.log("Message : ", err);
    });
  }
});
