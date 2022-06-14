const res = document.querySelector('h1');
const img = document.querySelector('#myImg')
const sel = document.querySelector('#sel');

const button = document.querySelector('#btn');
button.addEventListener('click', test);

function test() {

    switch (sel.value) {
        case "0":         
            img.setAttribute('src', "./img/pkm-red.jpg");
            break;
        case "1":
            img.setAttribute('src', "./img/pkm-crystal.jpg");
            break;
        case "2":
            img.setAttribute('src', "./img/pkm-Emerald.png");
            break;
        case "3":
            img.setAttribute('src', "./img/pkm-plat.jpg");
            break;
        default:
            img.setAttribute('src', "./img/pkm-black.webp");
            break;
    }
}