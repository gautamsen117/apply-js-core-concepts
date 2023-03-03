function milesToKilometer(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

const miles = 15;
const kilometer = milesToKilometer(miles);
console.log(kilometer);