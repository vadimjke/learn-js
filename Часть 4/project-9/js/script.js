$(document).ready(function() {

    // Кнопка на главной
    $('.main_btna').on('click', function(){
        $('.modal').animate(
            {
                opacity: 'toggle',
                marginTop: 'toggle'
            }
        );
    });
    // Вторая кнопка на главной
    $('.main_btn').on('click', function() {
        $('.modal').animate(
            {
                opacity: 'toggle',
                marginTop: 'toggle'
            }
        );
    });
    // Кнопка закрыть
    $('.close').on('click', function() {
        $('.modal').animate(
            {
                opacity: 'toggle',
                marginTop: 'toggle'
            }
        );
    });
    // Пункт в меню "Расписание туров"
    $('ul').on('click', 'li:eq(1)', function() {
        $('.modal').animate(
            {
                opacity: 'toggle',
                marginTop: 'toggle'
            }
        );
    });
});

