const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'localhost', // host for connection
    port: 3306, // default port for mysql is 3306
    database: 'rest_test', // database from which we want to connect out node application
    user: 'root', // username of the mysql connection
    password: '' // password of the mysql connection
});

module.exports = connection;