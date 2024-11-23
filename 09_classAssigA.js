console.log(`======= Vehicle Details =======`);

class Vehicle {
    constructor(make, model, year, color, engineType) {
      
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.engineType = engineType;
    }
  
    Details() {
    
      console.log(`Vehicle Details: Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Engine Type: ${this.engineType}`);
    }
  }
const vehicleOne = new Vehicle("Toyota", "Corolla", 2022, "White", "Petrol");
vehicleOne.Details();

const vehicleTwo= new Vehicle("Honda", "Civic", 2021, "Black", "Diesel");
vehicleTwo.Details();

const vehicleThree= new Vehicle("Tesla", "Model 3", 2023, "Red", "Electric");
vehicleThree.Details();

const vehicleFour= new Vehicle("Ford", "F-150", 2020, "Blue", "Hybrid");
vehicleFour.Details();

const vehicleFive= new Vehicle("Hyundai", "Elantra", 2019, "Gray", "Petrol");
vehicleFive.Details();

console.log(`======== College Details ==========`);
class College {
    constructor(name, location, establishedYear, coursesOffered) {
      this.name = name;             
      this.location = location;     
      this.establishedYear = establishedYear;
      this.coursesOffered = coursesOffered;   
    }
    display() {
      console.log(`College Details:
        Name: ${this.name}
        Location: ${this.location}
        Established Year: ${this.establishedYear}
        Courses Offered: ${this.coursesOffered.join(', ')}`);
    }
  }
  
  // Creating 4 objects of the College class
  let college1 = new College("ABC University", "New York", 1995, ["Computer Science", "Mathematics", "Physics"]);
  let college2 = new College("XYZ College", "Los Angeles", 2001, ["Biology", "Chemistry", "English"]);
  let college3 = new College("Tech Institute", "San Francisco", 1980, ["Engineering", "Architecture", "Design"]);
  let college4 = new College("Global University", "Chicago", 2010, ["Business Administration", "Law", "Economics"]);
  
  // Invoking the display method for each college object
  college1.display();
  college2.display();
  college3.display();
  college4.display();
  