// Scope
function exampleScope() {
    let localVar = "I'm local";
    console.log(localVar);
}
  
exampleScope();

// Let and Const
let username = "Alice";
const age = 25;
console.log(username, age);

// Arrow Functions
const greet = () => console.log("Hello, ES6!");
greet();

// Arrays
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map(n => n * 2));
console.log(numbers.filter(n => n % 2 === 0));
console.log(numbers.reduce((acc, val) => acc + val, 0));
numbers.forEach(n => console.log(`Number: ${n}`));

// Objects
const person = {
name: "John",
age: 30,
greet() {
    console.log(`Hi, I’m ${this.name}`);
}
};
person.greet();


function processNumbers() {
    const input = document.getElementById("numbersInput").value;
    const numbers = input.split(",").map(n => parseInt(n.trim()));
  
    const doubled = numbers.map(n => n * 2);
    const evens = numbers.filter(n => n % 2 === 0);
    const sum = numbers.reduce((acc, val) => acc + val, 0);
  
    const output = `
  Original: ${numbers}
  Doubled (map): ${doubled}
  Even Numbers (filter): ${evens}
  Sum (reduce): ${sum}
    `;
  
    document.getElementById("output").textContent = output;
  }
  