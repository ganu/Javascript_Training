/*

if

	The if statement executes a block of code if the conditional expression inside a pair of parentheses evaluates to true. 
	The conditions typically involve comparison of variables for equality or inequality.
*/


let target = 300;

var runs = 310;

if(runs > target) {
	console.log("Won");
}


/*

if-else

	The if-statement may contain an optional else clause that specifies an alternative course of action. 
	The else clause is executed if the expression in the if-statement is evaluated to false.
*/

var runs = 290;

if(runs > target) {
	console.log("Won");
} else {
	console.log("Lose");
}


/*


if…else if…else statement
	
	To test the multiple conditions.

*/

var runs = 300;

if(runs > target) {
	console.log("Won");
} else if(runs == 300) {
	console.log("Draw");
} else {
	console.log("Lose");
}


/*

Switch statement


*/

var runs = 350;

switch (runs) {

	case 360:
		console.log('Won');
		break;
	case 250:
		console.log('lost');
		break;
	case 350:
		console.log('Draw');
		break;
	default:
		console.log('Match is not yet over');
		break;
}
