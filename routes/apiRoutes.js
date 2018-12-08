var db = require("../models");

module.exports = function(app) {
  // Get all characters
  app.get("/api/characters", function(req, res) {
    db.characters.findAll({}).then(function(dbCharacters) {
      res.json(dbCharacters);
    });
  });

  // Create a new character
  app.post("/api/characters", function(req, res) {
    db.Character.create(req.body).then(function(dbCharacter) {
      res.json(dbCharacter);
    });
  });

  // Delete an character by id
  app.delete("/api/characters/:id", function(req, res) {
    db.Character.destroy({ where: { id: req.params.id } }).then(function(dbCharacter) {
      res.json(dbCharacter);
    });
  });
};
