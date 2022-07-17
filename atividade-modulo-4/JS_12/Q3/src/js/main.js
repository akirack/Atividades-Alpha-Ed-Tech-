let ans = document.querySelector("h1");

// function pi(){
//     const l = 999;
//     let p = 0;

//     for(let i = 0; i <= l; i++){
//         if(i % 2 === 0){
//             p += 1/((1 + 2*i) * Math.pow(3, i));
//         }else{
//             p -= 1/((1 + 2*i) * Math.pow(3, i));
//         }
//     }

//     return (Math.sqrt(12)*p).toPrecision(100);
// }

// console.log(pi());

let i = 1n;
let x = 3n * (10n ** 10020n);
let pi = x;
while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
}

ans.innerHTML = pi / (10n ** 20n);