/**
 * service-scripts.js
 * Contains Script for basic static website named "White Graphics"
 */
/*********************************************
GENERAL LOADERS
**********************************************/
const play = document.getElementById('play-btn');
play.addEventListener('click', playVideo)

function playVideo(){
    autoplay = document.createAttribute('autoplay');
    controls = document.createAttribute('controls');
    autoplay.value = "true";
    controls.value = "true";
    document.getElementById('home-bg-video').setAttributeNode(autoplay)
    document.getElementById("home-bg-video").load();
    document.querySelector('.video-overlay').style.display = "none";
}

/*********************************************
PROGRESS BAR
**********************************************/

$(document).ready(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 800);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/*********************************************
CLIENTS
**********************************************/
$(document).ready(function(){
    $('.client-wrapper').owlCarousel({
        autoplay: 'true',
        items: 6,
        loop: 'true',
        smartSpeed: 500,
        slideBy: 2,
        nav: 'false',
        dots: 'false'
    })
})
