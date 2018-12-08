var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.characters.findAll({}).then(function(dbCharacters) {
      res.render("index", {
        msg: "Welcome!",
        characters: dbCharacters
      });
    });
  });

  // Load example page and pass in an character by id
  app.get("/character/:id", function(req, res) {
    db.characters
      .findOne({ where: { id: req.params.id } })
      .then(function(dbCharacters) {
        res.render("character", {
          character: dbCharacters
        });
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
