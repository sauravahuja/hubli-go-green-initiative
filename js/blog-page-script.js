/**
 * blog-grid-scripts.js
 * Contains Script for basic static website named "White Graphics"
 */
/*********************************************
INSTAGRAM POSTS
**********************************************/
$(document).ready(function(){
    $(".posts-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled: 'true'
        },
        zoom:{
            enabled: 'true',
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement){
                return openerElement.is('img') ? openerElement : 
                    openerElement.find('img');
            }
        }
    })
})