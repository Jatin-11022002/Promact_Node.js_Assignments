// Importing the mysql2 module
const mysql = require("mysql2");

// Creating a connection pool using the mysql.createPool method
const pool = mysql.createPool({
  host: "localhost", // MySQL database host
  user: "root", // MySQL user
  database: `promact_assignment`, // Name of the database
  password: "1234", // Password for the database user
});

// Exporting the promise interface of the connection pool for handling asynchronous operations
module.exports = pool.promise();
