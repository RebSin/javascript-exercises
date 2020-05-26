function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
	
}

function sum (array) {
	let total=0;
	for (let i = 0; i < array.length; i++){
		total += array[i];
	}
	return total;
	
}

function multiply (array) {
	let total = 1;
	for (let i = 0; i < array.length; i++){
		total *= array[i];
	}
	return total;
	
}

function power(a, b) {
	return a**b;
}

function factorial(a) {
	if (a == 0) {
		a = 1;
		return a;
	}
	return (a * (factorial(a -1)));
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}