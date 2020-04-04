
var notes = require("../db/notes");


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    // Returns the data from the db.json file
    res.json(notes.readNotes());
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    notes.saveNotes(newNote);
    res.json(true);
  });

  app.delete("/api/notes/:id", function(req, res) {
    // TODO: delete notes from json
    var id = req.params.id;
    notes.deleteNote(id);
    res.json(true);
  })

  app.post("/api/clear", function(req, res) {
    // Empty out the json
    notes.clearNotes();
    res.json(true);
  });
};
