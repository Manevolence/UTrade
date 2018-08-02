$(document).ready(function() {
  /* global moment */

  // blogContainer holds all of our posts
  var productsContainer = $(".productscontainer");
  var postCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handlePostDelete);
  $(document).on("click", "button.edit", handlePostEdit);
  // Variable to hold our products
  var product;

  // The code below handles the case where we want to get blog posts for a specific author
  // Looks for a query param in the url for author_id
  var url = window.location.search;
  var featuredProducts = 1;
  if (url.indexOf("?author_id=") !== -1) {
    authorId = url.split("=")[1];
    getPosts(featuredProducts);
  }
  // If there's no authorId we just get all posts as usual
  else {
    getPosts();
  }


  // This function grabs posts from the database and updates the view
  function getPosts(featuredProducts) {
    $.get("/api/product/featured" + featuredProducts, function(data) {
      console.log("Products", data);
      product = data;
      if (!product || !products.length) {
        displayEmpty(featuredProducts);
      }
      else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete posts
  function deleteProduct(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/product/" + id
    })
      .then(function() {
        getPosts(postCategorySelect.val());
      });
  }

  // InitializeRows handles appending all of our constructed post HTML inside blogContainer
  function initializeRows() {
    productsContainer.empty();
    var productsToAdd = [];
    for (var i = 0; i < product.length; i++) {
      productsToAdd.push(createNewRow(product[i]));
    }
    productsContainer.append(postsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(product) {
    var image_url = product.image_url;
    var newProductCol = $("<div>");
    newProductCol.addClass("col-md-4");
    var newProductCard = $("<div>");
    newProductCard.addClass("card");
    var newPostCardimage= $("<div>")
    newPostCardimage.addclass("productimagecontainer")
    var newImage = $("<img id=product_image");
    newImage.addClass("");
    newImage.text("alt=`card image Cap`");
    newImage.text("src=");
    newImage.text(image_url);     
    newProductbody = $("<div>");
    newProductbody.addclass("card-body")
    newProductbody.text("<img src=");
    Productbody.text("./images/electronics_btn.png");
    Productbody.text("alt="); 
    var Productbodyp = $("<p>");
    Productbodyp.text("id=`product_name`>");  
    Productbodyp.text(product.product_name);
    var Productbodyp2 = $("<p>");
    Productbodyp2.text("id=`product_location`>");
    Productbodyp2.text(product.product.location); 
    
    // Productbody.text(Product_location);
     
    newProductCol.append(newProductCol);
    newProductCol.append(newProductCard);
    newProductCol.append(newPostCardimage);
    newProductCol.append(newImage);
    newProductCol.append(newProductbody);
    newProductCol.append(Productbody);
    newProductCol.append(Productbody2);
    // var newProductCardBody = $("<div>");
    // newProductCardBody.addClass("card-body");
    // var newPostBody = $("<p>");
    // newPostTitle.text(post.title + " ");
    // newPostBody.text(post.body);
    // newPostDate.text(formattedDate);
    // newPostTitle.append(newPostDate);
    // newPostCardHeading.append(deleteBtn);
    // newPostCardHeading.append(editBtn);
    // newPostCardHeading.append(newPostTitle);
    // newPostCardHeading.append(newPostAuthor);
    // newPostCardBody.append(newPostBody);
    // newPostCard.append(newPostCardHeading);
    // newPostCard.append(newPostCardBody);
    // newPostCard.data("post", post);
    return newProductCol;
  }

  // This function figures out which post we want to delete and then calls deletePost
  function handlePostDelete() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    deletePost(currentPost.id);
  }

  // This function figures out which post we want to edit and takes it to the appropriate url
  function handlePostEdit() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    window.location.href = "/cms?post_id=" + currentPost.id;
  }

  // This function displays a message when there are no posts
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for Author #" + id;
    }
    blogContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
    "'>here</a> in order to get started.");
    blogContainer.append(messageH2);
  }

});
