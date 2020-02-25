$(function () {

    $('.product__block-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/icons/chevron-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/icons/chevron-right.png" alt=""></button>',
        appendArrows: '.weekly__products-btn'
    });

    $('.release__item-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/icons/chevron-left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="img/icons/chevron-right.png" alt=""></button>',
        appendArrows: '.followers-btn'
    });


});