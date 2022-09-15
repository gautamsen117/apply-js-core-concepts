/* const myInch = 12;
const myFeet = myInch / 12;
console.log(myFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('Dada Feet:', dadaFeet);

const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log('Dadi feet:', dadiFeet); */

function inchesToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchesToFeet(dadaInches);
console.log(dadaFeet);
const daduInches = 260;
const daduFeet = inchesToFeet(daduInches);
console.log('Dadu Feet:', dadaFeet);