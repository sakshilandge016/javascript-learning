console.log(`========Employee Info==================`);

const employeeInfo = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
      "street": "32, Laham St.",
      "city": "Innsbruck",
      "country": "Austria"
    },
    "referred-by": "E0012"
  }`;
console.log(employeeInfo);
  
const employee = JSON.parse(employeeInfo);
  
console.log(`========Employee role==================`);
console.log(employee.role[0]);
  
console.log(`========Last Name ==================`);
const lastName = employee.name.split(" ")[1];
console.log(lastName);
  
console.log(`======== Date Of year ==================`);
const joiningYear = employee.doj.split("-")[2];
console.log(joiningYear);
  
