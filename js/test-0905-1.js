
$(function(){

    let i = 0;
    let bool = true;

    $('#content .mainBanner ul li').eq(i).fadeIn(300);

    let autoFade =  setInterval(fadeInOut, 3000); // 셋인터벌을 변수에 담아야함 (클리어인터벌을위해)

    $('#stop').on('click', function(){
        if(bool === true){
            clearInterval(autoFade); // clearInterval(변수명); 으로 사용해야함 그래서 셋인터벌을 변수에 담은것.
            bool = false;
        }
    });

    $('#play').on('click', function(){
        if(bool === false){
            autoFade =  setInterval(fadeInOut, 3000); // 변수까지 들고와야 클리어인터벌을 돌릴수있음.
            bool = true; // 불값이 없으면 플레이버튼 중복이 터짐
        }
    });
    
    function fadeInOut(){
        i++;
        i %= $('#content .mainBanner ul li').length;
        $('#content .mainBanner ul li').eq(i).fadeIn(300).siblings().fadeOut(300);
    }

});