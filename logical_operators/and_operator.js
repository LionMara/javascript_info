#!/usr/bin/node

//AND operator - '&&'

/*
AND works more like the OR operator.
The difference is that it finds the first falsy value.
*/

console.log('Example');
console.log(1 && 0); // 0 returns falsy value
console.log(1 && 5);  //5 returns last operand
console.log('\n');

// passing several values is possible.

console.log('Example');
console.log(1 && 2 && null && 3); // null
