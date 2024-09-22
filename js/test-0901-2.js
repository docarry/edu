
const creatNumberDiv = document.querySelector('.creatNumberDiv');
const creatKey = document.querySelector('#creatKey');
const creatKeyBtn = document.querySelector('#creatKeyBtn');

const checkNumberDiv = document.querySelector('.checkNumberDiv');
const checkKey = document.querySelector('#checkKey');
const checkKeyBtn = document.querySelector('#checkKeyBtn');


let randomNum;

function creatRandomNum(){
    return Math.floor(100000 + Math.random() * 900000);
}

creatKeyBtn.addEventListener('click', function(){
    randomNum = creatRandomNum();
    creatKey.textContent = randomNum;
    checkKeyBtn.textContent = '확인';
    checkKey.value = '';
    checkKey.disabled = false;
    checkKeyBtn.disabled = false;
    checkNumberDiv.classList.remove('disabled');
})

let inputRandomNum;

function inputRandomNumCheck(){
    inputRandomNum = checkKey.value;
    if(inputRandomNum == randomNum){
        alert('인증이 완료되었습니다');
        checkKeyBtn.textContent = '인증완료';
        checkKey.disabled = true;
        checkKeyBtn.disabled = true;
        checkNumberDiv.classList.add('disabled');
    }else{
        alert('인증에 실패하였습니다. 재입력해주세요.');
    }
}

checkKeyBtn.addEventListener('click', inputRandomNumCheck);
checkKey.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        inputRandomNumCheck();
    }
});