$(function(){
    $('#stopBtn').on('click', function(){
        $('.key').css({'backgroundColor':'#fff', 'animationPlayState' : 'paused'});
    });
    $('#startBtn').on('click', function(){
        $('.key').css({'backgroundColor' : '#ccc', 'border-radius' : '40px', 'animationPlayState' : 'running'});
    });
});