import "@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js";
import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import "./assets/sass/style.scss";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "jquery/dist/jquery";

$(function() {
    // add active class to nav-links
    var pathname = window.location.pathname;
    if (pathname.includes("/")) {
        $(".navbar .navbar-nav a").removeClass("active");
        $('.navbar .navbar-nav a[href="/"]').addClass("active");
    }
    if (pathname.includes("about.html")) {
        $(".navbar .navbar-nav a").removeClass("active");
        $('.navbar .navbar-nav a[href="/about.html"]').addClass('active');
    }
    if (pathname.includes("contact.html")) {
        $(".navbar .navbar-nav a").removeClass("active");
        $('.navbar .navbar-nav a[href="/contact.html"]').addClass('active');
    }

    // copyright year
    $("#year").html(new Date().getFullYear());
});