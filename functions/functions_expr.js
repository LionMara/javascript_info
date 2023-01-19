#!/usr/bin/node

/*
Before we get to Function expressions,
how about we define functions declarations.

1. Function declaration.

Syntax:
function sayHi() {
     alert('Hello');
}

2. Function expression.

Syntax:

let sayHi = function() {
     alert('Hello');
};


*/

// function is a value
function sayHi() {
    console.log('Hello');
}

let func = sayHi;

sayHi();
func();

/*
The above code written in Function expressions
*/

let sayHi1 = function() {
    console.log('Hello');
};

let func1 = sayHi1;

func1()

/*
Callback functions
We'll write a function ask(question, yes, no)
the parameters:
Question - text of question
yes - function to run if answer is yes
no - function to run if answer is no



function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    console.log('You agreed');
}
function showCancel() {
    console.log('You cancelled');
}

ask('Do you agree?', showOk, showCancel);
*/


sayHi2('John');

function sayHi2(name) {
    console.log(`Hello, ${name}`);
}

/*
this can't work

sayHi3('John');

let sayHi3 = function(name) {
    console.log(`Hello, ${name}`);
};

*/

/*
in strict mode
function declaration within code blocks only work
within those code blocks and notoutside them
*/
console.log('\n');
console.log('example');
let age = 19;

if (age < 18) {
    function welcome() {
	console.log('Hello');
    }
} else {
    function welcome() {
	console.log('Greetings!')
    }
}

welcome();
