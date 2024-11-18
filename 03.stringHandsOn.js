function stringHandsOn(){
    var str = "   Hey, you are doing good, keep it up    ";
    console.log(`1. Given string is: ${str}`);
    console.log(`2. Length of the string is: ${str.length} `);
    var result = str.trim();
    console.log(`3. After trim string is:  ${result} & its length ${result.length}`);
    console.log(`4. First char: ${result.charAt(0)} and Last char is ${result.charAt(result.length-1)}`);
    var resultValue = result.split("");
    console.log(`5. Total Words: ${resultValue.length}`);
    var indexOf = result.indexOf("good");
    console.log(`6. Index of word good ${indexOf}`);
    var substring = result.substring("23");
    console.log(`7. The substring starting form index 23: ${substring}`);
    var result = str.includes("up");
    console.log(`8. String ends with word up: ${result}`);
    var result = str.includes("Hey");
    console.log(`9. String ends with word Hey: ${result}`);
}
stringHandsOn();