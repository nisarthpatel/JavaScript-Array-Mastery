const copySorted = require('./copySorted');
const Calculator = require('./calculator');
const camelize = require('./camelize');
const getAverageAge = require('./averageAge');
const filterRangeInPlace = require('./filterRangeInPlace');
const sortByAge = require('./sortByAge');
const groupById = require('./groupById');
const unique = require('./unique');
const filterRange = require('./filterRange');

// Test copySorted
let arr = ["HTML", "JavaScript", "CSS"];
console.log(copySorted(arr)); // CSS, HTML, JavaScript

// Test calculator
let calc = new Calculator();
console.log(calc.calculate("3 + 7")); // 10

// Test camelize
console.log(camelize("background-color")); // backgroundColor

// Test getAverageAge
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let users = [john, pete, mary];
console.log(getAverageAge(users)); // 28

// Test filterRangeInPlace
let nums = [5, 3, 8, 1];
filterRangeInPlace(nums, 1, 4);
console.log(nums); // [3, 1]

// Test sortByAge
let people = [pete, john, mary];
sortByAge(people);
console.log(people); // Sorted by age

// Test groupById
let usersArr = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];
console.log(groupById(usersArr));

// Test unique
let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(strings)); 

// Test filterRange
console.log(filterRange([5, 3, 8, 1], 1, 4)); // [3, 1]
