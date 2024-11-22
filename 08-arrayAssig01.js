console.log("======Log the 1st & last element on Console===");
const fruit_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
console.log("First element:", fruit_seasonal[0]);
console.log("Last element:", fruit_seasonal[fruit_seasonal.length - 1]);

console.log("======Papaya before element Banana===");
const fruit_seasonalOne = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
fruit_seasonalOne.unshift("Papaya");
console.log(fruit_seasonalOne);

console.log("======Remove Mango from the Array ===");
const fruit_seasonalTwo = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
fruit_seasonalTwo.splice(3,1);
console.log(fruit_seasonalTwo);

console.log("======Insert an Element Pineapple ===");
const fruit_seasonalThree = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
fruit_seasonalThree.push ("Pineapple");
console.log(fruit_seasonalThree);

console.log("======Insert an Element Dragon fruit ===");
const fruit_seasonalFour = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
fruit_seasonalFour.splice(4,0, "dragon fruit");
console.log(fruit_seasonalFour);

console.log("======Insert an replace element Orange with Kiwi ===");
const fruit_seasonalFive = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
fruit_seasonalFive.splice(1,1,"Kiwi")
console.log(fruit_seasonalFive);

console.log("======Starting from index 1 to 4 ===");
const fruit_seasonalSix = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
const sliceElement = fruit_seasonalSix.slice(1,4)
console.log(sliceElement);

console.log("======Only select last 3 elements ===");
const fruit_seasonalSeven = ["Banana", "Orange", "Apple", "Mango", "Water melon"];
const lastThreeElements = fruit_seasonalSeven.slice(fruit_seasonalSeven.length-3)
console.log(lastThreeElements);

