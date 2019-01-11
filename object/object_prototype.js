/*
Using prototype
*/


function Car() {};

Car.prototype.color = "red";


carObject = new Car();

carObject.type = "Sedan";

carObject.wheeltype = "Alloy";

console.log(carObject);

console.log(carObject.hasOwnProperty('type')); //returns true

console.log(carObject.hasOwnProperty('color')); //return false (color is in parent object)

console.log(parent.carObject);


//The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs

console.log(Object.entries(carObject)); 

//Accessing and Enumerating Properties on Objects

for (eachItem in carObject) {
	
	console.log(eachItem + ":" +carObject[eachItem]);
}


delete carObject.type; //deleting own property
delete carObject.color; //deleting parent property


for (eachItem in carObject) {
	
	console.log(eachItem + ":" +carObject[eachItem]);
}


//object create method

function employee() {};

employeeObject = Object.create(employee);

console.log(employeeObject);


//defineProperties

const object1 = {};


Object.defineProperties(object1, {
  personal: {
    value: 42,
    writable: true
  },
  property2: {}
});


console.log(object1.personal);

//objectFreeze

/*
The Object.freeze() method freezes an object. A frozen object can no longer be changed; 
freezing an object prevents new properties from being added to it, existing properties from being removed, 
prevents changing the enumerability, configurability, or writability of existing properties, 
and prevents the values of existing properties from being changed. 
In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.*/

Object.freeze(carObject);

carObject.wheeltype = 'normal'; //throws error in strict mode


console.log(carObject.wheeltype);


console.log(Object.keys(carObject)); //prints object keys as an array

console.log(Object.values(carObject)); //prints object values as an array


