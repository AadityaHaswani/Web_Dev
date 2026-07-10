// JavaScript Foundation
// foundation.js

console.log("=== JavaScript Foundation ===");

// Variables
let username="Aditya";
const year=2026;
var city="Mumbai";

// Data Types
const isStudent=true;
const marks=[90,95,100];
const user={username,city};

// Functions
function greet(name){
  return `Hello, ${name}!`;
}

const square=n=>n*n;

// Conditionals
if(year>=2026){
  console.log("Welcome to modern JavaScript");
}

// Loops
for(let i=1;i<=5;i++) console.log(i);

// Arrays
const nums=[1,2,3,4,5];
console.log(nums.map(n=>n*2));
console.log(nums.filter(n=>n%2===0));
console.log(nums.reduce((a,b)=>a+b,0));

// Objects
console.log(Object.keys(user));

// Destructuring
const {city:userCity}=user;

// Spread / Rest
const more=[...nums,6,7];
function sum(...args){
 return args.reduce((a,b)=>a+b,0);
}

// Template Literals
console.log(`${username} lives in ${userCity}`);

// Optional Chaining
console.log(user.address?.street ?? "No Address");

// Practice
console.log(greet(username));
console.log(square(10));
console.log(sum(...nums));
