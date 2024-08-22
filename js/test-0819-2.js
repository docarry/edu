// 제이쿼리
$(function(){
    $('#open-btn').on('click', function(){
        $('#popup-box').addClass('show');
    });
    $('#close-btn').on('click', function(){
        $('#popup-box').removeClass('show');
    });
});

// 자바스크립트
function goToPage (){
    let name = prompt('성함을 입력해주세요');

    // 옛날 방법
    // alert('안녕하세요' + name + '님 환영합니다.');

    // 요즘 방법
    alert(`안녕하세요 ${name}님 환영합니다!`)
}