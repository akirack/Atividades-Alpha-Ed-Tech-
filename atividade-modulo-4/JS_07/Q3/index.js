
const msg = document.querySelector("#msg");
const area = document.querySelector('#area');
const btn = document.querySelector('#btn');
const btnDel = document.querySelector('#btn-del');

btn.addEventListener('click', send);
btnDel.addEventListener('click', btnDelete);
msg.addEventListener('keyup', btnSend);


function send(){
    area.textContent += msg.value + '\n';
    msg.value = " ";
    area.scrollTop += 1000000;
}

function btnSend(e) {
    if(e.key === 'Enter'){
        area.textContent += msg.value + '\n';
        msg.value = " ";
        area.scrollTop += 1000000;
    }
}

function btnDelete(){
    area.textContent = "";
}