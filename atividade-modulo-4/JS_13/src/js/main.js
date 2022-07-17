
const board = document.querySelectorAll(".square");
const ans = document.querySelector(".ans");
let sel = "X";
let count = 0;

init();

function init(){
    addClick();
    renderize();
}

function addClick(){
    for(let i = 0; i < board.length; i++){
        board[i].addEventListener('click', play);
    }
}

function renderize(){
    for(let i = 0; i < board.length; i++){
    }
}

function condition(){ 

    let arr = [[0,0,0], [0,0,0], [0,0,0]];
    let k = 0;

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            arr[i][j] = board[k].textContent;
            k++;
        }
    }

    if(((arr[0][0] === sel) && (arr[1][1] === sel) && (arr[2][2] === sel)) || ((arr[0][2] === sel) && (arr[1][1] === sel) && (arr[2][0] === sel))){
        ans.textContent = "Jogador " + sel + " Venceu";
        reset();
    }

    else if(((arr[0][0] === sel) && (arr[1][0] === sel) && (arr[2][0] === sel)) ||
            ((arr[0][1] === sel) && (arr[1][1] === sel) && (arr[2][1] === sel)) ||
            ((arr[0][2] === sel) && (arr[1][2] === sel) && (arr[2][2] === sel))
            ){

            ans.textContent = "Jogador " + sel + " Venceu";
            reset();
    }

    else if(((arr[0][0] === sel) && (arr[0][1] === sel) && (arr[0][2] === sel)) ||
            ((arr[1][0] === sel) && (arr[1][1] === sel) && (arr[1][2] === sel)) ||
            ((arr[2][0] === sel) && (arr[2][1] === sel) && (arr[2][2] === sel))
    ){

    ans.textContent = "Jogador " + sel + " Venceu";
    reset();
}

    else if(count == 9){
        ans.textContent = "Empate";
        reset();
    };

    count++;
}

function alterTurn(){
    if(sel === "X"){
        sel = "O"
    }else{
        sel = "X"
    }
}

function Turn(){
    condition();
    alterTurn();
}

function play(e){
    ans.textContent = "";
    console.log(board[e.target.dataset.id].textContent);
    console.log(sel);
    if(board[e.target.dataset.id].textContent === 'X' || board[e.target.dataset.id].textContent === 'O'){
        alert("Escolha outro quadrado");
    }else{
        board[e.target.dataset.id].textContent = sel;
        Turn();
    }
    
}

function reset(){
    count = 0;
    for(let i = 0; i < board.length; i++){
        board[i].textContent = "";
    }
    
    sel = "X";
}