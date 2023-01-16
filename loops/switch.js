#!/usr/bin/node
const prompt = require('prompt-sync')();
/*
*The switch statement*

The switch statement can be used to replace multiple if statements.
Syntax:

let x = 4;

switch (x) {
    case 'value1':
       ...
       [break]

    case 'value2':
       ...
       [break]

    default:
       ...
       [break]
}

Value of x is checked for stict equality with value1
if it matches the cose in the case clause executes.
If equality is not matched the next case is eval'ed.

The code executes till a break statement or end of switch.
*/

// example
console.log('Example 1');
// console.log('\n');
let a = 2 + 2;

switch (a) {
  case 3:
    console.log('Too small');
    break;
  case 4:
    console.log('Exactly');
    break;
  case 5:
    console.log('Too big');
    break;
  default:
    console.log('Make your values easy to read');
    break;
}

/*
Grouping od 'case'
Several cases that share code can be grouped together
*/
console.log('\n');
console.log('Example 2');
a = 3;

switch (a) {
case 4:
    console.log('Right');
    break;
case 3:
case 5:
    console.log('Wrong');
    console.log('Math is important to avoid these mistakes');
    break;
default:
    console.log('The result is strange.');
    break;
}


/*
Type matters
switch always checks for strict equality.
For the values to match, they must be of the same type
*/

// example
console.log('\n');
console.log('Example 3');
let arg = prompt('Enter a value?');

switch (arg) {
case '0':
case '1':
    console.log('One or zero');
    break;
case '2':
    console.log('Two');
    break;
case 3:
    console.log('Never executes, because, check types');
    break;
default:
    console.log('An unknown character just pulled up');
    break;
}
