const caesar = function(str, num) {

    const alphabet = {
        "a" : 1,
        "b" : 2,
        "c" : 3,
        "d" : 4,
        "e" : 5,
        "f" : 6,
        "g" : 7,
        "h" : 8,
        "i" : 9,
        "j" : 10,
        "k" : 11,
        "l" : 12,
        "m" : 13,
        "n" : 14,
        "o" : 15,
        "p" : 16,
        "q" : 17,
        "r" : 18,
        "s" : 19,
        "t" : 20,
        "u" : 21,
        "v" : 22,
        "w" : 23, 
        "x" : 24,
        "y" : 25,
        "z" : 26,
    } //holds the alphabet and numerical values

    let splitUserInput = str.split("");  
    splitUserInput = splitUserInput.map(function(x){ //goes thro each split value
        let validChar = /^[A-Za-z]+$/;
        if (!x.match(validChar)) { //checks if x isn't equal to alphabet, and returns if not. This is to pass thro any spaces, special characters.
             return x;
        }
        
        let lowVal = x.toLowerCase(); //sets value to lowercase for easy processing
        
        let checkIfUpper;
        if (x.toLowerCase() != x) {
            checkIfUpper = true;
        } else {
            checkIfUpper = false;
        } //checks the actual case value 

        let currVal = alphabet[lowVal]; //get curr num of the word
        let newVal = currVal + num; //add onto it the displacement
        if (newVal > 26) {
            newVal = newVal % 26;
        } //if the value is too high, reduce it
        if (newVal < 0) {
            newVal = 26 + newVal;
        } //if the value is too low, add it to the end so it goes up


        for (let transformLetter in alphabet) { //loop thro alpha
            if (alphabet[transformLetter] == newVal) { //if key of new value is found
                if (checkIfUpper) { //check its capitalization + return it
                    return transformLetter.toUpperCase();
                } else {           
                    return transformLetter.toLowerCase();
                }
     
            } 
        }

    });
    let joinedString = splitUserInput.join(""); //join the string back together and return final val
    return joinedString;
}

module.exports = caesar
