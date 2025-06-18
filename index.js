console.log('Hello World');

// variables

// cannot be a reserved keyword
// should be meaningful
// cannot start with a number
// cannot contain a space or hyphen
// are case-sensitive

let firstName = 'Peter';
let lastName = 'Specht';

// constants
const interestRate = 0.3;
console.log(interestRate);

// primitives, value types
let name = 'Peter'; // String literal
let age = 45; // Number literal
let isApproved = true; // Boolean Literal
let firstNameTypes = undefined;
let selectedColor = null;

// object literal
let person = {
    name: 'Peter',
    age: 30
};

// Dot notation
person.name = 'John';

// Bracket notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);

// Array literal
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors.length);

// Functions

// parameters
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

// arguments
greet('John', 'Smith');

function square(number) {
    return number * number;
}

console.log(square(2));