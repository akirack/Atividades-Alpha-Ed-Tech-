const res = document.querySelector('h1');

const button = document.querySelector('#btn');
button.addEventListener('click', test);

function test() {

    let dia = document.querySelector("#dia").value;
    let mes = document.querySelector("#mes").value;
    let ano = document.querySelector("#ano").value;

    const diaAtual = new Date();
    let dia_ = diaAtual.getDate() - dia;
    let mes_ = diaAtual.getMonth() + 1 - mes;
    let ano_ = diaAtual.getFullYear() - ano;

    let dias = dia_ + 30*mes_ + 365*ano_;

    let diasMasc = 26682;
    let diasFem = 29237;

    let genero = testGenero();

    if(genero === 0){
        //alert("Faltam: " + (Math.round(diasMasc - dias)));
        res.textContent = "Faltam: " + (diasMasc - dias) + "dias";
    }

    else {
        //alert("Faltam: " + (Math.round(diasFem - dias)));
        res.textContent = "Faltam: " + (diasFem - dias) + "dias";
    }
}

function testGenero() {
    let r = document.getElementsByName("genero");

    if(r[0].checked){
        return 0;
    }

    else if(r[1].checked) {
        return 1;
    }
}