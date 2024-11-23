console.log(`===========Find the even number from array======`);
let array = [10, 20, 45, 30, 77, 60];
let EvenNumCount = 0;

for (const element of array) {
    if (element % 2 === 0) {
        console.log(element); 
        EvenNumCount++; 
    }
}
console.log(`Even Number Count is: ${EvenNumCount}`);

console.log(`===========WAP to count the vowels including lower & upper case======`);
const myLove = "I Love only JavaScript";
console.log(myLove);
const vowels = "aeiou";
let counterVowels = 0;
for (const char of myLove){
    if (vowels.includes(char.toLowerCase())){
        counterVowels = counterVowels + 1;
    }
}
console.log(`The count is Vowels: ${counterVowels}`);

console.log("========WAP to count the a characters including lower and upper case ======= ");
const sentence = "JavaScript LANGUAGE";
let countAChar = 0;
for (const char of sentence) {
    if (char =='a' || char == 'A') {
        countAChar = countAChar+1;
    }
    
    if (char.toLowerCase() == 'A') {
        countAChar = countAChar+1;
    }
}
console.log(`A count of a character: ${countAChar}`);
