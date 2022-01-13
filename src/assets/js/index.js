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