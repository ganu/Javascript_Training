/*

A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. 

The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), 

it has access to the outer function’s variables, and it has access to the global variables.
*/

function outerFunction(arg1, arg2) {
	let outerVar = "Hello";

	function innerFunction() {
		console.log(outerVar + " " + arg1 + " " + arg2);
	}

	return innerFunction();
}


outerFunction("Javascript", "Closure");



//Example 2

function outerFunction1 (arg1) {
	let outerVar1 = "Hello";

	function innerFunction1(arg2) {
		console.log(outerVar1 + " " + arg1 + " " + arg2);
	}

	return innerFunction1;
}


var haveFunction = outerFunction1 ("Javascript");

haveFunction("Closure");