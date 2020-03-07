
$('#switch').on('click', () => {
    if ($('#switch').prop('checked')) {
        $('.darkMode, .modal-content').addClass('dark');
    } else {
        $('.darkMode, .modal-content').removeClass('dark');
    }
});