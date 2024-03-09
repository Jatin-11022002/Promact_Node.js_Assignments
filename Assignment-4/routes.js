// Importing necessary modules
const express = require("express");
const router = express.Router(); // Creating a router instance
const {
  renderUserForm,
  renderUsersPage,
  handleFormSubmission,
} = require("./controller/users.js"); // Importing route handler functions from controller module

// Routes
// Route to display the form
router.route("/").get(renderUserForm);

// Route to handle form submission and display users page
router.route("/users").post(handleFormSubmission).get(renderUsersPage);

// Exporting the router for use in the main application
module.exports = router;
