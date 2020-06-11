$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('btn-primary');
        $(this).toggleClass('btn-warning');
    });

    $('.list-item:eq(3)').on('click', function() {
        $('.image:even').fadeToggle();
        // $(this).toggleClass('btn-primary');
        // $(this).toggleClass('btn-warning');
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 300
        );
    });
});


// document.querySelectorAll('.list-item').forEach();
// .classList
// .addEventListener
// $.ajax = fetch
// .animate