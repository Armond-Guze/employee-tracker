const mysql = require('mysql2');

const connection = mysql.connection({
    host: 'localhost',
    user: 'root',
    password: 'MondiBani99!!',
    database: 'employeetracker_db'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
})

module.exports = connection;