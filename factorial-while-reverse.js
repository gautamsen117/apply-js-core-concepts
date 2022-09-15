function factorial(number){
    let i = number;
    let result = 1;
    while(i >= 1){
        result = result * i;
        i--;
    }
    return result;
}

let number = 5;
let fact = factorial(number);
console.log(fact);