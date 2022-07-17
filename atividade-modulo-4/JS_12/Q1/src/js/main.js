

function factorial(n) {

    if (n == 0) 
        return 1;
    else {
        return (n * factorial(n - 1));
    }
}

function euler(){
    const len = 9999;
    let e = 0;

    for(let i = 0; i <= len; i++){
        e += 1/(factorial(i));
    }

    return e.toFixed(50);
}

console.log(BigInt(factorial(170)));

console.log(euler());