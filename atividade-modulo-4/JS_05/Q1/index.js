
const number = document.querySelector("#number");
const ans = document.querySelector("h1");
const btn = document.querySelector("#btn");

btn.addEventListener('click', function() {

    let number_ = parseInt(number.value);
    if(isNaN(parseInt(number_))) {
        //ans.textContent = "Digite apenas números."
        alert("Digite apenas números.")
    }

    else if(number_ > 10) {
        //ans.textContent = "Digite apenas números entre 0 e 10."
        alert("Digite apenas números entre 0 e 10.");
    }

    switch (number_) {
        case 0:         
            ans.textContent = "Zero";  
            break;
        case 1:
            ans.textContent = "Um";
            break;
        case 2:
            ans.textContent = "Dois";
            break;
        case 3:
            ans.textContent = "Três";
            break;
        case 4:           
            ans.textContent = "Quatro";
            break;
        case 5:
            ans.textContent = "Cinco";
            break;
        case 6:
            ans.textContent = "Seis";
            break;
        case 7:
            ans.textContent = "Sete";
            break;
        case 8:
            ans.textContent = "Oito";
            break;
        case 9:
            ans.textContent = "Novo";
            break;
        case 10:
            ans.textContent = "Dez";
            break;        
        default:
            break;
    }
});