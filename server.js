const inquirer = require('inquirer');
// const fs = require("fs");
// const mysql = require('mysql2');

const menu = () => {
    inquirer
    .prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View all employees',
            'View all roles',
            'View all departments',
            'Add employee',
            'Add role',
            'Add department',
            'Update employee role',
            'Quit'
          ]
    })
}

const questions = () => {
    inquirer
      .prompt([
        
        {
          name: 'first_name',
          type: 'input',
          message: 'What is the employee\'s first name?'
        },
        {
          name: 'last_name',
          type: 'input',
          message: 'What is the employee\'s last name?'
        },
        {
          name: 'role_id',
          type: 'input',
          message: 'What is the employee\'s role id?'
        },
        {
          name: 'manager_id',
          type: 'input',
          message: 'What is the employee\'s manager id?'
        }
      ])
    }

    inquirer.prompt(questions).then((responses) => {
        console.log("Generated logo.svg");
        console.log(responses);
    })
menu()
questions()