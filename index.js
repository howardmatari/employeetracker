const inquirer = require("inquirer");
require("console.table");
const connection = require("./connection.js");

function start (){
    inquirer
    .prompt ([
{
    type: "lists",
    message: "What would you like to do?",
    name: "start",
    choices: [
        "Add employee",
        "View all employees",
        "Remove an employee",
        "Add department",
        "View all departments",
        "Add role",
        "View all roles",
        "Update employee role",
        "Exit",
    ],
},
    ])
    .then (function(res){
        console.log(res);
        switch (res.start) {
            case "Add an Employee":
                addEmployee ();
                break;

            case "View all Employees":
                viewAllEmployees ();
                break;

            case "Remove Employee":
                removeEmployee ();
                break;

            case "Add Department":
                addDepartment ();
                break;

            case "View all Departments":
                    viewAllDepartments ();
                break;

            case "Add Roles":
                addRoles ();
                break;

            case "View all Roles":
                 viewAllRoles ();
                 break;

            case "Update Employee Role":
                updateEmployeeRole ();
                break;

            case "Exit":
                connection.end
                break;
        }
    });
}
