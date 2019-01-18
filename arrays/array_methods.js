//Array methods

//push the element to end of the array

let fruits = ["Apple", "Banana"];

fruits.push("Pineapple", "Guava");

console.log(fruits);


//Remove the element from end of the array

fruits.pop();

console.log(fruits);

//shift and unshift


fruits.unshift("Papaya", "Watermelon"); //Adds element to begin of the array


fruits.shift(); //removes the first element of the array


fruits.forEach(function(item, index, array){
	console.log(item, index);
});

console.log(fruits);

//find the index of the item

console.log(fruits.indexOf("Banana")); // results 2. if the element is not present outputs -1


//remove an item by index position

fruits.splice(1, 2); //starting postion and length of item

console.log(fruits);

//Copy an array

let fruits_copy = fruits.slice();

console.log(fruits_copy);

fruits_copy.push("Butter fruit");

console.log(fruits_copy);
console.log(fruits);

//is array

console.log(Array.isArray(fruits_copy));

