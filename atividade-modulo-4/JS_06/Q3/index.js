
let selSeconds = document.getElementById("seconds");
let selMinutes = document.getElementById("minutes");
const btn = document.querySelector("#btn");
const ans = document.querySelector("h1");
const box = document.querySelector("#ans");
let audio = new Audio('./audio/alarme.mp3');

let btnFlag = 0;
let minutes;
let seconds;
let count;
let warning;
let countMinutes = 0;
let countSeconds = 0;
let aux = 0;
let auxSec = 0;

function active() {
    clearInterval(tick);
    audio.play();
}

function activeWarning() {
    box.style.backgroundColor = 'red';
    box.style.color = 'white';
}

function tack(){
    if(aux == 59 && countMinutes >= 1){
        aux = 0;
        countMinutes--;
    }

    if(seconds <= 0){
        seconds = 60;
    }

    aux++;
    seconds--;
    count--;
    
    if(countMinutes < 10) {
        if(seconds < 10) {
            ans.textContent = `0${countMinutes} : 0${seconds}`;
        } else {
            ans.textContent = `0${countMinutes} : ${seconds}`;
        }

    } 
    
    else { 
        ans.textContent = `${countMinutes} : ${seconds}`;
    }

    if(count <= warning) {
        activeWarning();
    }
}

function alarmPlay() {
    timer = setTimeout(active, count*1000);
    tick = setInterval(tack, 1000);
    btn.textContent = "Desativar";
    btn.style.backgroundColor = 'red';
    btnFlag = 1;
}

function alarmStop() {
    audio.pause();
    clearTimeout(timer);
    clearInterval(tick);
    btn.textContent = "Ativar";
    btn.style.backgroundColor = 'green';
    ans.textContent = "00:00";
    btnFlag = 0;
}

btn.addEventListener('click', function () {
    minutes = parseInt(selMinutes.value);
    seconds = parseInt(selSeconds.value);
    count = minutes*60 + seconds + 1;
    warning = count * 0.05;
    countMinutes = minutes;
    aux = 60 - seconds;

    btnFlag === 0 ? alarmPlay() : alarmStop();

});


for(let i = 0; i < 60; i++) {
    let optSec = document.createElement("option");
    let optMin = document.createElement("option");
    optSec.value = i;
    optMin.value = i;

    if(i < 10){
        optSec.text = "0" + String(i);
        optMin.text = "0" + String(i);
    }

    else {
        optSec.text = String(i);
        optMin.text = String(i);
    }

    selSeconds.appendChild(optSec);
    selMinutes.appendChild(optMin);
}

