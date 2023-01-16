#!/usr/bin/node

/*
Write the code using if..else which would correspond to the following switch

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/
console.log('Task 1');
const browser = 'Chrome';

if (browser === 'Edge') {
  console.log("You've got  the Ede");
} else if (browser === 'Chrome' ||
	   browser === 'Firefox' ||
	   browser === 'Safari' ||
	   browser === 'Opera') {
  console.log('We support these browsers');
} else {
  console.log('We hope the page is spectacular');
}

/*
Rewrite the code below using a single switch statement:
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

*/
console.log('\n');
console.log('Task 2');
const a = +prompt('a?', '');

switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log('2, 3');
    break;
}
