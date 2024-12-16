console.log( `----------------Arrow function with no args and no return value------`);

const logMessage = () => {
    console.log("Good Morning, Today is Tuesday");
  };
  logMessage(); // Invoking the function
  
console.log(`--------Arrow function with 3 args and no return value-------`);

  const multiply = (a, b, c = 1) => {
    const result = a * b * c;
    console.log(`The multiplication of ${a}, ${b}, and ${c} is: ${result}`);
  };
  multiply(5, 5, 2); // Invoking with values 5, 5, 2
  multiply(10, 4);   // Invoking with values 10, 4 (default value for c = 1)
  
console.log(`-------Arrow function with 5 args and return value---------`);

  const add = (a, b, c, d, e) => {
    return a + b + c + d + e;
  };
  
  // Step 3.a
  let result1 = add(100, 100, 200, 349, 756);
  console.log(`The addition of numbers 100, 100, 200, 349, and 756 is: ${result1}`);
  
  // Step 3.c
  let result2 = add("I am ", "learning ", "ES6 ", "features ", "in depth");
  console.log(`The concatenated string is: "${result2}"`);