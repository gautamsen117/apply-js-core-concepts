function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumber = isEven(24);
console.log(myNumber);
const herNumber = isEven(505);
console.log(herNumber);
