// Importing necessary modules
const express = require("express");
const fs = require("fs");

// Handler for greeting page
const greetHandler = (req, res) => {
  res.send("<h1>Welcome to the Page</h1>");
};

// Handler for creating a user form
const createUserHandler = (req, res) => {
  res.send(`
      <form action="/add" method="POST">
        <label> Enter Name</label>
        <input type="text" name="username" placeholder="Enter Name"/>
        <button type="submit">Submit</button>
      </form>
    `);
};

// Handler for adding a user
const addUserHandler = (req, res) => {
  const username = req.body.username;
  // Appending user input to a file
  fs.appendFile("users.txt", `${username}\n`, (err) => {
    if (err) {
      res.status(500).send("Internal Server Error");
    } else {
      res.redirect("/users");
    }
  });
};

// Handler for displaying users
const showUsersHandler = (req, res) => {
  try {
    // Reading users from file
    const users = fs.readFileSync("users.txt", "utf-8").trim();
    if (users === "") {
      // If no users, redirect to create user form
      res.redirect("/create");
    } else {
      // Displaying users if available
      res.send(`<h1>Users:</h1><pre>${users}</pre>`);
    }
  } catch (err) {
    // Handling file read errors
    res.status(500).send("Internal Server Error");
  }
};

// Exporting handlers for external use
module.exports = {
  showUsersHandler,
  greetHandler,
  addUserHandler,
  createUserHandler,
};
