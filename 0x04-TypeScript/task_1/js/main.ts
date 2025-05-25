interface Teacher {
  readonly firstName: string; // Only modifiable at creation
  readonly lastName: string; // Only modifiable at creation
  fullTimeEmployee: boolean; // Always required
  location: string; // Always required
  yearsOfExperience?: number; // Optional
  [key: string]: any; // Allows additional properties
}

const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "New York",
  contract: false, // Extra property allowed!
};

console.log(teacher1.firstName); // Alice

//  Error: Cannot assign to 'firstName' because it is a read-only property
// teacher1.firstName = "Bob";

// Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

interface Directors extends Teacher {
  numberOfReports: number; // Required for Directors
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Printing teachers

const printTeacher = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
};
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Writing a class
interface StudentDescription {
  firstName: string;
  lastName: string;
  workOnHomework(): string; // Method to indicate homework status
  displayName(): string; // Method to display the student's first name
}

/// Implementing the StudentDescription interface in a class
class StudentClass implements StudentDescription {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
