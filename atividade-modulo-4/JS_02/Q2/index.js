const res = document.querySelector('h1');

const button = document.querySelector('#btn');
button.addEventListener('click', test);

function test() {

    let n1 = document.querySelector("#n1").value;
    let n2 = document.querySelector("#n2").value;

    if(String(n1) !== String(n2)) {
        if(String(n1) > String(n2)) {
            res.textContent = "A primeira string é maior!: ";
        }

        else if(String(n2) > String(n1)){
            res.textContent = "A primeira string é menor!: ";
        }
    }

    else {
        res.textContent = "As strings são iguais!";
    }
    
}