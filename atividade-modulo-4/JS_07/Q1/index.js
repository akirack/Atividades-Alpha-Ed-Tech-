const ans = document.querySelector("#ans");
const select = document.querySelector("#mySelect");
const imgCar = document.querySelector("#img-car");
// const carName_ = document.querySelector("#car-name");
// const manufacture_ = document.querySelector("#manufacture");
// const maxSpeed_ = document.querySelector("#max-speed");
// const power_ = document.querySelector("#power");
// const acceleration_ = document.querySelector("#acceleration");


// let = carName;
// let = manufacture;
// let = maxSpeed;
// let = power;
// let = acceleration;

let arr = new Array();
let arrAtb = ["Nome: ", "Fabricante: ", "Velocidade Maxima: ", "Potencia: ", "Aceleração: "];
let arrUnit = ["", "", "m/s", "kW", "(0 a 100 km) sec"];

select.addEventListener('change', function () {
    //ans.textContent = select.value;

    switch (select.value) {
        case "Audi":
            // carName = "RS e-tron GT";
            // manufacture = "Audi";
            // maxSpeed = 250;
            // power = 440;
            // acceleration = 3.3;
            removeAllChildNodes(ans);
            arr[0] = "RS e-tron GT";
            arr[1] = "Audi";
            arr[2] = "250";
            arr[3] = "440";
            arr[4] = "3.3";
            imgCar.setAttribute("src", "./img/audi.png");
            break;
        case "BMW":
            removeAllChildNodes(ans);
            arr[0] = "BMW i4";
            arr[1] = "BMW";
            arr[2] = "225";
            arr[3] = "400";
            arr[4] = "5.7";
            imgCar.setAttribute("src", "./img/bmw.png");
            break;
        case "Volvo":
            removeAllChildNodes(ans);
            arr[0] = "XC40";
            arr[1] = "Volvo";
            arr[2] = "250";
            arr[3] = "170";
            arr[4] = "4.9";
            imgCar.setAttribute("src", "./img/volvo.webp");
            break;
        case "Mercedes":
            removeAllChildNodes(ans);
            arr[0] = "Classe E";
            arr[1] = "Mercedes";
            arr[2] = "250";
            arr[3] = "190";
            arr[4] = "6.2";
            imgCar.setAttribute("src", "./img/mercedes.webp");
            break;
        case "Nissan":
            removeAllChildNodes(ans);
            arr[0] = "1.6 SENSE";
            arr[1] = "Nissan";
            arr[2] = "185";
            arr[3] = "155";
            arr[4] = "11.0";
            imgCar.setAttribute("src", "./img/nissan.png");
            break;  
        default:
            break;
    }

    for(let i = 0; i < 5; i++) {
        let paragraph = document.createElement("p");
        paragraph.textContent = arrAtb[i] + arr[i] + arrUnit[i];
        ans.appendChild(paragraph);
    }
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const container = document.querySelector('#container');
