var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Product.findAll({}).then(function(dbExamples) {
  //     res.render("./public", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  app.get("/postform", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/posctform.html"));
  });

  app.get("/category", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
