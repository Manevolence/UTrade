$(document).ready(function() {
    
})

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