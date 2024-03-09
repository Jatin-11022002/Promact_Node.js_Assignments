// Importing necessary modules
const express = require("express");

// Array to store usernames
const users = [];

// Handler function to render the user form
const renderUserForm = (req, res) => {
  res.render("index"); // Rendering the index view
};

// Handler function to handle form submission
const handleFormSubmission = (req, res) => {
  const username = req.body.username; // Extracting username from form data
  users.push(username); // Adding username to the users array
  res.redirect("/users"); // Redirecting to the users page
};

// Handler function to render the users page
const renderUsersPage = (req, res) => {
  res.render("users", { users }); // Rendering the users view and passing the users array as data
};

// Exporting handler functions for external use
module.exports = { renderUserForm, renderUsersPage, handleFormSubmission };
