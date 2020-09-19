// function insertProduct(item_name,category,starting_bid) {
//     connection.query(`INSERT INTO auctions SET ?`,{item_name,category,starting_bid,highest_bid:starting_bid},function(error,results) {
//         if(error) {
//             console.log(error);
//             connection.end();
//         } else {
//             console.log("Your product has been posted!!");
//             startAuction();
//         }
//   })
// }
// ​
// function updateProduct(values,conditions) {
//     connection.query(`UPDATE auctions SET ? WHERE ?`,[values,conditions],function(error,results) {
//         if(error) {
//             console.log(error);
//             connection.end();
//         } else {
//             console.log("Your bid has been placed!!! You are the new highest bidder.");
//             startAuction();
//         }
//   })
// }
// function postProduct() {
//     inquirer.prompt([
//         {
//             type:"input",
//             message:"What do you want to post?",
//             name:"item_name"
//         },
//         {
//             type:"input",
//             message:"What category do you want to post in?",
//             name:"category"
//         },
//         {
//             type:"input",
//             message:"What is the starting bid?",
//             name:"starting_bid"
//         }
//     ]).then(product=>{
//         insertProduct(product.item_name,product.category,product.starting_bid);
//     })
// }
// function placeBid() {
//     connection.query("SELECT * FROM auctions",(error,listOfProducts)=> {
//         const productsNames=listOfProducts.map((product)=>product.item_name);
//         inquirer.prompt([{
//             type:"list",
//             message:"What product do you want to bid on?",
//             choices:productsNames,
//             name:"item_name"
//         },{
//             type:"input",
//             message:"How much do you want to bid?",
//             name:"amount"
//         }]).then((response)=>{
//             const name=response.item_name;
//             const product=listOfProducts.find((product)=>product.item_name==name);
//             if(product.highest_bid>=response.amount) {
//                 console.log("Your bid is too low!!!");
//                 startAuction();
//             } else {
//                 updateProduct({
//                     highest_bid:response.amount
//                 },{
//                     id:product.id
//                 })
//             }
// ​
//         })
//     })
// }
// ​
// function startAuction() {
//     inquirer.prompt([{
//         type:"list",
//         message:"What would you like to do?",
//         choices:["POST","BID","EXIT"],
//         name:"action"
//     }]).then(response=>{
//         if(response.action=="POST") {
//             postProduct();
//         } else if(response.action=="EXIT") {
//             connection.end();
//         } else {
//             placeBid();
//         }
//     })
// }
// connection.connect(function(err) {
//   if (err) throw err;
//   startAuction();
  
// });
const {prompt} = require("inquirer");
require("console.table");


function start(){
    inquirer
    .prompt ([
      {
        type: "list", 
        message: "What would you like to do?",
        name: "start",
        choices: [
        "Add Employee", 
        "View all Employees", 
        "Remove Employee",
        "Add Department", 
        "View all Departments",
        "Add Roles", 
        "View all Roles", 
        "Update Employee Role", 
        "Exit"
      ]
      }
    ])
    .then (function(res){
      switch (res.start){
  
        case "Add Employee":
        addEmployee();
        break;
       
        case "View all Employees":
        viewAllEmployees();
        break; 
  
        case "Remove Employee": 
        removeEmployee(); 
        break;
      
        case "Add Department": 
        addDept(); 
        break;
  
        case "View all Departments":
        viewAllDept();
        break;
  
        case "Add Roles": 
        addRole(); 
        break;
  
        case "View all Roles": 
        viewAllRoles(); 
        break;
      
        case "Update Employee Role":
        updateEmployeeRole(); 
        break;
  
        case "Exit":
        connection.end(); 
        break; 
      }
    })
  }
  
  function addEmployee() {
  console.log("Inserting a new employee.");
  inquirer 
    .prompt ([ 
      {
        type: "input", 
        message: "First Name?",
        name: "first_name",
      },
      {
        type: "input", 
        message: "Last Name?",
        name: "last_name"
      },
      {
        type: "list",
        message: "What is the employee's role?",
        name: "role_id", 
        choices: [1,2,3,4,5,6,7,8]
      },
      {
        type: "input", 
        message: "Who is their manager?",
        name: "manager_id"
      }
    ])
    .then (function(res){
      const query = connection.query(
        "INSERT INTO employees SET ?", 
       res,
        function(err, res) {
          if (err) throw err;
          console.log( "Employee added!");
  
          start (); 
        }
      );    
    })
  }
  function viewAllEmployees() {
  
    connection.query("SELECT employees.first_name, employees.last_name, roles.title AS \"role\", managers.first_name AS \"manager\" FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN employees managers ON employees.manager_id = managers.id GROUP BY employees.id",  
    function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      start();
    });
  }
  
  function removeEmployee(){
    let employeeList = [];
    connection.query(
      "SELECT employees.first_name, employees.last_name FROM employees", (err,res) => {
        for (let i = 0; i < res.length; i++){
          employeeList.push(res[i].first_name + " " + res[i].last_name);
        }
    inquirer 
    .prompt ([ 
      {
        type: "list", 
        message: "Which employee would you like to delete?",
        name: "employee",
        choices: employeeList
  
      },
    ])
    .then (function(res){
      const query = connection.query(
        `DELETE FROM employees WHERE concat(first_name, ' ' ,last_name) = '${res.employee}'`,
          function(err, res) {
          if (err) throw err;
          console.log( "Employee deleted!");
       start();
      });
      });
      }
        );
        };
  
  function addDept(){
    inquirer
    .prompt([
      {
        type: "input",
        name: "deptName", 
        message: "What Department would you like to add?"
      }
    ])
    .then(function(res){
      console.log(res);
      const query = connection.query(
        "INSERT INTO departments SET ?", 
        {
          name: res.deptName
        }, 
        function(err, res){
          connection.query("SELECT * FROM departments", function(err, res){
            console.table(res); 
            start(); 
          })
        }
      )
    })
  }
  
  function viewAllDept(){
  connection.query ("SELECT * FROM departments", function(err, res){
    console.table(res);
    start();
  })
  }
  
  function addRole() {
    let departments= []; 
  connection.query("SELECT * FROM departments", function(err,res){
    if(err) throw err;
    for (let i=0; i <res.length; i++){
      res[i].first_name + " " + res[i].last_name
      departments.push({name: res[i].name, value: res[i].id});
    }
  inquirer
  .prompt([
    {
      type: "input", 
      name: "title",
      message: "What role would you like to add?"
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary for the role?"
    },
    {
      type: "list",
      name: "department",
      message: "what department?",
      choices: departments
    }
  ])
  .then (function(res){
    console.log(res); 
    const query = connection.query(
      "INSERT INTO roles SET ?",
      {
        title: res.title,
        salary: res.salary,
        department_id: res.department
      }, 
      function (err, res){
        if (err) throw err;
        //const id = res.insertId;
        start(); 
      }
    )
  })
  })
  }