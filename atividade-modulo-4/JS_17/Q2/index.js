
let arr = [];

Promise.all([
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1'),
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1'),
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1'),
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1'),
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
])
.then(async(res)=>{

    for await(const r of res){
        arr.push(await r.json());
    }

    return arr;
})
.then((arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].cards[0].code);
    }   
});

