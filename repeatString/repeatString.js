const repeatString = function(theHey, theAmount) {
    theHey = "hey";
    let returnedString = "";
    for (let i = 0; i < theAmount; i++){
        
        returnedString = returnedString + theHey;
    }
    if (theAmount < 0) {
        returnedString = "ERROR";
    }
    return returnedString;
}

module.exports = repeatString
