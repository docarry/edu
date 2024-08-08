$(function(){
    // $('#open-btn').on('click', function(){
    //     $('#popup-box').show();
    // });
    // $('#popup-box > span').on('click', function(){
    //     $('#popup-box').hide();
    // });
    // $('#open-btn').on('click', function(){
    //     $('#popup-box').fadeIn(1000);
    // });
    // $('#popup-box > span').on('click', function(){
    //     $('#popup-box').fadeOut(1000);
    // });
    // $('#open-btn').on('click', function(){
    //     $('#popup-box').slideDown(1000); 1초
    // });
    // $('#popup-box > span').on('click', function(){
    //     $('#popup-box').slideUp(1000);
    // });
    // $('#open-btn').on('click', function(){
    //     $('#popup-box').slideDown(1000);
    // });
    // $('#popup-box > span').on('click', function(){
    //     $('#popup-box').slideUp(1000);
    // });  
    $('#open-btn').on('click', function(){
        $('#popup-box').addClass('slide');
    });
    $('#popup-box > span').on('click', function(){
        $('#popup-box').removeClass('slide');
    });
});