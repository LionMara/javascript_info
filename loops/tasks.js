#!/usr/bin/node

// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
    console.log(i--); // 3, 2, 1
} // last value is 1 as 0 becomes false
console.log('\n');


// Which values does the while loop show?
// For every loop iteration, write down which value it outputs

// 1 prefix '++1'
console.log('prefix');
i = 0;
while (++i < 5) console.log(i); //1, 2, 3, 4
console.log('\n');
// 2 postfix i++

console.log('postfix')
i = 0;
while (i++ < 5) console.log(i); // 1, 2, 3, 4
console.log('\n');

// Use the for loop to output even numbers from 2 to 10.

console.log('outputting even nos');
for (i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
	console.log(i);
    }else {
	continue;
    }
}

/*
Write a loop which prompts for a number greater than 100.
If the visitor enters another number – ask them to input again.

The loop must ask for a number
until either the visitor enters a number greater than 100
or cancels the input/enters an empty line.
*/
let num;

do {
    num = prompt('Enter a number greater than 100', '');
} while (num <= 100 && num);
