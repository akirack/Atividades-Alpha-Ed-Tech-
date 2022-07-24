const card1 = document.querySelectorAll(".number-1");
const card2 = document.querySelectorAll(".number-2");
const ans = document.querySelector("H1");
const btn = document.querySelector("#btn");

let a = card();
let b = card();
let s = sort();

let marks1, marks2;
let sortTimer;

function card(){
    let arr = [];
    let drawn = [];
    return {
        cards: function(){
            let i = 0;
            let sorted;
            while(i <= 10){
               sorted = Math.floor(Math.random() * 75) + 1;
               if(!arr.includes(sorted)){
                    arr.push(sorted);
                    i++
                }
            }
            return arr;
        },

        isSorted: function(value){
             if(arr.includes(value)){
                drawn.push(value);
                return true;
            }else{
                return false;
            }
        },

        hasWon: function(){
            if(drawn.length >= 10){
                return true;
            }else{
                return false;
            }
        },

        drwanValues: function(){
            return drawn;
        }
    }
}

function sort(){
    let arr = [];
    let len = 0;

    return {
        raffle: function(){
            let number = Math.floor(Math.random() * 75) + 1
            if(arr.includes(number) && arr.length <= 74){
                this.raffle(); 
            }
            
            else{
                arr.push(number);
                return number;
            }
        },

        itsFull: function(){
            if(arr.length >= 74){
                return true;
            }else{
                return false;
            }
        }
    }
}

btn.addEventListener('click', ()=>{
    const sortTimer =  
    setInterval(function() {
        ans.textContent = s.raffle();
        if(s.itsFull()){
            clearTimer();
        }
    }, 500);
});

window.onload = function() {
    init();
    addClick();
};

function init(){
    marks1 = 0;
    marks2 = 0;
    
    let arr1 = a.cards();
    let arr2 = b.cards();

    for(let i = 0; i < 10; i++){
        card1[i].textContent = arr1[i];
        card2[i].textContent = arr2[i];
    }
}

function addClick(){
    for(let i = 0; i < 10; i++){
        card1[i].addEventListener('click', play1);
        card2[i].addEventListener('click', play2);
    }
}

function play1(e){
    //console.log(card1[e.target.dataset.id].textContent);
    card1[e.target.dataset.id].setAttribute("class", "marked");
    marks1++;
    isWon();
}

function play2(e){
    //console.log(card2[e.target.dataset.id].textContent);
    card2[e.target.dataset.id].setAttribute("class", "marked");
    marks2++;
    isWon();
}

function isWon(){
    if(marks1 >= 10){
        alert("CARTELA 1 VENCEU!!!");
    }else if(marks2 >= 10){
        alert("CARTELA 2 VENCEU!!!");
    }
}

function clearTimer(){
    clearInterval(sortTimer);
    alert("Todos os numeros foram sorteados");
}
