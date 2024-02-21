const mysql = require('mysql2');
// require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MondiBani99!!',
    database: 'employeeTracker_db'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
})

module.exports = connection;