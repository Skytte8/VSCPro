// tabs.js
const tabArray = document.querySelectorAll('span');
const pArray = document.querySelectorAll('h1');
let valgt = 0;
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
tabArray[valgt].dataset.valgt = 'ja';
for (let tab = 0; tab < tabArray.length; tab++) {
    pArray[tab].style.display = tab == valgt ? 'block' :'none';
    tabArray[tab].onclick = () => {
        if (tab !== valgt) {
            tabArray[valgt].removeAttribute('data-valgt');
            tabArray[tab].dataset.valgt = 'ja';
            pArray[valgt].style.display = 'none';
            pArray[tab].style.display = 'block';
            valgt = tab;
        }
    }
}