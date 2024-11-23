
console.log(`===== 1. professor John Smith Details =====`);

let professor = {
    name: "John Smith",
    age: 50,
    university: "ABC University",
    department: "Computer Science",  
    yearsOfExperience: 20,  
    isMarried: true, 
    coursesTaught: ["Data Structures", "Algorithms", "Machine Learning"],  
}
for (const key in professor){
    if (Object.prototype.hasOwnProperty.call(professor, key)){
        const element = professor[key];
        console.log(`${key},=> ${element}`);
    }
}

console.log(`===== 2. nested object =====`);
let professorJohn = {
    engineering: "Computer Science Engineering", 
    phd: "Advanced Computing",  
    masters: "Software Engineering", 
    certifications: ("AWS Certified Solutions Architect"),
};
console.log(professorJohn);

console.log(`===== 3. array 'certificates' =====`);
let professorCertificates = {
    certificates: ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Advanced Programming"],
};
for (const key in professorCertificates) {
    if (Object.prototype.hasOwnProperty.call(professorCertificates, key)) {
        const element = professorCertificates[key];
        console.log(`${key} => ${element}`);
    }
}

console.log(`=========== Add New Property=====`);
let professorExperience = {
    totalExperience: "14 years"
}
console.log(professorExperience);


professor.age = 40; // Modify Age
console.log(professor);


console.log(`============Add one new certificate "Oracle Certified"============`);
let certificatesAdd = ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Advanced Programming"];
   console.log(certificatesAdd);
   console.log(`After Insertion`);
   certificatesAdd.splice(2, 0, "Oracle Certified");
   console.log(certificatesAdd);
   
console.log(`============Log the last element of the array certificates.============`);  
let certificatesLast = ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Advanced Programming"];
console.log("Last element:", certificatesLast[certificatesLast.length - 1]);

console.log(`=========Traverse the array using for of loop=====`);
let certificatesArray = ["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Advanced Programming"];
for (const element of certificatesArray){
    console.log(element);
    
}

  
   