const ans_ = document.querySelector('h1');
const date_ = document.querySelector('#date');

const button = document.querySelector('#btn');
button.addEventListener('click', execute);

function execute() {
    let date = new Date(date_.value);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    //let day = date.getDate() === 32 ? date.getDate() : date.getDate() + 1;
    let day = date.getUTCDate();
    let dayWeek = null;
    let dayMonth = null;
    let time = date.getTime();

    switch (date.getDay()) {
        case 0:
            dayWeek = "Segunda-feira";
            break;
        case 1:
            dayWeek = "Terça-feira";
            break;
        case 2:
            dayWeek = "Quarta-feira";
            break;
        case 3:
            dayWeek = "Quinta-feira";
            break;
        case 4:
            dayWeek = "Sexta-feira";
            break;
        case 5:
            dayWeek = "Sabado";
            break;
        default:
            dayWeek = "Domingo";
            break;
    }

    switch (month) {
        case 1:
            dayMonth = "Janeiro";
            break;
        case 2:
            dayMonth = "Fevereiro";
            break;
        case 3:
            dayMonth = "Março";
            break;
        case 4:
            dayMonth = "Abril";
            break;
        case 5:
            dayMonth = "Maio";
            break;
        case 6:
            dayMonth = "Junho";
            break;
        case 7:
            dayMonth = "julho";
            break;
        case 8:
            dayMonth = "Agosto";
            break;
        case 9:
            dayMonth = "Setembro";
            break;
        case 10:
            dayMonth = "Outubro";
            break;
        case 11:
            dayMonth = "Novembro";
            break;
        default:
            dayMonth = "Dezembro";
            break;
    }

    //alert(`${dayWeek} - ${dayMonth} - ${day} / ${month} / ${year} = ${time}`);
    ans_.textContent = `${dayWeek} - ${dayMonth} - ${day} / ${month} / ${year} = ${time} ms`;
}