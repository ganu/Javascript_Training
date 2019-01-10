/*

Defining object constructor
*/



let myObj = new Object();

myObj.fname = 'First Name';
myObj.lname = 'Last Name';

console.log(myObj);



function employee (fname, lname)
{
	this.fName = fname;
	this.lName = lname;
}

let employeeObj = new employee('Object', 'constructor');

console.log(employeeObj);