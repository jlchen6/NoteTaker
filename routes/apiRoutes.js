// Import the functions that directly edit the json file
var notes = require("../db/notes");

// The module that will be exported. In this case, we are exporting a function so that we can pass in the app object to use further down in the code.
module.exports = function(app) {

  // create an API get method that returns the data stored in the json file
  app.get("/api/notes", function(req, res) {
    // Returns the data from the db.json file
    res.json(notes.readNotes());
  });

  // Create an API post method that saves a note to the json file
  app.post("/api/notes", function(req, res) {
    // Save the submitted note to the json file
    notes.saveNotes(req.body);
    res.json(true);
  });

  // Create an API delete method that deletes the note with the given id from the json file
  app.delete("/api/notes/:id", function(req, res) {
    // Grab the id parameter from the route
    var id = req.params.id;
    // Delete the note with the given id from the json file
    notes.deleteNote(id);
    res.json(true);
  })

};
