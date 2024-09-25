const siteinfo = [
    {
        siteName : 'naver',
        url : 'https://www.naver.com/',
        target : '_blank'
    },
    {
        siteName : 'daum',
        url : 'https://www.daum.net/',
        target : '_blank'
    },
    {
        siteName : 'google',
        url : 'https://www.google.com/',
        target : ''
    }
]

let liInfo = '';

for(let i in siteinfo){
    liInfo += `
                <li><a href="${siteinfo[i].url}" target="${siteinfo[i].target}">${siteinfo[i].siteName}</a><li>
            `;
}

document.querySelector('#nav').innerHTML = liInfo;

// innerHTML = 안에있을걸 싹다 비우고 통째로 바꿔치기
// insertAdjacentHTML = 추가

