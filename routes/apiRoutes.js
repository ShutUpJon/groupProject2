var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/characters", function(req, res) {
    db.Character.findAll({}).then(function(dbCharacter) {
      res.json(dbCharacter);
      
    });
  });

  // Create a new example
  app.post("/api/characters", function(req, res) {
    db.Character.create(req.body).then(function(dbCharacter) {
      res.json(dbCharacter);
    });
  });

  // Delete an example by id
  app.delete("/api/characters/:id", function(req, res) {
    db.Character.destroy({ where: { id: req.params.id } }).then(function(dbCharacter) {
      res.json(dbCharacter);
    });
  });
};
