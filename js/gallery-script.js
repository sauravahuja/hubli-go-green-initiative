$(document).ready(function () {
    $('.isotope-container').isotope({});

    $("#isotope-filters").on("click", "button", function () {
        let filterValue = $(this).attr("data-filter");
        console.log(filterValue);
        $(".isotope-container").isotope({
            filter: filterValue
        });
//        active-button
        $("#isotope-filters").find('.active_iso').removeClass('active_iso');
        
        $(this).addClass('active_iso');
    });
});