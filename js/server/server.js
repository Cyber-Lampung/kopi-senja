const http = require("node:http");
const express = require("express");

app = express();

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hello word");
});

server.listen(port, hostname, () => {
  console.log(`Server Berjalan di http:/${hostname}:${port} `, (debug = true));
});
