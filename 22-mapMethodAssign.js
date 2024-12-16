const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

// 1. Add 10 into each element and log new array result on console
const arrayPlusTen = arrayNumbers.map(element => element + 10);
console.log("New array after adding 10 to each element:", arrayPlusTen);

// 2. Cube each array element and log on console
const arrayCubed = arrayNumbers.map(element => element ** 3);
console.log("Array with each element cubed:", arrayCubed);

// 3. Add the index value into its corresponding each array element and log new array result on console
const arrayWithIndexAdded = arrayNumbers.map((element, index) => element + index);
console.log("New array after adding index to each element:", arrayWithIndexAdded);
