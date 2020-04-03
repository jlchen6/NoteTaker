
var notes = require("../db/notes");


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    // TODO: retrieve notes from the json
  });

  app.post("/api/notes", function(req, res) {
    // TODO: save notes to the json
  });


  app.post("/api/clear", function(req, res) {
    // Empty out the json
    
  });
};
