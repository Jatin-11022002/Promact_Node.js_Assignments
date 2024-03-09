// Importing necessary modules
const express = require("express");
const app = express(); // Creating an Express application instance

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// Importing routes
const router = require("./routes");

// Attaching routes to the application
app.use("/", router);

// Start the server
const PORT = process.env.PORT || 3000; // Setting the port to either the environment variable or defaulting to 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Logging server start message with the port number
});
