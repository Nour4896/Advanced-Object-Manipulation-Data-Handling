//Part 1 - Understanding and Creating Objects

let student = {
    name: "Nour Harrak",
    age: 28,
    isEnrolled: true,
    courses: ['JavaScript Fundamentals', 'Web Programming and Design', 'Operating Systems', 'Algorithms and Problem Solving', 'Database Programming', 'Technical Workplace Writing Skills'],
    details: function() {
        console.log("The Student's Name is: " + this.name);
        console.log("The Student's Name is: " + this.age);
        console.log("The Student is Enrolled?: " + this.isEnrolled);
        console.log("The Student's is Currently Taking the Following Courses: " + this.courses);
    }
};

console.log(student.name, student.age);
student.details();

//Part 2 - Working with JSON
