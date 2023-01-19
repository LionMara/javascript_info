#!/usr/bin/node

/*
Functions are the main building blocks of a program.
They allow code to be called severarrly w/o repetion

syntax
function name(parameter1, parameter2, ..., parameterN) {
     // code
}

*/

// example
function showMessage() {
    console.log('Hello Everyone');
}
showMessage();

/*
Local variables.
These are declared and only used in the function
*/

//example
function showMessage1() {
    let message = 'Hello, call me Lion'; // local variable

    console.log(message);
}
showMessage1();
//console.log(message); // results in an error

/*
Outer variables
These are declared outside a function.
*/

let userName = 'John';

function showMessage2() {
    let userName = 'Bob';
    let message = 'Hello, ' + userName;
    console.log(message);
}
console.log(userName); // John before the call

showMessage2();

console.log(userName); // Bob after the call

/*
Parameters and Args
Parameters are the variables inside parentheses in thesefunction declaration.
Arguments are the value that is passed when a function is called.

*/

// example

function showMessage3(from, text) {
    from = '*' + from + '*';
    console.log(from + ': '+ text);
}
let from = 'Ann';
showMessage3(from, 'Hello');
console.log(from);

/*
Default values.
When an arg isn't passed the default value is undefined.

example
showMessage(from, text)
showMessage('Ann') will display as Ann: undefined.

*/

// example with default text given

function showMessage4(from, text= 'No text given') {
    console.log(from + ': ' + text);
}
showMessage4('Ann');

/*
Alternative default parameters
It would make sense assigning default values
for parameters at a later stage after function declaration
. We check if parameter is passed by comapring with undefined
*/

function showMessage5(text) {

    if (text === undefined) {
	text = 'Empty Message';
    }
    console.log(text);
}
showMessage5();

/*
modern JS engines allow the '??' to be used, since some falsy
values can be considred as normal values.

*/
function showCount(count) {
    console.log(count ?? 'Unknown');
}

showCount(0);
showCount(null);
showCount();

/*
Functions can also return values
*/

function sum(a, b) {
    return (a + b);
}
let result = sum(1, 2);
console.log(result);


/*
multiple returns in one function
*/

function checkAge(age) {
    if (age >= 18) {
	return true;
    } else {
	return confirm('Do you have permission from parentrs?');
    }
}
let age = prompt('How old are you?', 18);

if (checkAge(age)) {
    console.log('Access Granted');
} else {
    console.log('Access Denied');
}


// return can also lack a value

function showMovie(age) {
    if (!checkAge(age)) {
	return;
    }
    console.log('Showing the movie');
}
