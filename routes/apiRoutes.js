var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the products
  // WORKING
  app.get("/api/product/", function(req, res) {
    db.Product.findAll({})
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  // Get route for returning products of a specific category
  // WORKING
  app.get("/api/product/category/:category", function(req, res) {
    db.Product.findAll({
      where: {
        product_category: req.params.category
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  app.get("/api/product/category/electronics", function(req, res) {
    db.Product.findAll({
      where: {
        product_category: Electronics
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  app.get("/api/product/category/furniture", function(req, res) {
    db.Product.findAll({
      where: {
        product_category: Furniture
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  app.get("/api/product/category/books", function(req, res) {
    db.Product.findAll({
      where: {
        product_category: Books
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  app.get("/api/product/category/housing", function(req, res) {
    db.Product.findAll({
      where: {
        product_category: Housing
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  app.get("/api/product/category/clothing", function(req, res) {
    db.Product.findAll({
      where: {
        product_category: Clothing
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  // get route for featured products  
  // WORKING
  app.get("/api/product/featured", function(req, res) {
    db.Product.findAll({
      where: {
        featured_product: 1
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });
  // get route for open searched products  
  // WORKING
  app.get("/api/product/search/:searchterm", function(req, res) {
    db.Product.findAll({
      where: {
        product_name: req.params.searchterm
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  // Get route for retrieving a single product
  // WORKING
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

    app.get("/books/:id", function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  });

  // Get route for retrieving all products by username
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
  // WORKING
  app.post("/api/productpost", function(req, res) {
    console.log(req.body);
    db.Product.create({
      product_name: req.body.product_name,
      product_category: req.body.product_category,
      product_condition: req.body.product_condition,
      image_url: req.body.image_url,
      product_description: req.body.product_description,
      product_price: req.body.product_price,
      product_location: req.body.product_location,
      user_id: req.body.user_id
    })
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
      lastname: req.body.lastname_input,
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

