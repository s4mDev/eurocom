import '../scss/main.scss';
import 'slick-slider';

$('.main-banner__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 2500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
});

$('.news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1500,
});

$('.about-documents__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3500,
    asNavFor: '.about-documents__nav',
});

$('.about-documents__nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    speed: 2000,
    asNavFor: '.about-documents__slider',
});

$('.about-documents__counter-all').html('0' + $('.about-documents__slider').slick('getSlick').slideCount);

$('.about-documents__slider').on('afterChange', function (event, slick, currentSlide) {
    $('.about-documents__counter-now').text('0' + (currentSlide + 1));
});

$('.mob-nav__list-open').click(function () {
    $(this).parent('.mob-nav__list-wrapper').toggleClass('mob-nav__list-wrapper_open');
});

$('.header__burger').click(function () {
    $('body').toggleClass('open-nav');
});