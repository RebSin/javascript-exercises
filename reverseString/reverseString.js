const reverseString = function(theText) {
    let splitString = theText.split("");
    let reverseString = splitString.reverse();
    let joinTheString = reverseString.join("");
    return joinTheString;
}

module.exports = reverseString
