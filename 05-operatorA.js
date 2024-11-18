

function squareOfWordLength(givenString){
    var givenStringLength = givenString.length;
    var result = givenStringLength * givenStringLength;
    return result;

}
var returnValue = squareOfWordLength("JavaScript");
console.log(`Given string is : JavaScript and it's length square is: ${returnValue}`);

var returnValue = squareOfWordLength("Google Chrome");
console.log(`Given string is : Google Chrome and it's length square is: ${returnValue}`);

var returnValue = squareOfWordLength("Web Developer Smart");
console.log(`Given string is : Web Developer Smart and it's length square is: ${returnValue}`);

console.log("========Division & Multiple=======");

function stringOperation(givenString){
    var strLength = givenString.length;
    var words = givenString.split("")
    var totalWords = words.length;
    var strDivision = strLength/totalWords;
    console.log(`Total Length of the string Divided by total number of words is: ${strDivision}`);

    var strLength = givenString.length;
    var words = givenString.split("")
    var totalWords = words.length;
    var strMultiply = strLength * totalWords;
    console.log(`Total Length of the string Divided by total number of words is: ${strMultiply}`);
    
    
}
stringOperation("I am Angular Developer");