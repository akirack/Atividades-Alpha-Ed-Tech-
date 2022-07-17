import * as API from "./module/API.js"

const body = document.querySelector("body");
const sel = document.querySelector("#coins");
const initDate = document.querySelector("#init-date");
const endDate = document.querySelector("#end-date");
const btn = document.querySelector("#btn");
let table = document.createElement("TABLE");
const ctnMap = document.querySelector('#ctn-map');

btn.addEventListener('click', quote);


let coins = await API.QuoteCoin("https://economia.awesomeapi.com.br/json/available");
createSelect(coins);

async function quote(){

    body.classList.add("wait")

    let coin = howCoin(sel.value);
    console.log(coin);
    let days = howManyDays(initDate.value, endDate.value);
    let startDay = initDate.value === "" ? ConvertDateToDate() : dateConvert(initDate.value);
    let endDay = endDate.value === "" ? ConvertDateToDate() : dateConvert(endDate.value);

    let response = await API.QuoteCoin(UrlBuild(coin[0], coin[1], days, startDay, endDay));

    createTable(response);
}

function createTable(coins){

    let headers = ["Last Quote", "Date", "LOW", "HIGH", "Closing Value"];

    for(let i = 0; i < coins.length; i++) {
        const row = table.insertRow(i);
        row.insertCell(0).innerHTML = `<span> ${coins[i].ask} </span>`;
        row.insertCell(1).innerHTML = `<span> ${coins[i].create_date} </span>`; //`<span> ${convertToDate(coins[i].timestamp)} </span>`; 
        row.insertCell(2).innerHTML = `<span> ${coins[i].low} </span>`;
        row.insertCell(3).innerHTML = `<span> ${coins[i].high} </span>`;
        row.insertCell(4).innerHTML = `<span> ${coins[i].bid} </span>`;
    }
    
    let header = table.createTHead();
    let headerRow = header.insertRow(0);

    headerRow.insertCell(0).innerHTML = `<span> ${headers[0]} </span>`;
    headerRow.insertCell(1).innerHTML = `<span> ${headers[1]} </span>`;
    headerRow.insertCell(2).innerHTML = `<span> ${headers[2]} </span>`;
    headerRow.insertCell(3).innerHTML = `<span> ${headers[3]} </span>`;
    headerRow.insertCell(4).innerHTML = `<span> ${headers[4]} </span>`;

    document.body.append(table);
    body.classList.remove("wait")
}

// function convertToDate(time){
//     console.log(new Date(time))
//     return new Date(Date.UTC(time));
// }

function howManyDays(date1, date2){
    let d = date1 <= date2 ? 1 : (new Date(date1) - new Date(date2))/(1000*60*60*24);
    return d;
}

function howCoin(coin){

    return coin.split("-")
}

function dateConvert(date){

    let d = "";
    for(let i = 0; i < date.length; i++){
        if(date[i] != '-'){
            d += `${date[i]}`;
        }
    }

    return d;
}

function ConvertDateToDate(){
    let date = new Date(Date.now());
    let d = date.getDate();
    let m = date.getUTCMonth();
    let y = date.getFullYear();

    if(d < 10){d = "0"+d;};
    if(m < 10){m = "0"+m};

    return `${y}${d}${m}`;
}

function UrlBuild(coin1, coin2, days, date1, date2){
    //console.log(`https://economia.awesomeapi.com.br/USD-${coin}/${days}?start_date=${date2}&end_date=${date1}`);
    return `https://economia.awesomeapi.com.br/${coin1}-${coin2}/${days}?start_date=${date2}&end_date=${date1}`;
}

function createSelect(coins){
    for (const item of Object.entries(coins)) {
        var opt = document.createElement('option');
        opt.value = item[0];
        opt.innerHTML = item[1];
        sel.appendChild(opt);
    }
}

function showMap(){
  
    const loc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14713.595064253397!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1657141703121!5m2!1spt-BR!2sbr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;
    document.getElementById('frameMap').src = loc; 
    ctnMap.style.display = "flex";
}