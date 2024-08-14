$('#open-btn').on('click', function(){
    $('#popup-box').addClass('slide');
});
$('#popup-box div span').on('click', function(){
    $('#popup-box').removeClass('slide');
});