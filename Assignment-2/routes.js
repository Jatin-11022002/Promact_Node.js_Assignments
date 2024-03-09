// Importing necessary modules
const express = require("express");
const router = express.Router(); // Creating a router instance
const {
  // Importing route handlers from controller module
  showUsersHandler,
  greetHandler,
  addUserHandler,
  createUserHandler,
} = require("./controller/users.js");

// Defining routes and associating handlers
router.route("/").get(greetHandler); // Route for greeting page
router.route("/create").get(createUserHandler); // Route for user creation form
router.route("/add").post(addUserHandler); // Route for adding a user
router.route("/users").get(showUsersHandler); // Route for displaying users

module.exports = router; // Exporting the router for use in the main application
