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
});