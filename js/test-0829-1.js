const checkNum = document.querySelector('#checkNum');
const checkNumCheck = document.querySelector('.checkNumCheck');
const randomNum = document.querySelector('.randomNum');
const randomNumNew = document.querySelector('.randomNumNew');
const checkNumBox = document.querySelector('#checkNumBox');

let randomNumGiv;
let inpNumCheck;

randomNumNew.addEventListener('click', function(){
    randomNumGiv = randomNumWhat();
    randomNum.textContent = randomNumGiv;
    checkNum.value = '';
    checkNumBox.classList.remove('disabled');
    checkNum.disabled = false;
    checkNumCheck.disabled = false;
    checkNumCheck.textContent = '확인';
});

checkNumCheck.addEventListener('click', inpNumCheckCheck);

checkNum.addEventListener('keyup', function(up){
    if(up.key === 'Enter'){
        inpNumCheckCheck();
    }
})

function randomNumWhat(){
    return Math.floor(100000 + Math.random() * 900000);
}

function inpNumCheckCheck(){
    inpNumCheck = document.querySelector('#checkNum').value;
    if(randomNumGiv == inpNumCheck){
        alert('인증되었습니다.');
        checkNumCheck.textContent = '인증완료';
        checkNumBox.classList.add('disabled');
        checkNum.disabled = true;
        checkNumCheck.disabled = true;
    }else{
        alert('인증번호가 틀립니다.');
    }
}