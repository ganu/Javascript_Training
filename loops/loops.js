/*

while 
	The condition is first evaluated. If true, the block of statements following the while statement is executed. 
	This is repeated until the condition becomes false.
*/


let number = 1;

let sum = 0;

while(number <= 50) {
	sum += number;

	number++;
}

console.log(sum);


/*

do-while loop
	The block following do is executed first and then the condition is evaluated. 
	If the while condition is true, the block is executed again and repeats until the condition becomes false
*/


let number1 = 1;

let sum1 = 0;

do {
	sum1 += number1;
	number1++;
} while (number1 <= 50);

console.log(sum1);


/*

for loop
	
*/

let sum2 = 0;


for (var i = 1; i <= 50; i++) {
	sum2 += i ;
}

console.log(sum2);


/*
For-in loop

	A for-in loop iterates through the properties of an object and executes the loop's body once for each enumerable property of the object.
*/

let loop = {
	name : "for-in-test",
	lang : "javascript",
	type : "learning"
}

for(item in loop) {
	console.log(loop[item]);
}


/*
Break statement

	When JavaScript encounters a break statement in a loop it immediately exits the loop without executing any other statements in the loop. 
	Control is immediately transferred to the statement following the loop body.
*/


let sum3 = 0;


for (var i = 1; i <= 50; i++) {

	if(i == 25) {
		break;
	}
	sum3 += i ;
}

console.log(sum3);


/*
Continue statement

	When JavaScript encounters a continue statement in a loop it stops the execution of the current iteration and 
	goes back to the beginning of the loop to begin the next iteration.
*/

let sum4 = 0;


for (var i = 1; i <= 50; i++) {

	if(i == 25) {
		continue;
	}
	sum4 += i ;
}

console.log(sum4);


