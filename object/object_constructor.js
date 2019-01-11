/*

Defining object constructor

find out the parent object 

print key and value of the both parent and own property
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