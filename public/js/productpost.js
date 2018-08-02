$(document).ready(function () {
    var url = window.location.search;
    var productId;

    var updating = false;

    if (url.indexOf("?id=") !== -1) {
        productId = url.split("=")[1];
        getProductData(productId);
    }

    var productForm = $("#productForm");
    var productName = $("#productname_input");
    var productPrice = $("#productprice_input");
    var productCategory = $("#productcategory_input");
    var productDescription = $("#productdescription_input");
    var productCondition = $("#product_condition")
    var productImage = $("#productimage_url");

    $(productForm).on("submit", function handleFormSubmit(event) {
        event.preventDefault();
        var newProduct = {
            product_name: productName.val().trim(),
            product_category: productCategory.val().trim(),
            product_price: productPrice.val().trim(),
            product_description: productDescription.val().trim(),
            product_condition: productCondition.val().trim()
            // image_url: productImage.val().trim
        }

        console.log(newProduct);

        submitProduct(newProduct);
    })
});

function submitProduct(Product) {
    $.post("/api/productpost", Product, function() {
        // window.location.href = "/postform";
        console.log("hit");
    })
}