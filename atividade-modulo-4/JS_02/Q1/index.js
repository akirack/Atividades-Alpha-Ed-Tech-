const res = document.querySelector('h1');

const button = document.querySelector('#btn');
button.addEventListener('click', test);

function test() {

    let n1 = document.querySelector("#n1").value;
    let n2 = document.querySelector("#n2").value;

    if(n1 !== n2) {
        if(n1 > n2) {
            res.textContent = "O primeiro numero é maior!";
        }

        else if(n2 > n1){
            res.textContent = "O primeiro numero é menor!";
        }
    }

    else {
        res.textContent = "Os numeros são iguais!";
    }
    
}