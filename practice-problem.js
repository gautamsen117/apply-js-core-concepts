/* 1.
Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.
*/
function hourToMinutes(hour) {
    const result = hour * 60;
    return result;
}
const myTimes = 2;
const durationTimeInMinutes = hourToMinutes(myTimes);
console.log(durationTimeInMinutes);

/* 2.
Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result.
*/

function findLeapYear(array) {
    let leapYear = [];
    for (let i = 0; i < array.length; i++) {
        const index = i;
        const element = array[index];
        if (element % 4 === 0) {
            leapYear.push(element);
            // console.log(i, element);
        }
    }
    return leapYear;
}

const array = [2023, 2024, 2025, 2028, 2030];
const leapYear = findLeapYear(array);
console.log(leapYear);

/* 3.
Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers
*/

function findOddSum(numbers) {
    let oddSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            oddSum = oddSum + element;
            // console.log(i, element, oddSum)
        }
    }
    return oddSum;

}

const numbers = [5, 7, 8, 10, 45, 30];
const myOddSum = findOddSum(numbers);
console.log(myOddSum);
