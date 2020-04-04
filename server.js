// Import express library to set up server application
const express = require("express");

// Create a server application object
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Calls external code functions to set up server routes
// Sets up the api routes
require("./routes/apiRoutes")(app);
// Sets up the routes that will display html pages
require("./routes/htmlRoutes")(app);

// Listener that "starts" the server.
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });