#!/usr/bin/node

/*
Arrow functions,the basics
Arrow functions create functions too but probably
better than function expressions.
syntax:
let func = (arg1, arg2,..., argN) => expression;

this is just the shorter version of:

let func = function(arg1, arg2,..., argN) {
     return expression;
};

*/

// an example
let sum = (a, b) => a + b;

/*
The aboe is just--
let sum = function(a, b) {
    return a + b;
};
*/
console.log(sum(2, 3))

// if argument passed is one, no need of parentheses.

let double1 = n => n * 2;
console.log(double1(3));

// when no args are passed, parentheses are empty but present

let sayHi = () => console.log('Hello');
sayHi();

// arrow function used to create anonymous functions

let age = prompt('What is your age?', 18);

let welcome =  (age < 18) ?
    () => console.log('Hello') :
    () => console.log('Greetings');
welcome();

/*
Multiline arrow functions
If we might need complex functions with multiple
expressions and statements, we introduce curly braces.
Only that curly braces must include a return staement
just like a regular function does.
*/

let sum = (a,b) => {
    let result = a + b;
    return result;
};

console.log(sum(1, 2));

/* taskks */
/*
Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.");
);
