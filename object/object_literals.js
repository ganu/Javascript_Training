/*

An object is an unordered list of primitive datatypes.

collection of all primitive data types and sometimes times referenced data types

It is stored as a name value pairs

Each item in the object is called property and function is called methods

Access property using dot notation or using brackers ([])

Object Data Properties Have Attributes

Each data property (object property that store data) has not only the name-value pair, 
but also 3 attributes (the three attributes are set to true by default):
	—  Configurable Attribute: Specifies whether the property can be deleted or changed.
	— Enumerable: Specifies whether the property can be returned in a for/in loop.
	— Writable: Specifies whether the property can be changed.

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

console.log("isMarried" in Person);


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


let objprop = {};

Object.defineProperty( objprop, 'fobj1', {
   value: "some value",
   
    configurable: true,

});

for (eachItem in objprop) {
	
	console.log(eachItem);
}

objprop.fobj1 = "Editing";

delete objprop.fobj1;
console.log(objprop.fobj1);
