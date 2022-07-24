
function draw(){
    const state = fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res.cards[0].code);
    })
    .catch((error) => {
        console.log(error);
    });
}

for(let i = 0; i < 5; i++){
    draw();
}