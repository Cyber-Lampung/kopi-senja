const http = require("http");
const path = require("path");
const fs = require("fs");

const extention = {
  ".html": { "Content-Type": "text/html" },
  ".css": { "Content-Type": "text/css" },
  ".js": { "Content-Type": "application/javascript" },
  ".png": { "Content-Type": "image/png" },
  ".webp": { "Content-Type": "image/webp" },
  ".jpg": { "Content-Type": "image/jpg" },
};

const server = http.createServer((req, res) => {
  fs.readFile("../../" + req.url, (err, data) => {
    for (const ext in extention) {
      const found = req.url.endsWith(ext);
      if (err) throw err;

      if (found === true) {
        res.writeHead(200, extention[ext]);
        res.write(data);
        res.end();
      }
    }
  });

  if (req.url === "/") {
    console.log("home");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server berjalan di port 3000");
});
