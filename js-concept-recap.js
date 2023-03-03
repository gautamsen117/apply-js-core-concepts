// Basic JS check list
for(let i = 1; i <= 100; i++){
    // console.log(i);
}
// 50 to 80 all odd numbers
for(let i = 50; i <= 80; i++){
    if(i % 2 !== 0){
        // console.log(i);
    }
}
// a function where have 3 parameter and return parameter sum
function add(num1, num2, num3){
    const sum = num1 + num2 + num3;
    return sum;
}
const parametersSum = add(5, 10, 15);
// console.log(parametersSum);

// Object revision
// How many way we got object property value
const mobile = {
    brand: 'Vivo',
    price: 16250,
    camera: '16MP',
    storage: '2GB',
    color: 'White'
}
// console.log(mobile.brand);
// console.log(mobile['brand']);

// console.log(Object.keys(mobile))
// console.log(Object.values(mobile))


// write a function where parameter will be a celsius and return Fahrenheit 

function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
const todayFahrenheit = celsiusToFahrenheit(24);
// console.log(todayFahrenheit);

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
const todayCelsius = fahrenheitToCelsius(80);
// console.log(todayCelsius);

function letterGrade(marks){
    if(marks > 100){
        console.log('Something wrong');
    }
    else if(marks >= 80){
        console.log('A+');
    }
    else if(marks >= 70){
        console.log('A');
    }
    else if(marks >= 60){
        console.log('A-');
    }
    else if(marks >= 50){
        console.log('B');
    }
    else if(marks >= 40){
        console.log('C');
    }
    else if(marks >= 33){
        console.log('D');
    }
    else{
        console.log('F')
    }
}

letterGrade(77);