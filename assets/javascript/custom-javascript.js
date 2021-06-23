

/* -------------------- AOS Setting -------------------- */

AOS.init();

/* -------------------- Scroll Setting -------------------- */

$(window).scroll(function () {
    $(".conversion.secondary").toggleClass("scroll", $(this).scrollTop() > 700);
});

/* -------------------- Slick Setting -------------------- */

/* Single Slick */

$('.slick-responsive-auto.single').slick({
    lazyLoad: 'ondemand',
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3500,
});

/* Triple Slick */

$('.slick-responsive-auto.double').slick({
    lazyLoad: 'ondemand',
    dots: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3500,
    responsive: [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
        }
    }]
});

/* Triple Slick */

$('.slick-responsive-auto.triple').slick({
    lazyLoad: 'ondemand',
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3500,
    responsive: [
    {
        breakpoint: 1000,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
        }
    }]
});

/* Quadruple Slick */

$('.slick-responsive-auto.quadruple').slick({
    lazyLoad: 'ondemand',
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3500,
    responsive: [
    {
        breakpoint: 1000,
        settings: {
            slidesToShow: 3,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
        }
    }]
});

/* Quintuple Slick */

$('.slick-responsive-auto.quintuple').slick({
    lazyLoad: 'ondemand',
    dots: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3500,
    responsive: [
    {
        breakpoint: 1000,
        settings: {
            slidesToShow: 5,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            centerMode: true,
            infinite: true,
        }
    }]
});