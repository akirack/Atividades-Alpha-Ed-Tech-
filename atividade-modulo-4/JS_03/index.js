
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const res = document.querySelector('h1');

const btn = document.querySelector("#btn");
btn.addEventListener('click', calcular);

function calcular(){

    const opt = document.getElementById("opt").value;

    if(opt === "soma"){
        res.textContent = (Number(n1.value) + Number(n2.value));
    }

    else if(opt == "sub"){
        res.textContent = (Number(n1.value) - Number(n2.value));
    }

    else if(opt == "mult"){
        res.textContent = (Number(n1.value) * Number(n2.value));
    }

    else {
        res.textContent = (Number(n1.value) / Number(n2.value));
    }
    
}