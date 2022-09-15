function mileToKilometer(miles){
    const kilometer = miles * 1.60934;
    return kilometer;
}

const officeDistance = 2;
const officeDistanceKm = mileToKilometer(officeDistance);
console.log('Office distance in KM:', officeDistanceKm);