#!/usr/bin/node

/*
The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

'''code'''

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

Rewrite it, to perform the same, but without if, in a single line.
*/

let age;
// using the ?
function checkAge(age) {
    return (age > 18) ? true: confirm('Did parents allow you?');
}

// using the '||'
function checkAge1(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

/*
Write a function min(a,b) which returns the least of two numbers a and b.
example:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a, b) {
    if (a > b) {
	return b;
    } else {
	return a;
    }
}
/*
// using the '?' operator

function min(a, b) {
    return a < b ? a : b;
}
*/

/*
Write a function pow(x,n) that returns x in power n.
Or, in other words, multiplies x by itself n times and returns the result.

example:
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

function pow(x, n) {
    if (n < 0) {
	console.log('No negatives');
    }
    if (n === 1) {
	return x;
    } else {
	return x ** n;
    }
}

function mains() {
    let x = +prompt('Enter number to be powered', '');
    let n = +prompt('Enter power', '');
    console.log(pow(x, n));
}
