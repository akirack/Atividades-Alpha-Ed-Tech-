function sum(num1, num2) {
    try {
        if(isNaN(num1) || isNaN(num2)){
            throw `[sum] Impossible to sum ${num1} + ${num2}`;
        }
      
        function op(num1, num2, aux){
            if(num2 === aux){
                return num1;
            }
        
            return op(++num1, num2, ++aux);
        }

        return op(num1, num2, 0);
    }
    
    catch(e) {return e;}
}

function subtraction(num1, num2) {
    try {
        if(isNaN(num1) || isNaN(num2)){
            throw `[sub] Impossible to sub ${num1} - ${num2}`;
        }
    
        else if(num1 < num2){
            throw `[sub] Impossible to sub. ${num1} must be higher ${num2}`;
        }

        function op(num1, num2, aux){

            if(num1 === sum(num2, aux)){
                return aux;
            }
        
            return op(num1, num2, sum(aux, 1));
        }

        return op(num1, num2, 0)
        // else if(num2 > 0){
        //     return subtraction((--num1), (--num2));
        // }

        //return num1;

        //return op(-num2, num1);
       
    } 
    
    catch (e) {return e;}
}

function multiply(num1, num2) {
    try {
        if(isNaN(num1) || isNaN(num2)){
            throw `[mul] Impossible to multiply ${num1} * ${num2}`;
        }

        function op(num1, num2, aux){
            if(num2 >= 1){
                return  op(num1, subtraction(num2, 1), sum(aux, num1), );
            }
        
            return aux;
        }

        return op(num1, num2, 0);
    }

    catch (e) {return e;}
}

function power(num1, num2){

   try {

    if(isNaN(num1) || isNaN(num2)){
        throw `[mul] Impossible to multiply ${num1} * ${num2}`;
    }

    if(num2 === 0){
        return 1;
    }

    function op(num1, num2, aux){


        if(num2 >= 1){
            return op(num1, subtraction(num2, 1), multiply(aux, num1));
        }
    
        return aux;
    }

    return op(num1, num2, 1);
    
   } catch (e) {return e;}
}

function division(num1, num2){

    function op(num1, num2, aux, aux2){
    
        try {
            if(num1 === 0){
                return 0;
            }
        
            else if(num2 === 0) {
                throw `[div] Impossible to div ${num2} has to be difference to "0"`;
            }
        
            else if(num1 === num2){
                return 1;
            }  
    
            else if(num1 < num2){
                throw `[div] Impossible to div ${num1} must be higher ${num2}`;
            }
    
            else if(num1 === (multiply(num2, sum(aux, 1)))){
                return sum(aux, 1);
            }
    
            return op(num1, num2, sum(aux, 1), multiply(num2, sum(aux, 1)));
    
        } catch (e) {return e;}
    }

    return op(num1, num2, 0, 0);
}


console.log("soma");
console.log("**********************");

console.log(sum(0,0));
console.log(sum(1,0));
console.log(sum(0,1));
console.log(sum(1,1));
console.log(sum(232,1123));
console.log(sum(192,942));

console.log("subtração");
console.log("**********************");

console.log(subtraction(0,0));
console.log(subtraction(1,0));
console.log(subtraction(0,1));
console.log(subtraction(1,1));
console.log(subtraction(3232,1123));
console.log(subtraction(1192,942));
console.log(subtraction(532,123));
console.log(subtraction(119,92));

console.log("Multiplicação");
console.log("**********************");

console.log(multiply(0,0));
console.log(multiply(1,0));
console.log(multiply(0,1));
console.log(multiply(1,1));
console.log(multiply(323,13));
console.log(multiply(12,2));
console.log(multiply(2,13));
console.log(multiply(1,92));


console.log("power");
console.log("**********************");

console.log(power(0,0));
console.log(power(0,1));
console.log(power(1,0));
console.log(power(1,1));
console.log(power(1,92));
console.log(power(65,0));
console.log(power(3,4));
console.log(power(12,2));
console.log(power(2,6));
console.log(power(6,4));
console.log(power(10,4));
console.log(power(25,3));

console.log("divisao");
console.log("**********************");

console.log(division(0,0));
console.log(division(0,1));
console.log(division(1,0));
console.log(division(1,1));
console.log(division(89,1));
console.log(division(65,0));
console.log(division(12,4));
console.log(division(12,2));
console.log(division(24,6));
console.log(division(60,4));
console.log(division(10,5));
console.log(division(25,5));