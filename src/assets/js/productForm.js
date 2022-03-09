// pizza form submit fix user experience.
// var
var magaretPrice = ["8.25", "12.25", "18.00"];
var vegetablePrice = ["12.25", "18.55", "21.25"];
var chikenPrice = ["15.00", "18.00", "23.00"];
var addToCartBtn = $("#add-to-cart-btn");
var productSize = $("#product-size");
var productQuantity = $("#product-quantity");

// init form
$("#margaret-price").html(`${magaretPrice[0]} - ${magaretPrice[2]} رس`);
$("#vegetable-price").html(`${vegetablePrice[0]} - ${vegetablePrice[2]} رس`);
$("#chiken-price").html(`${chikenPrice[0]} - ${chikenPrice[2]} رس`);
productSize.val('0');
productQuantity.val('');
addToCartBtn.attr('disabled', 'true');

// select
$("#product-size").on("change", function() {
    switch(this.value) {
        case "sm":
            $("#margaret-new-price").html(`${magaretPrice[0]} رس`);
            $("#vegetable-new-price").html(`${vegetablePrice[0]} رس`);
            $("#chiken-new-price").html(`${chikenPrice[0]} رس`);
            break;
        case "md":
            $("#margaret-new-price").html(`${magaretPrice[1]} رس`);
            $("#vegetable-new-price").html(`${vegetablePrice[1]} رس`);
            $("#chiken-new-price").html(`${chikenPrice[1]} رس`);
            break;
        case "lg":
            $("#margaret-new-price").html(`${magaretPrice[2]} رس`);
            $("#vegetable-new-price").html(`${vegetablePrice[2]} رس`);
            $("#chiken-new-price").html(`${chikenPrice[2]} رس`);
            break;
        default:
            $("#margaret-new-price").html("");
            $("#vegetable-new-price").html("");
            $("#chiken-new-price").html("");
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