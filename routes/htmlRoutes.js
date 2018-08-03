var db = require("../models");
var path = require("path");

module.exports = function(app) {

  app.get("/postform", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/postItem.html"));
  });

  app.get("/featured", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/featured.html"));
  });

  app.get("/electronics", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/electronics.html"));
  });

  app.get("/furniture", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/furniture.html"));
  });

  app.get("/books", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/books.html"));
  });

  app.get("/housing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/housing.html"));
  });

  app.get("/clothing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/clothing.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  app.get("/product", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/product.html"));
  });



  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
