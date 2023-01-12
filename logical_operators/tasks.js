#!/usr/bin/node
const prompt = require("prompt-sync")();

//What's the result of OR?
let result = (null || 2 || undefined);
console.log(result); // 2

//What's the result of OR'ed logs??
console.log(console.log(1) || console.log(2) || console.log(3)); // 1 then 2
console.log('\n');
/*
Explanation:
I will tell you soon.
*/

//What is the result of AND?
let result1 = (1 && null && 2);
console.log(result1); //null

console.log('\n');
// The result of OR AND OR
result2 = (null || 2 && 3 || 4);
console.log(result2); // 3
console.log('\n');


/*
an if condition to check that age is between 14 and 90 inclusively.
inclusively means the age can reach edges 14 and 90
*/

let age = 5;

if (age >= 14 && age <= 90) {
    console.log('age within bounds');
}
console.log('\n');
/*
an if condition to check that age is NOT between 14 and 90 inclusively.
*/

if (!(age >=14 && age <=90)) {
    console.log('below or over');
}

console.log('\n');
// another variant
if (age <14 || age > 90) {
    console.log('below and over');
}

console.log('\n');
// A question about if
// What if statement will execute?

if(-1 || 0) console.log('first'); // will execute
if (-1 && 0) console.log('second'); // will not
if(null || -1 && 1) console.log('third'); //will execute
console.log('\n');

/*
Check the login
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password,
if the input is an empty line or Esc – show “Canceled”,
if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

*/

//check for login
let login = prompt("Who's there? ", '');
let password;

if (login == 'Admin') {
    //password check
    password = prompt("Password? ", '');
    if (password == 'TheMaster') {
	console.log('Welcome');
    }else if (password === null || password === '') {
	console.log('Canceled');
    }else {
	console.log('Wrong Password');
    }

}else if (login === null || login === '') {
    console.log('Cancelled');
}else {
    console.log("I don't know you");
}
