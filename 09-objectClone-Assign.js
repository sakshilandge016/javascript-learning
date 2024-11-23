console.log(`==========Create the object 'bankSbi' using literals with at least 4 properties=========`);
const bankSbi = {
    bankName: "State Bank of India",
    branch: "Nagpur Main Branch",
    ifscCode: "SBIN0001234",
    contactNumber: "1800-123-456",
  };
  
  console.log(bankSbi);

console.log(`=======Create the object 'bankLocation' using literals with properties: street, city, pin======`);
const bankLocation = {
    street: "Mahatma Gandhi Road",
    city: "Nagpur",
    pin: "440001"
  };
  
  console.log(bankLocation);

console.log(`========Object assign========`);
const clonedBankSbi = Object.assign({}, bankSbi);
const clonedBankLocation = Object.assign({}, bankLocation);
console.log("Cloned bankSbi:", clonedBankSbi);
console.log("Cloned bankLocation:", clonedBankLocation);

console.log(`========Rate Of Interest=========`);
const rateOfInterest = {
    homeLoanInterest: 8.4,      
    personalLoanInterest: 10.5, 
    dueInterest: 12.0           
  };
  
  console.log("Rate of Interest Details:");
  console.log(`  Home Loan Interest: ${rateOfInterest.homeLoanInterest}%`);
  console.log(`  Personal Loan Interest: ${rateOfInterest.personalLoanInterest}%`);
  console.log(`  Due Interest: ${rateOfInterest.dueInterest}%`);

console.log(`========Merge the step 1, step 2 and step 4 =====`);
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest)
console.log(`SBI Details:
    Bank Name: ${sbiDetails.bankName}
    Branch: ${sbiDetails.branch}
    IFSC Code: ${sbiDetails.ifscCode}
    Contact Number: ${sbiDetails.contactNumber}
    Street: ${sbiDetails.street}
    City: ${sbiDetails.city}
    PIN Code: ${sbiDetails.pin}
    Home Loan Interest: ${sbiDetails.homeLoanInterest}%
    Personal Loan Interest: ${sbiDetails.personalLoanInterest}%
    Due Interest: ${sbiDetails.dueInterest}%`);
  