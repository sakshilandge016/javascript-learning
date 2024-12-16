const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`1. Log the array element with its index using forEach() with arrow function`);
console.log("Array elements with their indexes:");
arrayNumbers.forEach((element, index) => console.log(`Index: ${index}, Element: ${element}`));

console.log(`2. Find the positive numbers and log on console using forEach() with arrow function`);
console.log("\nPositive numbers:");
arrayNumbers.forEach(element => {
  if (element > 0) console.log(element);
});

console.log(`3. Find the negative numbers, add into new array, and log the new array on console using arrow function`);

const negativeNumbers = [];
arrayNumbers.forEach(element => {
  if (element < 0) negativeNumbers.push(element);
});
console.log("\nNegative numbers:", negativeNumbers);

console.log(`4. Find the even numbers and log on console using forEach() with arrow function`);

console.log("\nEven numbers:");
arrayNumbers.forEach(element => {
  if (element % 2 === 0) console.log(element);
});

console.log(`5. Find the sum of all elements from arrayNumbers and log sum value on console`);

const sum = arrayNumbers.reduce((acc, element) => acc + element, 0);
console.log("\nSum of all elements:", sum);

console.log(`6. Log only even indexed array values on console using forEach() with arrow function`);

console.log("\nEven indexed values:");
arrayNumbers.forEach((element, index) => {
  if (index % 2 === 0) console.log(`Index: ${index}, Element: ${element}`);
});
