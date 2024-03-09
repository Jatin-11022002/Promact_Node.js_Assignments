// Importing necessary modules
const express = require("express");
const router = express.Router(); // Creating a router instance
const {
  renderHomePage,
  renderCreatePage,
  renderUsersPage,
  handleUserAdd,
} = require("./controller/users.js"); // Importing route handler functions from controller module

// Defining routes and associating handler functions
router.route("/").get(renderHomePage); // Route for rendering the home page

router.route("/users").get(renderUsersPage); // Route for rendering the users page

router.route("/create").get(renderCreatePage); // Route for rendering the create page

router.route("/add").post(handleUserAdd); // Route for handling user addition

module.exports = router; // Exporting the router for use in the main application
