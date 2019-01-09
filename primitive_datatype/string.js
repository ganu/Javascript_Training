/*

values defined inside the single quotes or doubles quotes knows as string

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/


let fName = 'rajeev'; //string
let lName = 'lochan';

console.log(fName);
console.log(typeof fName);

console.log(fName.length); //to find out the string length

console.log(fName.charAt(5));

console.log(fName.concat(' ', lName));

console.log(fName.indexOf('a'));


let fullName = "rajeev lochan"
console.log(fullName.split(' ')); //splits the string as array