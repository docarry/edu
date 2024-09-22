const toggleBg = document.querySelector('.toggleBg');
const toggleBtn = document.querySelector('#toggleBtn');

let moveBtn = true;

function btnMove(){
    if(moveBtn === true){
        toggleBtn.classList.add('on');
        moveBtn = false;
    }else{
        toggleBtn.classList.remove('on');
        moveBtn = true;
    }
}

toggleBtn.addEventListener('click', btnMove);