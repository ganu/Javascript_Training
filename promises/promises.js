/**

Promises

Promises in JavaScript are a way to handle async calls. 
Before Promises were introduced in JavaScript ES6, async calls in JavaScript were handled using callback functions. 
Promises provide a cleaner, more elegant syntax and methodology to handle async calls.

https://medium.freecodecamp.org/promises-in-javascript-explained-277b98850de

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.

**/


/* Every Promise() structure has 2 parts */

//First Part           
/* Create the Promise() and define the conditions of what is considered successful and not successful.*/
let dataReceived = true;

let promise1 = new Promise( (resolve, reject) => {

	if(dataReceived) {
		resolve("Data successfully received"); //This condition is considered successful, hence invoke resolve()
	} else {
		reject("Data Correpted"); //This condition is considered NOT successful, hence invoke reject()
	}
});


//Second Part
/* Define what to do when the successful condition(i.e. resolve()) is 
met, and what to do when the not successful condition(i.e. reject()) is met. */

promise1.then((message) =>{
	console.log(message); /* define the resolve() function, In other words, what to do when the promise is successful. */
}).catch((message) => {
	console.log(message); /* define the reject() function, In other words, what to do when the promise is NOT successful.*/
});



//second example

var requestComplete = true;
promise1 = new Promise((resolve, reject) => {
  if (requestComplete)
    resolve("data received from 1");
})
promise2 = new Promise((resolve, reject) => {
  if (requestComplete)
    resolve("data received from 2");
})
promise3 = new Promise((resolve, reject) => {
 
 setTimeout( ()=>{
 resolve("data received from 3");
 }
,2000);
//We simulate a delay in data receipt by using setTimout() 
})

// promise1.then((message) => {
//      console.log(message);
//      return promise2; //return promise2 when promise1 resolves.
// }).then((message) => {
//      console.log(message);
//      return promise3; //return promise3 when promise2 resolves.
// }).then((message) => {
//      console.log(message); //resolve promise3.
// })


// Promise.all([promise1, promise2, promise3]).then( (message) => {
//   console.log(message);
// })

Promise.race([promise1, promise2, promise3]).then( (message) => {
  console.log(message);
});