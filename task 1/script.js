// Using var (global scope)
var userName = "Aqsa";
if (userName === "Touseef") {  
    console.log(userName); // output: Touseef (only if condition is true)
}
console.log(userName); // output: Aqsa (since var is a global scope)

// Using let (block scope)
let fullName = 'Aqsa Touseef';
if (true) {
    let fullName = 'Hina Arshad';
    console.log(fullName); // output: Hina Arshad (inside the block scope)
}
console.log(fullName); // output: Aqsa Touseef (outside the block scope, let is block-scoped)

// Using setTimeout with var (issues with closure)
for (var count = 0; count < 5; count++) {
    setTimeout(() => {
        console.log(count); // output: 5 after 3 seconds (due to closure issue with var)
    }, 3000);
}

// Now, using let for block scope
for (let index = 0; index < 5; index++) {
    setTimeout(() => {
        console.log(index); // output: 0, 1, 2, 3, 4 after 5 seconds (because let is block-scoped)
    }, 5000);
}

// Default Parameter (type 1)
function displayMessage(firstName = 'Noor', lastName = 'Fatima') {
    return firstName + ' ' + lastName; // Added space for better formatting
}
console.log(displayMessage()); // output: Noor Fatima

// Default Parameter (type 2)
function introduceYourself(intro = 'Hi, I am', person = displayMessage()) {
    return `${intro} ${person}`; // Using template literals for better readability
}
console.log(introduceYourself()); // output: Hi, I am Noor Fatima

// Template Literals
let color = 'Pink';
let item = 'Bag';
console.log(color + ' and ' + item); // without template literal
console.log(`${color} and ${item}`); // with template literal
