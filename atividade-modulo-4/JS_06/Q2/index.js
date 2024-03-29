
const btn = document.querySelector("#btn");
const img = document.querySelector("img");
const ans = document.querySelector("h1");
const sound = document.querySelector("#sound");
const sound_2 = document.querySelector("#sound-2");

btn.addEventListener('click', init);
img.addEventListener('click', defuse);

let i = 0;

function init() {
    img.setAttribute('src', "./img/bomb.png");
    bomb = setTimeout(explosion, (60*60*1000));
    tick = setInterval(tack, 1000);
}

function explosion() {
    img.setAttribute('src', "./img/explo.png");
    clearInterval(tick);
    sound.play();
    sound_2.pause();
    i = 0;
    ans.textContent = "Booom!";
}

function defuse() {
    clearTimeout(bomb);
    clearInterval(tick);
    img.setAttribute('src', "./img/bomb-off.png");
    sound_2.pause();
    i = 0;
    ans.textContent = "not today";
}

function tack() {
    i++;
    ans.textContent = i;
    sound_2.play();
}