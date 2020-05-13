const leapYears = function(yearVal) {
    if (yearVal % 4 == 0 && yearVal % 100 != 0) {
        return true;
    } 
    if (yearVal % 100 == 0 && yearVal % 400 == 0) {
        return true;
    }
    return false;

}

module.exports = leapYears
