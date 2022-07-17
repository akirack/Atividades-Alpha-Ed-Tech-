import * as API from "./modules/API.js"

const cep = document.querySelector('#cep');
const btn = document.querySelector('.btn');
const ans = document.querySelector('h2');
const iframe = document.querySelector('iframe');
const btnShowMap = document.createElement("button");

cep.addEventListener('keyup', validate);
cep.addEventListener('keyup', del);

btn.addEventListener('click', verify)
btnShowMap.addEventListener('click', mapView);

let cep_ = "";
let address;

function validate(e) {
    if(!(isNaN(parseInt(e.key)))){
        if(cep_.length <= 8){
            cep_ += e.key;
        }

        if(cep_.length == 5){
            cep_ += "-";
        }

    }else{
        cep_ = cep.value.substring(0, cep.value.length - 1);
    }

    cep.value = cep_;
}

function del(e) {
    if(e.key === 'Backspace'){
        cep_ = cep_.substring(0, cep_.length - 1);
        cep.value = cep_;
    }
}

async function verify(){
    try {
        if(cep.value === ''){
            throw `CEP vazio. Digite um CEP`;
        }else{
            address = await fetchAddress();
            ans.textContent = `
            ${address.address_name},
            ${address.district},
            ${address.city},
            ${address.state}
            ${address.lat}
            ${address.lng}
            `;

            const btnShowMap = document.createElement("button");
            btnShowMap.classList.add("btn");
            addShowMapBtn();
            //btnShowMap.addEventListener('click', showMap(address.lat, address.lng));
        }

    } catch (error) {
        alert("Error: " + error)
    }
}

async function fetchAddress(){

    //59700-000
    //012345678
    let arr = cep.value.substring(0, 5) + cep.value.substring(6, 9);
    let url = `https://cep.awesomeapi.com.br/json/${arr}`;            
    return await API.fetchAddresByCep(url);
}

function addShowMapBtn(){
    btnShowMap.textContent = "Show Map"
    btnShowMap.classList.add("btn");
    document.body.appendChild(btnShowMap);
}

function mapView(){
    showMap(address.lat, address.lng);
}

function showMap(lat, lng) {
    let mapOptions = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}

