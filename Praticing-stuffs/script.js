prompt("who is the president of nigeria")

// Create a simple gradebook application that stores students as objects inside an array. Each student should have a name and an object containing their scores for different subjects. Write a function that calculates and prints each student’s average score to the console. Put comments where appropriate.

let students = [
    {name: "Ini", scores: {maths: 98, english: 97, art: 96, science: 97, ict: 95}}, 
    {name: "Glory", scores: {maths: 97, english: 96, art: 95, science: 94, ict: 93}},
    {name: "Geoffrey", scores: {maths: 97, english: 96, art: 95, science: 94, ict: 93}},
    {name: "Tope", scores: {maths: 97, english: 96, art: 95, science: 94, ict: 93}},
    {name: "Bellgam", scores: {maths: 97, english: 96, art: 95, science: 94, ict: 93}},
];

function calculateAverageScore (student) {
    let studentsmarks = Object.values(students.scores); 
}