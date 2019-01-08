/*
	Variables and Scopes


	var name = 'Ganesh';

	let lName = 'Iyer';

	Scopes -> Global Scope and Function Scope

	Template strings are mentioned inside `${variable/function}`

	var [foo, bar, baz] = one; //Assigning array values to variables. Note: Same as list() in PHP

	string methods - str.starsWith(), str.endsWith(), str.includes()

	spread operator - ... (https://codeburst.io/javascript-the-spread-operator-a867a71668ca)

	Example spread operator:

		var arr = ['a', 'b', 'c'];
		var arr2 = ['d', 'e', 'f'];
		arr = [...arr, ...arr2];
		console.log(arr);
		// ['a', 'b', 'c', 'd', 'e', 'f']

*/


var globalVariable = "global"; //global variable

/*
Global Function
*/
function globalFunction() {
	var insideFunction = "FuctionScope";

	console.log(insideFunction);

	let blockScope = "Outside block";

	if(true) {
		let blockScope = "Testing block scope";
		console.log(blockScope);
	}

	console.log(blockScope);

}

console.log(globalVariable);


var globalVariable = "variable using let"; //overriding global variable

let globalVariableWithLet = "Using Let"; //overriding global variable

console.log(globalVariable);
console.log(globalVariableWithLet);

globalFunction(); //Executing function

