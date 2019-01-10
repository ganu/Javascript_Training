/*
	A variable that has not been assigned a value is of type undefined. 
	A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. 
	A function returns undefined if a value was not returned.
*/


let x;


console.log("Variable type is : " + typeof x);



function TestUndefined()
{

	let y = 'Javascript';
}


console.log("Function type is: " + TestUndefined());



function variableAsUndefined() {
	let undefined = 'Undefined variable name'; // Dont use it like this

	console.log(undefined);
	console.log(typeof undefined);
}


variableAsUndefined();
