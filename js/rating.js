/* ********************************** RATING ******************************************************** */
    $('#like, #dislike').on('click', function() {
        event.preventDefault();
        $('.active').not('.carousel-item.active').removeClass('active');
        $(this).addClass('active');
    });

