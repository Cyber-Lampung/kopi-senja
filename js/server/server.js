const http = require("http");
// const path = require("path");
// const fs = require("fs");

// const extention = {
//   ".html": { "Content-Type": "text/html" },
//   ".css": { "Content-Type": "text/css" },
//   ".js": { "Content-Type": "application/javascript" },
//   ".png": { "Content-Type": "image/png" },
//   ".webp": { "Content-Type": "image/webp" },
//   ".jpg": { "Content-Type": "image/jpg" },
// };

// const server = http.createServer((req, res) => {
//   fs.readFile("../.." + req.url, (err, data) => {
//     for (const ext in extention) {
//       const found = req.url.endsWith(ext);

//       if (found === true) {
//         res.writeHead(200, extention[ext]);
//         res.write(data);
//         res.end();
//       }
//     }
//   });
// });

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//   console.log(`Server berjalan di port ${PORT}`);
// });

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });

    fetch("http://localhost:3000/api")
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Message : ", error);
      });
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server berjalan pada http://localhost:3000/api");
});
