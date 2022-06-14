// 59700-000 = 9

const cep = document.querySelector('#cep');

cep.addEventListener('keyup', validate);
cep.addEventListener('keydown', del);

let cep_ = "";

function validate(e) {
    let number = e.key;
    if(!(isNaN(number))){
       if(cep_.length <= 8){

        cep_ += number;
        cep.value = cep_;      

        if(cep_.length == 5){
            cep_ += "-";
            cep.value = cep_;
        }
       }else{
        cep.value = cep_;
       }
    }

    console.log(cep.value);
}

function del(e) {
    if(e.key === 'Backspace'){
        cep_ = cep_.substring(0, cep_.length - 1);
        cep.value = cep_;
    }
}