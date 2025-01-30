
$(function(){

    let i = 0;
    $('#content .mainBanner ul li').eq(i).fadeIn(300);

    setInterval(function(){
        i++;
        i %= $('#content .mainBanner ul li').length;
        $('#content .mainBanner ul li').eq(i).fadeIn(300).siblings().fadeOut(300);
    }, 3000);
});