// pizza form submit fix user experience.
// var
var sizeValue = ["12.25", "18.55", "21.25"];
var addToCartBtn = $("#add-to-cart-btn");
var productSize = $("#product-size");
var productQuantity = $("#product-quantity");

// init form
$("#low-high-price").html(`${sizeValue[0]} - ${sizeValue[2]} رس`);
productSize.val('0');
productQuantity.val('');
addToCartBtn.attr('disabled', 'true');

// select
$("#product-size").on("change", function() {
    switch(this.value) {
        case "sm":
            $("#show-price").html(`${sizeValue[0]} رس`);
            break;
        case "md":
            $("#show-price").html(`${sizeValue[1]} رس`);
            break;
        case "lg":
            $("#show-price").html(`${sizeValue[2]} رس`);
            break;
        default:
            $("#show-price").html("");
            break;
        }
    if (productSize.val() !== "0" && productQuantity.val() !== ""  && parseInt(productQuantity.val()) >= 1) {
        $("#add-to-cart-btn").removeAttr("disabled");
    } else {
        $("#add-to-cart-btn").attr('disabled', 'true');
    }
});

// input
$("#product-quantity").on("input", function() {
    if (productSize.val() !== "0" && productQuantity.val() !== "" && parseInt(productQuantity.val()) >= 1) {
        $("#add-to-cart-btn").removeAttr("disabled");
    } else {
        $("#add-to-cart-btn").attr('disabled', 'true');
    }
});

// submit
addToCartBtn.on("click", function productForm(e) {
    e.preventDefault();
    alert('تم إضافة الى السلة');
});