const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

// 1. Find out all the numbers which are greater than 50 and log on console
const numbersGreaterThan50 = arrayNumbers.filter(element => element > 50);
console.log("Numbers greater than 50:", numbersGreaterThan50);

// 2. Find out all the even numbers and log on console
const evenNumbers = arrayNumbers.filter(element => element % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 3. Find out all the odd numbers and log on console
const oddNumbers = arrayNumbers.filter(element => element % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// 4. Find out all the numbers which are multiples of 5 and log on console
const multiplesOfFive = arrayNumbers.filter(element => element % 5 === 0);
console.log("Numbers that are multiples of 5:", multiplesOfFive);

// 5. Find out all numbers which are between 20 and 50 and log on console
const numbersBetween20And50 = arrayNumbers.filter(element => element >= 20 && element <= 50);
console.log("Numbers between 20 and 50:", numbersBetween20And50);
