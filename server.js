const inquirer = require('inquirer');
const mysql = require('mysql2');

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