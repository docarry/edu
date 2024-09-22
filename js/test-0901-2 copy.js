let randomNum;

function creatRandomNum(){
    return Math.floor(100000 + Math.random() * 900000);
}

$('#creatKeyBtn').on('click', function(){
    randomNum = creatRandomNum();
    $('#creatKey').text(randomNum);
    $('#checkKeyBtn').text('확인').prop('disabled', false);
    $('#checkKey').val('').prop('disabled', false);
    $('.checkNumberDiv').removeClass('disabled');
})

let inputRandomNum;

function inputRandomNumCheck(){
    inputRandomNum = $('#checkKey').val();
    if(inputRandomNum == randomNum){
        alert('인증이 완료되었습니다');
        $('#checkKeyBtn').text('인증완료').prop('disabled', true);
        $('#checkKey').prop('disabled', true);
        $('.checkNumberDiv').addClass('disabled');
    }else{
        alert('인증에 실패하였습니다. 재입력해주세요.');
    }
}

$('#checkKeyBtn').on('click', inputRandomNumCheck);
$('#checkKey').on('keyup', function(event){
    if(event.key === 'Enter'){
        inputRandomNumCheck();
    }
});