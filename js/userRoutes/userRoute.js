const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.write("Home Routing");
      res.end();
      break;

    case "/admin":
      res.write("admin page Routing");
      res.end();
      break;

    case "/index":
      fs.readFile("../../index/index.html", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          res.write("gagal");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
        }
        res.end();
      });
      break;

    case "/index.css":
      fs.readFile("../../index/index.css", (err, data) => {
        if (err) {
          res.writeHead("404", { "Content-Type": "text/plain" });
          res.write("Css file not found");
        } else {
          res.writeHead(200, { "Content-Type": "text/css" });
          res.write(data);
        }
        res.end();
      });
      break;

    case "/index.js":
      fs.readFile("../../index/index.js", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write("no file js");
        } else {
          res.writeHead(200, { "Content-Type": "application/javascript" });
          res.write(data);
        }
        res.end();
      });
      break;

    case "/produc.js":
      fs.readFile(
        "../../data-product/items/api-produck/produc.js",
        (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("404 file produc api not found");
          } else {
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.write(data);
          }
          res.end();
        }
      );
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 not fount");
      res.end();
  }
});

server.listen(2007, "127.0.0.1", () => {
  console.log("url berjalan pada http://127.0.0.1:2007");
});
