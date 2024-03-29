
const name_ = document.querySelector("#name");
const desc_ = document.querySelector("#description");
const value_ = document.querySelector("#value");
const ans = document.querySelector("h2");
const search_ = document.querySelector("#search");
const send = document.querySelector("#send");
const list = document.querySelector("#list");
const searcBtn = document.querySelector("#search-btn");
let table = document.createElement("TABLE");
table.setAttribute('id', 'tb');


send.addEventListener('click', save);
list.addEventListener('click', listAll);
searcBtn.addEventListener('click', find);

let products = [];
let id_ = 0;
let editId = 0;

function save() {

        try {

            if(send.textContent === "Cadastrar"){

                if (name_.value === "" || desc_.value === "" || value_.value === "") {
                    throw alert(`Falha no cadastro do produto!`);
                } else if (isNaN(value_.value)) {
                    throw alert(`Digite apenas numeros`);
                }

                let obj = {
                    id: id_++,
                    name: name_.value,
                    desc: desc_.value,
                    value: value_.value,
                    incluidoEm: new Date().getTime()
                }

                products.push(obj);
                alert(`Produto ${obj.name} incluído com sucesso!`);

            }

            else if(send.textContent === "Editar"){
                products[editId].name = name_.value,
                products[editId].desc = desc_.value,
                products[editId].value = value_.value,
                products[editId].incluidoEm = new Date().getTime()

                send.textContent = "Cadastrar";
            }

            name_.value = "";
            desc_.value = "";
            value_.value = "";

            //listAll();
    
        } catch (error) {
            alert(error);
        }
    
}

function listAll() {

    createTable();
}

function createTable(){

    deleteTable();

    let headers = ["ID", "Nome", "Preço", "EDITAR", "DELETAR"];

    for(let i = 0; i < products.length; i++) {

        const row = table.insertRow(i);
        row.insertCell(0).innerHTML =  `<span> ${products[i].id} </span>`;
        row.insertCell(1).innerHTML = `<span onclick="select(${i})"> ${products[i].name} </span>`;
        row.insertCell(2).innerHTML = `<span> ${products[i].value} </span>`;
        row.insertCell(3).innerHTML =  `<span onclick="edit(${i})" class="material-icons">edit</span>`; 
        row.insertCell(4).innerHTML =  `<span onclick="deleteItem(${i})" class="material-icons">delete</span>`;
    }

    let header = table.createTHead();
    let headerRow = header.insertRow(0);

    headerRow.insertCell(0).innerHTML = `<span"> ${headers[0]} </span>`;
    headerRow.insertCell(1).innerHTML = `<span onclick="sortName()"> ${headers[1]} </span>`;
    headerRow.insertCell(2).innerHTML = `<span onclick="sortValue()"> ${headers[2]} </span>`;
    headerRow.insertCell(3).innerHTML = `<span"> ${headers[3]} </span>`;
    headerRow.insertCell(4).innerHTML = `<span"> ${headers[4]} </span>`;

    document.body.append(table);
}

function deleteItem(id){

    products.splice(id, 1);

    createTable();

}

function edit(id){
    editId = id;
    name_.value = products[id].name;
    desc_.value = products[id].desc;
    value_.value = products[id].value;
    send.textContent = "Editar";
}

function select(id){

    const i = products.find(e => e.id === id);
    console.log(products.find(e => e.id === id));
    ans.textContent = `ID: ${i.id} Produto: ${i.name} Desc: ${i.desc} Valor: ${i.value}`;
}

function deleteTable() {
    while(table.hasChildNodes()){
        table.removeChild(table.firstChild);
    }

}

function sortName(){
    products.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
    });
    
    createTable();
}

function sortValue(){
    products.sort(function (a, b) { return a.value - b.value});

    createTable();
    console.log(products);
}

function find(){

    let arr = [];

    if(search_.value === ""){
        products.forEach(e => {
            arr.push(e);
        });
        console.log(arr)
    }

    else {
        arr = products.filter(function (a){
                return a.name === search_.value
        });
    }

    let tableFilter = document.createElement("TABLE");
    tableFilter.setAttribute('id', 'tb-filter');

    //deleteTable();

    let headers = ["ID", "Nome", "Preço", "EDITAR", "DELETAR"];

    for(let i = 0; i < arr.length; i++) {

        const row = tableFilter.insertRow(i);
        row.insertCell(0).innerHTML =  `<span> ${arr[i].id} </span>`;
        row.insertCell(1).innerHTML = `<span onclick="select(${i})"> ${arr[i].name} </span>`;
        row.insertCell(2).innerHTML = `<span> ${arr[i].value} </span>`;
        row.insertCell(3).innerHTML =  `<span class="material-icons">edit</span>`; 
        row.insertCell(4).innerHTML =  `<span class="material-icons">delete</span>`;
    }

    let header = tableFilter.createTHead();
    let headerRow = header.insertRow(0);

    headerRow.insertCell(0).innerHTML = `<span> ${headers[0]} </span>`;
    headerRow.insertCell(1).innerHTML = `<span> ${headers[1]} </span>`;
    headerRow.insertCell(2).innerHTML = `<span> ${headers[2]} </span>`;
    headerRow.insertCell(3).innerHTML = `<span> ${headers[3]} </span>`;
    headerRow.insertCell(4).innerHTML = `<span> ${headers[4]} </span>`;

    alert( `Foram encontrados: ${arr.length} produtos`);
    document.body.append(tableFilter);
}