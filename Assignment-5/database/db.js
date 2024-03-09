// Importing the mysql2 module
const mysql = require("mysql2");

// Creating a connection pool using the mysql.createPool method
const pool = mysql.createPool({
  host: "localhost", // MySQL database host
  user: "root", // MySQL user
  password: "1234", // Password for the database user
  database: "promact_assignment", // Name of the database
});

// Exporting the promise interface of the connection pool for handling asynchronous operations
const connectionPromise = pool.promise();

// Function to create required tables if they don't exist
async function createTables() {
  try {
    // Creating users table if it doesn't exist
    await connectionPromise.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL
      )
    `);
    console.log("Users table created successfully");

    // Add more table creation queries here if needed
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

// Call the function to create tables when the application starts
createTables();

// Exporting the connection pool promise for use in other modules
module.exports = connectionPromise;
