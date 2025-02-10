$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,          
        margin: 10,         
        nav: true,          
        autoplay: false,    
        autoplayTimeout: 2500, 
        responsive:{
            0:{ items: 1 },
            600:{ items: 2 },
            1000:{ items: 5 }
        }
    });
    $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
});