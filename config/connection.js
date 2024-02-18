const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DB_PASSWORD',
    database: 'DB_NAME'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
})

module.exports = connection;