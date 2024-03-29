const name = document.querySelector("#name");
const date = document.querySelector("#date");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const gender = document.querySelector("#gender");
const ansName = document.querySelector("#ans-1");
const ansDate = document.querySelector("#ans-2");
const ansWeight = document.querySelector("#ans-3");
const ansHeight = document.querySelector("#ans-4");
const ansGender = document.querySelector("#ans-5");
const btn = document.querySelector("#btn");

btn.addEventListener('click', function(){

let name_;
let date_;
let weight_; 
let height_; 
let gender_;

try {
    if(name.value === "" || String(name.value).length < 5){
        throw `Field ${name.value} is invalid!`;
    }

    name_ = name.value;
} catch (e) {
    alert(e);
}

try {
    if(new Date() <= new Date(date.value)){
        throw `Field ${date.value} is invalid!`;
    }

    date_ = new Date(date.value);
}
catch (e) {
    alert(e);
}

try {
    if(isNaN(Number(weight.value))){
        throw `Field ${weight.value} is invalid!`;
    }
    weight_ = parseFloat(weight.value);
}
catch (e) {
    alert(e);
}

try {
    if(isNaN(Number(height.value))){
        throw `Field ${height.value} is invalid!`;
    }

    height_ = parseInt(height.value*100);
}
catch (e) {
    alert(e);
}

try {
    if(gender.value === "Masculino" || gender.value === "Feminino"){
        gender_ = String(gender.value);
        console.log(gender.value);
    }

    else {
        throw `Field ${gender.value} is invalid!`;
    }
}
catch (e) {
    alert(e);
}

let obj = {
    name: name_,
    date: date_,
    weight: weight_,
    height: height_,
    gender: gender_
};

console.log(obj.height);

ansName.textContent = "Nome: " + obj.name;
ansDate.textContent = "Data de Nasc.: " + obj.date; 
ansWeight.textContent = "Peso: " + obj.weight + "kg";
ansHeight.textContent = "Altura: " + obj.height + "cm";     
ansGender.textContent = "Genero: " + obj.gender;

let objJson = JSON.stringify(obj);

console.log(objJson);

});
