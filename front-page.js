$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,          
        margin: 10,         
        nav: true,          
        autoplay: false,    
        responsive:{
            1000:{ items: 5 }
        }
    });
    $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
});