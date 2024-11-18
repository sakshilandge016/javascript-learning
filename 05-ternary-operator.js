var n1 = 10;
var n2 = 20;

var result = n1==n2 ? "Equal": "Not Equal";
console.log(result);

var age =20;
var result = age >= 18 ? "You are eligible for vote" : "Sorry not,try next";
console.log(result);
function voteEligibility(age) {
    var result = age >= 18 ? "You are eligible for vote" : "Sorry not,try next";
    console.log(result);
}
voteEligibility(16);
voteEligibility(25);