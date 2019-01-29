/*
There’s a “root” object called window. It has two roles:

1. First, it is a global object for JavaScript code
2. Second, it represents the “browser window” and provides methods to control it.

DOM - Document Object Model
*/

function sayHi() {
  alert("Hello");
}

// global functions are accessible as properties of window
//window.sayHi();


//alert(window.innerHeight); // inner window height

//The document object gives access to the page content. We can change or create anything on the page using it.

// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);


console.log(location.href);