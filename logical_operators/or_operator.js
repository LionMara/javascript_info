#!/usr/bin/node

/*
syntax is:
result = a || b;
*/


// There are four possible cominations
console.log(false || false); //false
console.log(false || true);  //true
console.log(true || false);  //true
console.log(true || true);   //true
console.log('\n');

/*
values, if not boolean, are converted
In the next example, 1 and 0
are converted to true and false
*/

if ( 1 || 0) {
    console.log('truthy');
}
console.log('\n');

console.log('example');
let hour = 9;

if (hour < 10 || hour > 18) {
    console.log('Office is closed'); // cond1 evaluates to true
}
console.log('\n');

console.log('example - OR taking more conditions.');
console.log('\n');
hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    console.log('The office is closed');
}

/*
OR operation
* Evaluation - Left to right
* Operands converted to boolean, if not boolean.
* If true, operation stops and original value returned
* If all are false, last operand in its original form is returned
*/
console.log('\n');
console.log('example');

console.log(1 || 0); //1
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1
console.log(undefined || null || 0); // 0
console.log('\n');
/*
Short circuit Eval.
OR evaluates args and stops upon a truthy value.
Important if the operand is important,
maybe like a function or even an assignment.
*/

console.log('example');
true || console.log('not printed');
false || console.log('printed');

// feature is used to execute commands only if conditionson the left is falsy
