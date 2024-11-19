

var evenOrOdd = function(num) {
    if (num%2==0) {
        return "EVEN";
    } else{
        return "ODD";
    }
}
var result = evenOrOdd(45);
    console.log(`Is number 45 even or Odd: ${result}`);
    
var result = evenOrOdd(70);
    console.log(`Is number 45 even or Odd: ${result}`);

var result = evenOrOdd(67);
    console.log(`Is number 45 even or Odd: ${result}`);

var result = evenOrOdd(98);
    console.log(`Is number 45 even or Odd: ${result}`);

    console.log("============================================");
    
function voteEligibility(age) {
    if (age>=18) {
        return "Eligible for vote";
        
    } else {
        return "Sorry, not Eligible for vote";
    }
}
var result = voteEligibility(18);
    console.log(`You'r eligible for vote or not age(18): ${result}`);

var result = voteEligibility(20);
    console.log(`You'r eligible for vote or not age(20): ${result}`);

var result = voteEligibility(17);
    console.log(`You'r eligible for vote or not age(17): ${result}`);

var result = voteEligibility(40);
    console.log(`You'r eligible for vote or not age(40): ${result}`);

console.log("============================================");

function checkStringLength(str){
    if (str.length >= 10) {
        return "The string contains more than 10 characters.";
    } else {
        return "The string does not contains more than 10 characters.";
    }
}
var result = checkStringLength("javaScript-ES6");
    console.log(`To check string "javaScript-ES6" contains more than 10 character or not: ${result}`);
    
console.log("============================================");

function checkStartWith(str) {
    if (str.startsWith("java")) {
        return "Given string start with Java";
    }else{
        return "Given string does not start with Java"
    }
}
var result = checkStartWith("javaScript language") ;
    console.log(`Given string starts with Java or not : ${result}`);
 
var result = checkStartWith("Programming language");
    console.log(`Given string starts with Java or not : ${result}`);