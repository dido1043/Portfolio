//For Menu
const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
function show (){
    mainMenu.style.display = 'flex';
    mainMenu.style.top='0px'
}
function close(){
    mainMenu.style.top='-100%'
}
//----------------------------------------------------------------