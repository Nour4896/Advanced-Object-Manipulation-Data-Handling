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
console.log("Part 1 - Name and Age Properties")
console.log(student.name, student.age);
console.log("----------------------------------")
console.log("Part 1 - details() Object Method")
student.details();
console.log("----------------------------------")

//Part 2 - Working with JSON

let studentjsonString = JSON.stringify(student);

console.log("Part 2 - Stringify student Object")
console.log(studentjsonString);
console.log("----------------------------------")