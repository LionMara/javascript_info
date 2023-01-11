#!/usr/bin/node

//NOT operator, (!)

/*
syntax of NOT is simple:
result = !value;

operation:
1. converts operand to boolean type, true or false
2. returns the inverse of value
*/
console.log('Example');
console.log( !true); //false
console.log( !0); //true.

/*
A double NOT (!!) is used for converting value to boolean.
*/
console.log('Example');

console.log(!!'Non-empty-string'); // true
console.log(!!null); // false
