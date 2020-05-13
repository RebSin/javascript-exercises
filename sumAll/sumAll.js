const sumAll = function(num1, num2) {

    if (num1 > num2) {
        let num3 = num1;
        num1 = num2;
        num2 = num3;
    }
    if (num1 < 0) {
        return "ERROR";
    }

    if (typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR";
    }

    const firstNum = num1;
    let finalNum = 0;
    
    for (let i = firstNum; i <= num2; i++) {
        finalNum = finalNum + i;
                  
    }
    return finalNum;

}

module.exports = sumAll
