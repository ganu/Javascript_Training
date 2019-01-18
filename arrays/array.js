/*

It consists of two square brackets that wrap optional array elements separated by a comma. 

Array elements can be any type, including number, string, Boolean, null, undefined, object, function, regular expression and other arrays.

*/

var array = [1, 2, 3, 4, 5];


console.log(array);

console.log(typeof array); //object


//accessing array element;

console.log(array[3]) //Outputs 4. array start with count 0

//assigning value to array

array[5] = 6;

console.log(array);

array["test"] = "Testing";

console.log(array);


//Find out the length of the array

console.log(array.length);



//iterating over array

for(var i in array) {

	console.log(i + ":" + array[i]); //Keys:Values

}


//Deleting array elements

delete array["test"];

console.log(array);

console.log(array.length);


let employee = [];

employee["name"] = "Ganesh";
employee["gender"] = "Male";

console.log(employee);
console.log(employee.length);