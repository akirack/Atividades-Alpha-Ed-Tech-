const ans = document.querySelector("h1");
const btn = document.querySelector("#btn");
btn.addEventListener('click', clickDraw);

// let values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
let types = ["D", "H", "S", "C"];

let hand = [];
let deck = [];
let newDeck = [];

function createDeck() {
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let cards = {
                value: values[j],
                type: types[i]
            };
            deck.push(cards);
        }
    }
}

function shuffle() {
    let rad = Math.floor(Math.random() * deck.length)
    let card = deck[rad];
    deck.splice(rad, 1);
    return card;
}

window.onload = function () {
    createDeck();
    while (deck.length > 0) {
        newDeck.push(shuffle());
    }
};

function clickDraw() {
    hand = [];
    let element = document.getElementById("img-area");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    for (let i = 0; i <= 4; i++) {
        let card = newDeck[newDeck.length - 1];
        hand.push(card);
        let imgSrc;
        if (card.value >= 10) {
            if (card.value == 10) {
                imgSrc = "./images/2color-bf/" + "T" + card.type + ".svg"
            } else if (card.value == 11) {
                imgSrc = "./images/2color-bf/" + "J" + card.type + ".svg"
            } else if (card.value == 12) {
                imgSrc = "./images/2color-bf/" + "Q" + card.type + ".svg"
            } else if (card.value == 13) {
                imgSrc = "./images/2color-bf/" + "K" + card.type + ".svg"
            } else if (card.value == 14) {
                imgSrc = "./images/2color-bf/" + "A" + card.type + ".svg"
            }
        } else {
            imgSrc = "./images/2color-bf/" + card.value + card.type + ".svg"
        }
        let img = document.createElement('img');
        img.src = imgSrc;
        document.getElementById('img-area').appendChild(img);
        newDeck.pop();
    }
    check();
}

function check() {
    hand.sort(function (a, b) {
        return a.value - b.value;
    });
    let d = 0, h = 0, s = 0, c = 0, v = [];
    for (i = 0; i < hand.length; i++) {
        if (hand[i].type === types[0]) {
            d++;
        } else if (hand[i].type === types[1]) {
            h++;
        } else if (hand[i].type === types[2]) {
            s++;
        } else if (hand[i].type === types[3]) {
            c++;
        }
        v.push(areSame(hand[i].value));
    }

    v.sort(function (a, b) {
        return a - b;
    });
    console.log(v)

    if (v.includes(2) && v.includes(3)) {
        ans.textContent = "Full House";
    } else if (v.includes(4)) {
        ans.textContent = "Quadra";
    } else if (v.includes(3)) {
        ans.textContent = "Trinca";
    } else if (v.includes(2)) {
        let j = 0;
        for (let i = 0; i <= v.length; i++) {
            if (v[i] == 2) {
                j++;
            }
        }
        if (j >= 3) {
            ans.textContent = "Dois pares";
        } else {
            ans.textContent = "Par";
        }
    } else if (((hand[0].value + 1) === hand[1].value) &&
        ((hand[1].value + 1) === hand[2].value) &&
        ((hand[2].value + 1) === hand[3].value) &&
        ((hand[3].value + 1) === hand[4].value)
    ) {
        if (d === 5 || h === 5 ||
            s === 5 || c === 5) {

            ans.textContent = "Straight Flush";
        } else {
            ans.textContent = "Sequencia";
        }
    } else {
        ans.textContent = " ";
    }
}

function areSame(value) {
    let count = 0;
    hand.forEach(e => {
        if (value == e.value) {
            count++;
        }
    });
    return count;
}


// (OK) ---> a. Straight Flush: são cinco cartas em sequência e do mesmo naipe; 
// (OK) ---> b. Quadra: quatro cartas do mesmo valor;
// (OK) --->c. Full House: três cartas do mesmo valor e um par de cartas de mesmo valor;
// (OK) ---> d. Sequência: as cinco cartas têm a mesma sequência numérica;
// (OK) ---> e. Trinca: três cartas de mesmo valor;
// (OK) --->f. Dois pares: dois pares de cartas, sendo um par de um valor e outro par de outro valor;
// (OK) --->g. Par: duas cartas de mesmo valor;
// (OK) ---> h. Nada: não fez nada.