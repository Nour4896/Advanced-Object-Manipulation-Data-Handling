//Part 1 - Understanding and Creating Objects

let student = {
    name: "Nour Harrak",
    age: 28,
    isEnrolled: true,
    courses: ['JavaScript Fundamentals', 'Web Programming and Design', 'Operating Systems', 'Algorithms and Problem Solving', 'Database Concepts and Design', 'Technical Workplace Writing Skills'],
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

let studentUnstring = JSON.parse(studentjsonString);

console.log("Part 2 - Convert Stringified student Object back to a JavaScript Object")
console.log(studentUnstring);
console.log("----------------------------------")

//Part 3 - Using Destructuring Assignment

let {name, courses} = student;

console.log("Part 3 - Destructure student Object (name and courses Properties)")
console.log(name);
console.log(courses);
console.log("----------------------------------");

let scores = [87, 71, 58, 67, 65];

let [firstScore, secondScore] = scores;

console.log("Part 3 - Destructure scores Array")
console.log(firstScore);
console.log(secondScore);
console.log("----------------------------------");

//Part 4 - The Spread Operator

let studentCopy = {...student};

console.log("Part 4 - Copy student Object with Spread Operator")
console.log(studentCopy)
console.log("----------------------------------");

studentCopy.graduationYear = 2026;

console.log("Part 4 - Add graduationYear Property to Copied student Object");
console.log(studentCopy.graduationYear);
console.log("----------------------------------");

let sem2Courses = ['Advanced Front-End Programming', 'An Intro to Arts and Sciences', 'Database Programming', 'Fundamental Numeric Computing', 'Object-Oriented Programming'];

let sem1and2 = [...student.courses, ...sem2Courses];

console.log("Part 4 - Merge 2 Course Arrays");
console.log(sem1and2);
console.log("----------------------------------");