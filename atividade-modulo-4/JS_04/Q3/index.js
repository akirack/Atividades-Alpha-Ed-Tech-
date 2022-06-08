
const min = document.querySelector('#number');
const res = document.querySelector('h1');

const btn = document.querySelector("#btn");
btn.addEventListener('click', calcular);

function calcular(){
    
    let number_ = Math.ceil(parseInt(number.value));

    if(!isNaN(parseFloat(number_))){
        let n1 = Math.ceil(number_) + 1;
        let n2 = Math.floor(number_) - 1;

        res.textContent = "Numero anterior: " + n1 +  ", Numero posterior: " + n2;
    }

    else {
        alert("Digite apenas numeros");
    }

}