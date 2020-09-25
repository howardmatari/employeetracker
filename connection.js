// const util = require("util");
// const mysql = require("mysql");
// const connection = require("./connection")

// const connection = mysql.createConnection({
//     host: "localhost",
    // Your username
    // user: "root",
    // Your password
//     password: "root",
//     database: "employees"
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
    // const sql = "CREATE TABLE employees (name VARCHAR(30), id INT, title VARCHAR(30), department_name VARCHAR(30), salary DECIMAL "
    // connection.query(sql, function(err, result) {
        // if (err)
        // throw err;
        // console.log("Table Created");

    
    // })
// });
// module.exports =connection;

// const util = require("util");
// const mysql = require("mysql");
//const connection = require("./connection")

// const connection = mysql.createConnection({
//     host: "localhost",
//     // Your username
//     user: "root",
//     // Your password
//     password: "root",
//     database: "employees"
// });
// connection.connect();
// module.exports = connection;

const util = require("util");
const mysql = require("mysql");
const { start } = require("repl");
const test = require("./index.js")

const connection = mysql.createConnection({
    host: "localhost",

    port: 3307,
   
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "employees"
});

connection.connect(function (err) {
    if (err) throw err;
    // console.log("Connected!");
    test();
  });
//     console.log("Connected!");
//     const sql = "CREATE TABLE employees (name VARCHAR(30), id INT, title VARCHAR(30), department_name VARCHAR(30), salary DECIMAL "
//     connection.query(sql, function(err, result) {
//         if(err)
//             throw err;
//         console.log("Table Created");

        //module.exports =connection;
//     })
// });
module.exports = connection;