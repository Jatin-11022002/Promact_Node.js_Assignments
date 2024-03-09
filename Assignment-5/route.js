// Importing necessary modules
const express = require("express");
const router = express.Router(); // Creating a router instance
const {
  renderHome,
  addUser,
  renderUserForm,
  renderUsers,
} = require("./controller/users.js"); // Importing route handler functions from controller module

// Routes
// Route to render the home page
router.route("/").get(renderHome);

// Route to render the user form
router.route("/create").get(renderUserForm);

// Route to handle adding a user
router.route("/add").post(addUser);

// Route to render the users page
router.route("/users").get(renderUsers);

// Route for 404 page
router.use((req, res) => {
  res.status(404).render("Error_404.ejs"); // Render a 404 page if no other routes match
});

// Exporting the router for use in the main application
module.exports = router;
