const name = document.querySelector("#name");
const date = document.querySelector("#date");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const gender = document.querySelector("#gender");
const btn = document.querySelector("#btn");

btn.addEventListener('click', function(){

let name_ = String(name.value);
let date_ = new Date(date.value);
let weight_ = parseFloat(weight.value);
let height_ = parseInt(height.value*100);
let gender_ = String(gender.value);

let obj = {
    name: name_,
    date: date_,
    weight: weight_,
    height: height_,
    gender: gender_
};

console.log(
    `
    ${obj.name}
    ${obj.date}
    ${obj.weight}
    ${obj.height}
    ${obj.gender}
    `
);

});
