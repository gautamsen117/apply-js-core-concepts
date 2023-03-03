/* function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const num = 120;
const evenNumber = isEven(num);
console.log(evenNumber); */

function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);

const herNumberIsEven = isEven(1440);
console.log(herNumberIsEven);