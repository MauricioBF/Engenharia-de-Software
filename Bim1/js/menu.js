let ham = document.querySelector('#menu');
let main = document.querySelector('main');
let drawer = document.querySelector('#drawer');

ham.addEventListener('click', function (e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});
main.addEventListener('click', function () {
    drawer.classList.remove('open');
});