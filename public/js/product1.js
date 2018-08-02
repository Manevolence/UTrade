$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var productId;
  // Sets a flag for whether or not we're updating a product to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the product id from the url
  // In localhost:8080/cms?post_id=1, postId is 1
  if (url.indexOf("?id=") !== -1) {
    productId = url.split("=")[1];
    getProductData(productId);
  }

  // Getting jQuery references to the product body, title, form, and category select
  // var bodyInput = $("#body");
  // var titleInput = $("#title");
  var productForm = $("#productForm");
  var postCategorySelect = $("#category");
  // Giving the postCategorySelect a default value
  // postCategorySelect.val("Personal");
  // Adding an event listener for when the form is submitted
  $(productForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the product if we are missing a body or a title
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
    // Constructing a newProduct object to hand to the database
    var newProduct = {
      product_name: productname_input.val().trim(),
      product_category: productcategory_input.val().trim(),
      product_price: productprice_input.val().trim(),
      product_description: productdescription_input.val().trim(),
      product_condition: product_condition.val().trim()
      // category_id: categoryInput.val().trim(),
      // product_name: product_name_Input.val().trim(),
      // product_category: product_category_Input.val().trim(),
      // product_condition: product_condition_Input.val().trim(), 
      // image_url: product_imageURL_Input.val().trim(),
      // product_description: product_description_Input.val().trim(),
      // product_price: product_price_Input.val(),
      // product_location: product_location.Input.val().trim() 
    };

    console.log(newProduct);

    // If we're updating a product run updateProduct to update a product
    // Otherwise run submitPost to create a whole new product
    if (updating) {
      newProduct.id = productId;
      updateProduct(newProduct);
    }
    else {
      submitProduct(newProduct);
    }
  });

  // Submits a new product and brings user to blog page upon completion
  function submitProduct(Product) {
    $.post("/api/product", Product, function() {
      window.location.href = "/product";
    });
  }

  // // Gets product data for a product if we're editing
  // function getProductData(id) {
  //   $.get("/api/product/" + id, function(data) {
  //     if (data) {
  //       // If this product exists, prefill our product forms with its data
  //       categoryInput.val(data.category_id);
  //       product_name_Input.val(data.product_name);
  //       product_1category_Input.val(data.product_category);
  //       product_condition_Input.val(data.product_condition);
  //       product_imageURL_Input.val(data.image_url);
  //       product_description_Input.val(data.product_description);
  //       product_price_Input.val(data.product_price);
  //       product_Location_Input.val(data.product_location);

  //       // If we have a product with this id, set a flag for us to know to update the post
  //       // when we hit submit
  //       updating = true;
  //     }
  //   });
  // }

  // // Update a given product, bring user to the product page when done
  // function updateProduct(Product) {
  //   $.ajax({
  //     method: "PUT",
  //     url: "/api/product",
  //     data: Product
  //   })
  //     .then(function() {
  //       window.location.href = "/product";
  //     });
  // }
});
