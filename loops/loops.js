#!/usr/bin/node

/*
the while loop has a syntac as follows
while (condition) {
    //code
    //loop body
}
*/

let i = 0;

while (i < 3) {
    console.log(i);
    i++;
}

/*
the do while loop executes a condition at least once
*/

let j = 0;
do {
    console.log(j);
    j++;
} while (i < 3);


/*
entre the 'for loop'
syntax:
for (begin; condition; step) {
    // loop body
}
*/

// inline variable declaration
// the variable i is only used in the for loop

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// maybe just use an already defined variable

let m = 0;

for (m = 0; m < 3; m++) {
    console.log(m);
}

console.log(m); // m will show

// some parts of the for loop can be ommited.
// we can omit the begin part like so:


m = 0;
for(; i < 3; i++) {  // the begin part is omitted
    console.log(m);
}

// skipping the step part

i = 0;
for (;i < 3;) { // bigin and step part are omitted
    console.log(i++);
}

// entirely omitting all

for (;;) {
    // this loop runs forever
}

/*
we can occasionaly modify a loop using either
break directive and continue.

break is needed when a while loop can only be checked in the middle
*/
//example


let sum = 0;

while (true) {
    let value = +prompt('Enter a number: ', '');

    if (!value) {
	break;
    }

    sum += value;
}

console.log('Sum: ' + sum);

/*
continue directive.
conitue doesn't stop the whole loop.
It sops the current iteration and forces the
loop to start afresh.
*/

// the loop below uses continue to ouput odd values

for (let i = 0; i < 10; i++) {

    //if true, skip the next condition
    if (i % 2 === 0) {
	continue;
	console.log(i);
    }
}

/*
iT becomes interesting because why?
we can label for loops.
*/

//example where we might need to end a loop while being nested

for ( let i = 0; i < 3; i++) {
    for (let j =0; j < 3; j++) {
	let input = prompt(`Value at coords (${i}, ${j})`, '');
	// what if we want to end from here ?
    }
}
console.log('Una completo');

// the ordinary break just breaks the inner loop.

// enter 'label'

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

	let input = prompt(` Value of coords (${i}, ${j}`, '');

	if (!input) {
	    break outer; // this will break the outer loop, ending the iterations
	}
    }
}

console.log('Doe done')

