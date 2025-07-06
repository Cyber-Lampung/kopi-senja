let mysql = require("mysql");

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  pass: "",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("connection");
});
