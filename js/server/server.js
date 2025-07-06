const http = require("http");
const ReadFile = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

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
    }
    res.end();
  })
  .listen(3000);

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
