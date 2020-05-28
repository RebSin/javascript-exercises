const palindromes = function(a) {
    let removeCaps = a.toLowerCase();
    let removeSpecialCharacters = removeCaps.replace(/[^a-zA-Z0-9]/g, "")
    let splitString = removeSpecialCharacters.split("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join("");


    if (removeSpecialCharacters == joinString) {
        return true;
    } else {
        return false;
    }

}

module.exports = palindromes
