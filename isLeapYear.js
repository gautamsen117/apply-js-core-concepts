/* 
function isLeapYear(year){
    const leapYear = year % 4;
    if(leapYear === 0){
        return true;
    }
    else{
        return false;
    }
} 
*/
function isLeapYear(year){
    const leapYear = year % 4;
    if(leapYear === 0){
        return true;
    }
    return false;
}

const year1 = 1952;
const is1952LearYear = isLeapYear(year1);
console.log(is1952LearYear);
const year2 = 2022;
const is2022LeapYear = isLeapYear(year2)
console.log(is2022LeapYear);