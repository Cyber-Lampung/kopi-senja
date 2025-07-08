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
