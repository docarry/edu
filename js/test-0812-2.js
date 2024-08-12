$(function(){
    $('#warp > span').on('click', function(){
        $('#popup').addClass('popup-box')
    });
    $('#popup button').on('click', function(){
        $('#popup').removeClass('popup-box')
    });
});