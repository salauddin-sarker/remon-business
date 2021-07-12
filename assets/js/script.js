$(document).ready(function(){
    

  $('.testimonial').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    nav:false,
    dots:false,
    items:2,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
});