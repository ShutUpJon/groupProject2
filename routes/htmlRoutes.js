var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Character.findAll({}).then(function(dbCharacter) {
      res.render("index", {
        msg: "Welcome!",
        character: dbCharacter
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Character.findOne({ where: { id: req.params.id } }).then(function(dbCharacter) {
      res.render("example", {
        character: dbCharacter
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
}