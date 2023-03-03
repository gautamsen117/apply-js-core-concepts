/* 
function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
} 
*/

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;
}

const isMyYearLeapYear = isLeapYear(2021)
console.log(isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log(isHerYearLeapYear);