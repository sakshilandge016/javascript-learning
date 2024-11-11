function sayHello(){
    console.log("Hello World!");
    
}
sayHello();
console.log("----------------------------------");

function personalDetails(firstName, lastName, collegeName ){
    console.log("First Name:" + firstName);
    console.log("Last Name:" + lastName);
    console.log("College Name:" + collegeName);
    
}
personalDetails(" Sakshi", " Landge", " Raisoni College ");
console.log("----------------------------------");

function addThreeNumbers(n1, n2, n3) {
    console.log("Given no is:", n1, n2, n3);
    
    let sum = n1 + n2 + n3;
    console.log("Addition is: " + sum);

}

addThreeNumbers(10.23, 600, 40); 
console.log("----------------------------------");

addThreeNumbers("Hello",  "Good",  "Morning");