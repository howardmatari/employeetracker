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

// start()

// function addEmployee () {
//     console.log("add new Employee");
//     inquirer
//     .prompt([
//     {
//         type: "input",
//         message: "First Name?",
//         name: "first_name",
//     },
//      {
//         type: "input",
//         message: "Last Name?",
//         name: "last_name", 
//      },
//      {
//         type: "list",
//         message: "What is the employees role?",
//         name: "role_id", 
//         choices: [1,2,3,4,5,6,7,8],
//      },
//      {
//         type: "list",
//         message: "Who is their manager?",
//         name: "manager_id",
//      },
//     ])
//     .then (function(res) {
//         const query = connection.query(
//             "INSERT INTO Employees SET ?",
//             res,
//             function(err,res) {
//                 if (err) throw err;
//                 console.log("Employee added!");

//                 start();
//             };
//             );
//           });
//       }

//     function (viewAllEmployees){
//         connection.query(
//             'SELECT employees.first_name, employees.last_name, roles.title AS "Role", managers.first_name AS "manager" FROM employees LEFT JOIN roles ON employees.role_id= roles.id LEFT JOIN employees managers ON employees.manager_id = managers.id GROUP BY employees.id',
//         function (err,res) {
//           if (err) throw err;
//           console.table (res);

//           start ();
//         }
        
//         );

//     }
//     viewAllEmployees ()
//     function removeEmployee (){
//        let employeeList = [];
//        connection.query(
//         'SELECT employees.first_name, employees.last_name FROM employees',
//         (err,res) => {
//         for (let i=0, i < res.length, i++) {
//             employeeList.push (res[i].first_name+" " +res[i].last_name);
//         }
//         inquirer
//         .prompt([
//             {
//                 type: "list",
//                 message: "Which employee would you like to delete?",
//                 name:  "employee",
//                 choices: "employeeList",

//         },
//      ])
//      .then (function (res){
//          const query = connection.query(
//              `DELETE FROM employees WHERE concat (first_name, ' ',last_name) = '${res.employee}'`,
//               function(err, res) {
//               if (err) throw err;
//               console.log("Employee deleted!");
//               start ();

//     }
//    );
// })

//         }
//        );
//     }
//     function addDepartment(){
//       inquirer
//       .prompt([
//         {
//           type: "input",
//           name:  "departmentName",
//           message:  "What department would you like to add?",

//         },
//       ])
//       .then (function (res){
//           console.log(res);
//           const query = connection.query(
//               "INSERT INTO departments SET ?",
//               {
//                   name: res.departmentName,
//               },
//               function (err, res){
//              connection.query ( "SELECT * FROM departments", function (err, res){
//                  console.table (res);
//                  start();
//              });
//             }
//           );
//       });
//     }
//     function (viewAllDepartments){
//         connection.query ( "SELECT * FROM departments", function (err, res){
//             console.table (res);
//             start();
// });

//     }

// function (addRole){
//     let departments =[];
//     connection.query ("SELECT * FROM departments", function (err, res){
//         if (err) throw err;
//         for (i=0, i<res.length, i++){
//             res[i].first_name + " "+res[i].last_name;
//             departments.push({ name: res[i].name, value: res[i].id });
//         }
//         inquirer
//         .prompt([
//          {
//              type: "input",
//              name: "title",
//              message: "What role would you like to add?",
//          },   
//          {
//             type: "input",
//             name: "salary",
//             message: "What is the salary for the role?",
//          },
//          {
//             type: "list",
//             name: "department",
//             message: "What department?",
//             choices: departments,
//          },
//         ])
//         .then (function (res){
//             console.log(res);
//             const query = connection.query(
//                 "INSERT INTO roles SET ?",
//                 {
//                   title: res.title,
//                   salary: res.salary,
//                   department_id: res.department,
//                 },
//                 function (err, res) {
//                 if (err) throw err;
//                 //const id = res.insertId;
//                 start ();

//                 module.import = connection;
//                 }
//             );
//         });
//     });
//}
