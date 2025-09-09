// Challenge 1: Student Grade Generator

// Function that takes marks input and returns grade
function studentGradeGenerator(marks) {
  // Ensure the input is a number and within the valid range
  if (isNaN(marks) || marks < 0 || marks > 100) {
    return "Invalid input. Please enter a number between 0 and 100.";
  }

  // Grading logic based on given ranges
  if (marks > 79) {
    return "Grade: A";
  } else if (marks >= 60) {
    return "Grade: B";
  } else if (marks >= 50) {
    return "Grade: C";
  } else if (marks >= 40) {
    return "Grade: D";
  } else {
    return "Grade: E";
  }
}

//Example Test Cases
console.log(studentGradeGenerator(85)); // Grade: A
console.log(studentGradeGenerator(73)); // Grade: B
console.log(studentGradeGenerator(55)); // Grade: C
console.log(studentGradeGenerator(42)); // Grade: D
console.log(studentGradeGenerator(30)); // Grade: E
