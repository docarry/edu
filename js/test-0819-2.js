$(function(){
    $('#open-btn').on('click', function(){
        $('#popup-box').addClass('show');
    });
    $('#close-btn').on('click', function(){
        $('#popup-box').removeClass('show');
    });
});