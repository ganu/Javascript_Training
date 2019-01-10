/*

An object is an unordered list of primitive datatypes.

collection of all primitive data types and sometimes times referenced data types

It is stored as a name value pairs

Each item in the object is called property and function is called methods

Access property using dot notation or using brackers ([])
*/


let Person = {
	fName : "FirstName", //string
	lName : "LastName",
	age : 27, //number
	isMarried: false, //boolean
	job: null, //null
	50: "Key as number type",
	fullName () {
		return this.fName + " " + this.lName;
	},
	body : {weight : 68, height : 5.6}
}

console.log(Person.fName + " " +Person.lName); // calling object property using dot notation

console.log(Person[50]); // calling object property using array brackets

console.log(Person.fullName());

console.log(Person.body.height);


//Reference Data type
let year = 2019;

let current_year = year;

year = 2020;

console.log(year);
console.log(current_year);


//Copied the person object to another variable
let anotherPerson = Person;

console.log(anotherPerson);

Person.fName = "Updated First Name";

console.log(anotherPerson); //value has changed
