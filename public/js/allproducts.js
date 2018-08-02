$(document).ready(function(){

    $.get("api/product", function(data){
    console.log(data);
    displayFeatured(data);
  })

  
  function displayFeatured(data){

    data.forEach(function(dataObj){
      var newDiv = $("<div class='col-md-4'>");
      var newCard = $("<div class ='card'>");
      var productImageCont = $('<div class="productimagecontainer">')
      var newCardBody = $("<div class='card-body'>");
      var itemName = $("<p id='product_name'>");
      var itemPrice = $("<p id='product_location'>");
      var featuredBadge = $('<img src="./images/featured_btn.png">');
      var productImage = $("<img id='product_image' class='' src=https://picsum.photos/1400/1400?random>")
      var productImage = $("<img id='product_image' class='' src=" + dataObj.image_url + ">")
      

      newCardBody.append(featuredBadge, itemName, itemPrice)

      productImageCont.append(productImage)

      newCard.append(productImageCont,newCardBody)
      
      newDiv.append(newCard)

      itemName.append(dataObj.product_name);
      itemPrice.append(dataObj.product_price);

      $(".product_container").append(newDiv);

      // $("productimagecontainer").append(productImage);

    });
  }

})