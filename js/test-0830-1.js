const randomBox = document.querySelector('.randomBox');
const checkBox = document.querySelector('.checkBox');

const randomNum = document.querySelector('.randomNum');
const makeBtn = document.querySelector('.makeBtn');

const inputNumBox = document.querySelector('#inputNumBox');
const checkBtn = document.querySelector('.checkBtn');


let randomNumMake;
let check;

makeBtn.addEventListener('click', function(){
    randomNumMake = randomNumNew();
    randomNum.textContent = randomNumMake;
    checkBox.classList.remove('disabled');
    inputNumBox.disabled = false,
    checkBtn.disabled = false,
    checkBtn.textContent = '확인',
    inputNumBox.value = '';
});

checkBtn.addEventListener('click', checkNum);
inputNumBox.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        checkNum();
    }
});

function randomNumNew(){
    return Math.floor(100000 + Math.random() * 900000);
}

function checkNum(){
    check = inputNumBox.value;
    if(check == randomNumMake){
        alert('인증이 완료되었습니다.');
        checkBox.classList.add('disabled');
        inputNumBox.disabled = true,
        checkBtn.disabled = true,
        checkBtn.textContent = '인증완료';
    }else{
        alert('인증번호가 틀립니다.');
    }
}