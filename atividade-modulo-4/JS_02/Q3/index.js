const res = document.querySelector('h1');

const button = document.querySelector('#btn');
button.addEventListener('click', test);

function test() {

    let dia = document.querySelector("#dia").value;
    let mes = document.querySelector("#mes").value;
    let ano = document.querySelector("#ano").value;

    let genero = testGenero();

    const nascimento = new Date(ano, mes - 1, dia);
    const diaAtual = new Date();
    var intervalo = diaAtual - nascimento;
    let dias = parseInt((diaAtual - intervalo) / (24 * 3600 * 1000));

    let diasMasc = 73.1*365;
    let diasFem = 80.1*365;

    if(genero === 0){
        //alert("Faltam: " + (Math.round(diasMasc - dias)));
        res.textContent = "Faltam: " + (Math.round(diasMasc - dias)) + "dias";
    }

    else {
        //alert("Faltam: " + (Math.round(diasFem - dias)));
        res.textContent = "Faltam: " + (Math.round(diasFem - dias)) + "dias";
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