const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "employees"
});

connection.connect(function(err) {
    if (err) throw err;