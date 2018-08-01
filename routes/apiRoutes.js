// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the products
  app.get("/api/product/", function(req, res) {
    db.Product.findAll({})
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  // Get route for returning products of a specific category
  app.get("/api/product/category/:category", function(req, res) {
    db.Product.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });
  // get route for featured products  
  app.get("/api/product/featured/:featured", function(req, res) {
    db.Product.findAll({
      where: {
        category: req.params.featured
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });
  // get route for open searched products  
  app.get("/api/product/search/:searchterm", function(req, res) {
    db.Product.findAll({
      where: {
        category: req.params.searchterm
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  // Get route for retrieving a single product
    app.get("/api/product/:id", function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  // Get route for retrieving all products for author
  app.get("/api/product/:author", function(req, res) {
    db.Product.findAll({
      where: {
        id: req.params.userid
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });
  // POST route for saving a new product
  app.post("/api/product", function(req, res) {
    console.log(req.body);
    db.Product.create({
      product_name: req.body.product_name_input,
      product_category: req.body.product_category_input,
      product_condition: req.body.product_condition_input,
      image_url: req.body.image_url_input,
      product_featuerd: req.body.featured_input,
      product_description: req.body.product_description_input,
      product_price: req.body.product_price_input,
      product_location: req.body.product_location_input,
      featured_product: req.body.featured_product_input,
      user_id: req.body.user_id_input
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  // DELETE route for deleting products
  app.delete("/api/product/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbProducts) {
        res.json(dbProducts);
      });
  });

  // PUT route for updating products
  app.put("/api/product", function(req, res) {
    db.product.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });
  // GET route for getting all of the profiles
  app.get("/api/profile/", function(req, res) {
    db.Product.findAll({})
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  // Get route for returning profiles of a specific category
  app.get("/api/profile/category/:category", function(req, res) {
    db.Profile.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbProfile) {
        res.json(dbProfile);
      });
  });

  // Get route for retrieving a single prodfile
    app.get("/api/profile/:id", function(req, res) {
    db.Profile.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbProfile) {
        res.json(dbProfile);
      });
  });

  // POST route for saving a new profile need to update !!!
  app.post("/api/profile", function(req, res) {
    console.log(req.body);
    db.Profile.create({      
      firstname: req.body.firstname_input,
      lastname: req.body.lsatname_input,
      email: req.body.email,
      phone_number: req.body.phone_number_input,
      location: req.body.location_input
    })
      .then(function(dbProfile) {
        res.json(dbProfile);
      });
  });

  // DELETE route for deleting profiles
  app.delete("/api/profile/:id", function(req, res) {
    db.Profile.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbProfile) {
        res.json(dbProfile);
      });
  });

  // PUT route for updating profiles
  app.put("/api/profile", function(req, res) {
    db.Profile.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbProfile) {
        res.json(dbProfile);
      });
  });
};

