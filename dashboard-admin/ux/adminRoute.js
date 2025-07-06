const { debug } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "X-Forwaded-Test": "admin",
  });

  switch (req.url) {
    case "/api":
      if (res.statusCode === "200") {
        res.write("status code 200");
      } else {
        const user = {
          user: "admin",
          pass: "123",
        };
        res.write(JSON.stringify(user));
      }

    case "/apiTest":
      fetch("http://127.0.0.1:5500/data-product/items/api-produck/produc.js")
        .then((response) => response.json())
        .then((data) => {
          res.write(data);
        })
        .catch((err) => {
          res.write("error Get Data", err);
        });
  }
  res.end();
});

server.listen(3000, "127.0.0.1", debug, () => {
  console.log("url berjalan pada http://localhost:3000");
});
