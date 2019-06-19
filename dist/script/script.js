$(document).ready(function(){
    if (window.matchMedia('(min-width: 856px').matches) {
        $('.section-slider-container').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
        });
    } else {
        $('.section-slider-container').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
        });
    }
})
      