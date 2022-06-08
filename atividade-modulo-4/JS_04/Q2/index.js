
const min = document.querySelector('#min');
const max = document.querySelector('#max');
const res = document.querySelector('h1');

const btn = document.querySelector("#btn");
btn.addEventListener('click', calcular);

function calcular(){
    
    let min_ = Math.ceil(parseInt(min.value));
    let max_ = Math.floor(parseInt(max.value));

    if((!isNaN(parseInt(min_)) && !isNaN(parseInt(max_)))){
       if(max_ > min_){
           let rand = Math.floor(Math.random() * (max_ - min_)) + min_;
           res.textContent = rand;
       }

       else {
        alert("O numero Minimo deve ser menor que o numero Maximo");
       }
    }

    else {
        alert("Digite apenas numeros");
    }

}