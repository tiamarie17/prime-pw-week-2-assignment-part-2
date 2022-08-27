// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set the value to Dane.
// We create a conditional that says if the name variable's value is exactly equal to Mary, the console log will print 'Hi, Mary!'.
// If the name variable's value is not equal to Mary, the console log will print 'How do you do?'.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called secret without assigning it a value.
// We create a varibale called code and assign it a value of 123.
// We create a conditional that says if the variable code is exactly equal to 123, the variable secret will have a value of 'super' and the variable code will have its current value (123) multiplied by two.
// We create a conditional that says if the variable code is greater than 250, the variable secret will have a value of 'duper'.
// We console log the variable secret.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a variable called isStudent and assign it a boolean value of true.
// We create a variable called age and assign it a number value of 34.
// We create a variable called zip and assign it a number value of 55407.
//We create a conditional that says that if both the variable isStudent is equal to true AND the variable zip is greater than 80000, then the console will print 'You're a student on the West Coast'.
// We nest an else if statement (adding a second conditional) that says that if either the variable isStudent is equal to false OR the variable age is less than 30, the console log will print 'What are your hobbies?'.
// We nest another else if statement (adding a third conditional) that says that if the variable isStudent is equal to true, the console log will print 'Welcome to Prime!'.
// We add an else statement that will run if none of the three conditionals above are true. If none of the above conditionals are true, the console log will print 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/


//

//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//FIX- the variable colorOne should be set to 'blue' but is currently set to 'red', and colorTwo should be set to 'red', but is currently set to 'blue'.
// Should be 
// let colorOne= 'blue';
// let colorTwo= 'red';
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX- Both colorOne and colorTwo should be set to 'purple' if mix is true.
// Should be 
// if (mix === true) {
  colorOne = 'purple';
  colorTwo= 'purple';
}

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//FIX- While temp is a variable, the instructions say that time is a constant.
// We check if the temp is greater than 39 OR the time is greater than or equal to 4 (either can be true, both do not need to be true for the code to run).

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.


//FIX- The instructions say that age is a variable and minAge is a constant
// The instructions say that if the age is greater than or equal to the minAge, then we console log 'enter'.
// Should be 
// if (age >= minAge) {
//    console.log('enter');
//  } else {
//    console.log('no entry');
//  } 


/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

