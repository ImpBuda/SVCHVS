const buttons = document.querySelectorAll('.button');
const nav = document.querySelectorAll('.nav')

nav.forEach(el => {
    el.addEventListener('click', e => clickedNav(e.currentTarget))
})

buttons.forEach(el => {
    el.addEventListener('click', e => clickedButton(e.currentTarget))
})

function clickedNav(target){
    buttons.forEach(el => el.classList.remove('btn-enabled'));
    nav.forEach(el => el.classList.remove('nav-enabled'));
    target.classList.add('nav-enabled');
}

function clickedButton(target){
    buttons.forEach(el => el.classList.remove('btn-enabled'));
    nav.forEach(el => el.classList.remove('nav-enabled'));
    target.classList.add('btn-enabled');
}