// Importing necessary modules
const http = require("http");
const fs = require("fs");

// Creating a server instance
const server = http.createServer((req, res) => {
  // Setting the content type to HTML
  res.setHeader("Content-Type", "text/html");

  // Handling different routes
  if (req.url === "/") {
    // Home route
    res.write("<h1>Welcome to Page</h1>");
    res.end();
  } else if (req.url === "/create") {
    // Create route with a form
    res.write("<form action='/add' method='POST'>");
    res.write("<label> Enter Name</label>");
    res.write("<input type='text' name='username' placeholder='Enter Name'/>");
    res.write("<button type='submit'>submit</button>");
    res.write("</form>");
    res.end();
  } else if (req.url === "/add" && req.method === "POST") {
    // Handling form submission to add users
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const parsedMessage = parsedBody.split("=")[1];
      // Appending user input to a file
      fs.appendFile("users.txt", `\n${parsedMessage}`, (err) => {
        if (err) throw err;
        res.statusCode = 302;
        res.setHeader("Location", "/users");
        res.end();
      });
    });
  } else if (req.url === "/users") {
    // Displaying list of users
    try {
      const text = fs.readFileSync("users.txt", "utf-8");

      if (text.trim() === "") {
        // If no users, redirect to create route
        res.statusCode = 302;
        res.setHeader("Location", "/create");
        res.end();
      } else {
        // Displaying users if available
        res.write(`<h1>Users:</h1><pre>${text}</pre>`);
        res.end();
      }
    } catch (error) {
      // Handling file read errors
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  } else {
    // Handling undefined routes
    res.statusCode = 404;
    res.end("Not Found");
  }
});

// Listening on port 3000
server.listen(3000, () => {
  console.log("server connected on port 3000");
});
