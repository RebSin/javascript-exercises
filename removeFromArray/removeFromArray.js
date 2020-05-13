const removeFromArray = function(array) {
    let args = [];
    for (let i = 1; i < arguments.length; i++) { //arguments object is a javascript function that refer to a function's arguments
        args.push(arguments[i]); //this puts the arguments into this array
    
        for (let j = 0; j < array.length; j++) {
            if(args.indexOf(array[j]) > -1){ //this checks if the array has the same values in it as the arguments. If it doesn't, it returns -1. 
                array.splice(j, 1); //cut that matched item from the array
            }
        }
    }
    return array;


}

module.exports = removeFromArray
