// Importing necessary modules
const express = require("express");
const app = express(); // Creating an Express application instance
const router = require("./route"); // Importing router module

// Set the view engine to use EJS
app.set("view engine", "ejs"); // Setting EJS as the view engine

// Middleware to parse form data
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data

// Attaching routes defined in the router module to the application
app.use("/", router); // Using the router middleware

// Start the server
const PORT = process.env.PORT || 3000; // Setting the port to either the environment variable or defaulting to 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Logging server start message with the port number
});
