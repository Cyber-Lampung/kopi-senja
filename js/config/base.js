let mysql = require("mysql");

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  pass: "",
});

console.log(conn);
