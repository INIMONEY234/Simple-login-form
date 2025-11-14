//write an array that stores the interns as objects, containing their names and scores for 5 different tasks. 

const interns = [
    {name: "Iniobong", scores: {Task1: 95, Task2: 95, Task3: 98, Task4: 97, Task5: 96}},
    {name: "Tope", scores: {Task1: 82, Task2: 78, Task3: 89, Task4: 82, Task5: 86}},
    {name: "Divine", scores: {Task1: 89, Task2: 82, Task3: 82, Task4: 79, Task5: 68}},
    {name: "Wealth", scores: {Task1: 89, Task2: 82, Task3: 83, Task4: 76, Task5: 63}},
    {name: "Harry", scores: {Task1: 78, Task2: 89, Task3: 88, Task4: 82, Task5: 76}},
   
]; 

//write the function that calculates each intern's average score 
function calculateAverageScores(intern) {
    let internScores = Object.values(intern.scores); //Extracts the intern's scores [95, 95, 98, 97, 96] 
    let totalInternScores = internScores.reduce((sum, score) => sum + score, 0); //Adds up the intern's scores 
    return totalInternScores / internScores.length; //Divides by the number of tasks
};

//write the code to print to console
interns.forEach(intern => { 
    console.log (`
    ${intern.name}'s average score from last 5 tasks is ${calculateAverageScores(intern).toFixed(2)}`); 
}); 


