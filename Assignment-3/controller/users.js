// Importing necessary modules
const express = require("express");
const fs = require("fs");
const path = require("path");

// Handler function to render the home page
const renderHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "src", "home.html"));
};

// Handler function to render the users page
const renderUsersPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "src", "users.html"));
};

// Handler function to render the create page
const renderCreatePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../", "src", "create.html"));
};

// Handler function to handle user addition
const handleUserAdd = (req, res) => {
  const { username } = req.body;
  // Appending user input to a file
  fs.appendFile("users.txt", `${username}\n`, (err) => {
    if (err) {
      // Sending error response if there's an error saving user
      res.status(500).send("Error saving user");
    } else {
      // Redirecting to the create page after successful user addition
      res.redirect("/create");
    }
  });
};

// Exporting handler functions for external use
module.exports = {
  renderHomePage,
  renderCreatePage,
  renderUsersPage,
  handleUserAdd,
};
