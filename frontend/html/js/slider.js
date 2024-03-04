$(document).ready(function(){
    $('.slider').slick({
        dots: true, // Показывать точки навигации
        infinite: true, // Бесконечная прокрутка
        speed: 500, // Скорость анимации
        slidesToShow: 2, // Количество отображаемых слайдов
        slidesToScroll: 1, // Количество прокручиваемых слайдов
        responsive: [
            {
                breakpoint: 768, // Адаптивность для устройств с шириной экрана меньше 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // Адаптивность для устройств с шириной экрана меньше 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});