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

    // show details
    $("#details-header .details-title").on("click", function() {
        $("#details-header .details-title").each(function() {
            $(this).removeClass("active");
        })
        $(this).addClass("active");
        switch(this.id) {
            case "d-desc-title":
                $("#details-content .details-content-item").each(function() {
                    $(this).addClass("d-none");
                    $(this).removeClass("d-block");
                });
                $("#details-desc").addClass("d-block");
                break;
            case "d-info-title":
                $("#details-content .details-content-item").each(function() {
                    $(this).addClass("d-none");
                    $(this).removeClass("d-block");
                });
                $("#details-info").addClass("d-block");
                break;
            case "d-review-title":
                $("#details-content .details-content-item").each(function() {
                    $(this).addClass("d-none");
                    $(this).removeClass("d-block");
                });
                $("#details-review").addClass("d-block");
                break;
        }
    })

    // copyright year
    $("#year").html(new Date().getFullYear());
});