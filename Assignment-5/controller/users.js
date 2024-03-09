// Importing necessary modules
const db = require("../database/db.js"); // Importing database module

// Handler function to render the home page
const renderHome = (req, res) => {
  res.render("home.ejs"); // Rendering the home page view
};

// Handler function to render the user form
const renderUserForm = (req, res) => {
  res.render("user_form.ejs"); // Rendering the user form view
};

// Handler function to add a user to the database
const addUser = async (req, res) => {
  try {
    const username = req.body.username; // Extracting username from request body
    // Executing SQL query to insert user into the database
    const response = await db.execute(`
      INSERT INTO promact_assignment.users
      (user_name) VALUES ('${username}');
    `);
    res.redirect("/users"); // Redirecting to the users page after successful addition
  } catch (error) {
    // Sending error response if there's an error saving user
    res.status(500).send("Error saving user");
  }
};

// Handler function to render the users page
const renderUsers = async (req, res) => {
  // Executing SQL query to retrieve all users from the database
  const response = await db.execute(`SELECT * FROM promact_assignment.users`);
  res.render("users.ejs", { users: response[0] }); // Rendering the users page view with the retrieved users data
};

// Exporting handler functions for external use
module.exports = { renderHome, addUser, renderUserForm, renderUsers };
