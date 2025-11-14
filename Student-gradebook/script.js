// Create a simple gradebook application that stores students as objects inside an array. Each student should have a name and an object containing their scores for different subjects. Write a function that calculates and prints each student’s average score to the console. Put comments where appropriate.

//write an array that stores the students as objects, containing their names and scores for different subjects. 
let students = [
    {name: "Ini", scores: {html: 95, css: 95, javascript: 98 }
    }, 
    {name: "Tope", scores: {html: 82, css: 78, javascript: 89}},
    {name: "Divine", scores: {html: 87, css: 89, javascript: 82}},
    {name: "Harry", scores: {html: 89, css: 82, javascript: 78}},
    {name: "Horsfall", scores: {html: 78, css: 82, javascript: 82}},
    {name: "Kelvin", scores: {html: 87, css: 89, javascript: 89}}
]; 

//write the function that calculates each student's average score 
function calculateAverage(student) {
    let studentScores = Object.values(student.scores); // Extracts the student's scores [95, 95, 98]
    let totalStudentScores = studentScores.reduce((sum, score) => sum + score, 0); // Adds up th Student's scores 
    return totalStudentScores / studentScores.length; // Divides by the number of subjects
};

//write the code to print to console 
students.forEach(student => {
    console.log(`${students.name}'s average score is ${calculateAverage(student).toFixed(2)}`);
}); 