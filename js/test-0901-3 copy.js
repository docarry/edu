const nikeList = document.querySelector('#nike-list');
const moreBtn = document.querySelector('#more-btn');

const listArray = [['/img/nike/img_04.png', '나이키 네번째 상품입니다.', '나이키 페가수스4', '249,000 원'],
                    ['/img/nike/img_05.png', '나이키 다섯번째 상품입니다.', '나이키 페가수스5', '259,000 원'],
                    ['/img/nike/img_06.png', '나이키 여섯번째 상품입니다.', '나이키 페가수스6', '269,000 원'],
                    ['/img/nike/img_07.png', '나이키 일곱번째 상품입니다.', '나이키 페가수스7', '279,000 원'],
                    ['/img/nike/img_08.png', '나이키 여덟번째 상품입니다.', '나이키 페가수스8', '289,000 원'],
                    ['/img/nike/img_09.png', '나이키 아홉번째 상품입니다.', '나이키 페가수스9', '299,000 원'],
                    ['/img/nike/img_01.png', '나이키 열번째 상품입니다.', '나이키 페가수스10', '109,000 원'],
                    ['/img/nike/img_02.png', '나이키 열한번번째 상품입니다.', '나이키 페가수스11', '119,000 원'],
                    ['/img/nike/img_03.png', '나이키 열두번번째 상품입니다.', '나이키 페가수스12', '129,000 원'],
                    ['/img/nike/img_04.png', '나이키 열세번번째 상품입니다.', '나이키 페가수스13', '139,000 원'],
                    ['/img/nike/img_05.png', '나이키 열네번째 상품입니다.', '나이키 페가수스14', '149,000 원'],
                    ['/img/nike/img_06.png', '나이키 열다섯번째 상품입니다.', '나이키 페가수스15', '159,000 원'],
                    ['/img/nike/img_07.png', '나이키 열여섯번째 상품입니다.', '나이키 페가수스16', '169,000 원'],
                    ['/img/nike/img_08.png', '나이키 열일곱번째 상품입니다.', '나이키 페가수스17', '179,000 원'],
                    ['/img/nike/img_09.png', '나이키 열여덟번째 상품입니다.', '나이키 페가수스18', '189,000 원']];

let itemStep = 0;

function itemListRun(){
    let newNikeList = '';
    for(i = 0; i < 3 && itemStep <= listArray.length; i++){
        newNikeList += `<li><a href="#"><img src="${listArray[itemStep][0]}" alt="${listArray[itemStep][1]}"><span>${listArray[itemStep][2]}</span><span>${listArray[itemStep][3]}</span></a></li>`;
        itemStep++;
    }
    if(itemStep >= listArray.length){
        moreBtn.style.display = 'none';
    }
    nikeList.insertAdjacentHTML('beforeend', newNikeList);
}

moreBtn.addEventListener('click', itemListRun);