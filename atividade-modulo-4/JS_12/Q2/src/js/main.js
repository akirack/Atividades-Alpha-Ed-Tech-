
function isPrime(p){
    for(let i = 2n; i*i <= p; i++){
        if(BigInt(p) % i === 0n){
            return false;
        }
    }

    return true;
}

function isPrimeArr(t){
    let arr = [];

    for(let i = 0; i <= t; i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }

    return arr;
}

console.log(isPrimeArr(999999n));
