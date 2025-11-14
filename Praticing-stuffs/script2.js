//Define quiz questions, answers, and user score 
const questions = [
    {
        question: "What is the data type of 'hello'?",
        answer: "string"
    },
    {
        question: "What is the result of 5 + '5'?",
        answer: "55"
    },
    {
        question: "What is the keyword for declaring a constant variable?",
        answer: "const"
    }, 
    {
        question: "Is Javascript a statistically-typed language? (true / false)",
        answer: "false"
    }, 
    {
        question: "What method converts a string to lowercase?",
        answer: "tolowercase"
    }   
]; 

let score = 0; 
let incorrectQuestions = []; 

//Loop through questions and prompt user for answers 
for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i].question); 
    if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
        console.log("Correct!");
        score++;
    } else {
        console.loh("Incorrect. The correct answer is ${questions [i].answer}."); 
        incorrectQuestions.push(questions[i].question); 
    } 
} 

//Output results 
console.log("Quiz complete! Your final score is ${score} out of ${questions.length}."); 
if (incorrectQuestions.length > 0) {
    console.log("You got the following questions incorrect: "); 
    for (let i = 0; i < incorrectQuestions.length; i++) {
        console.log(incorrectQuestions[i]); 
    }
}

//Ask user if they want to retake the quiz 
let retake; 
do {
    retake = prompt("Would you like to retake the quiz? (yes/no)"); 
    if (retake.toLowerCase() === "yes") {
        //Reset score and incorrect questions, and loop through questions again 
        score = 0; 
        incorrectQuestions = []; 
        for (let i = 0; i < questions.length; i++) {
            let userAnswer = prompt(questions[i].question); 
            if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
                console.log("Correct!");
                score++; 
            } else {
                console.log("Incorrect. The correct answer is ${questions[i].answer}.");
                incorrectQuestions.push(questions[i].question); 
            }
        }
        console.log("Quiz complete! Your final score is ${score} out of ${questions.legth}.");
        if (incorrectQuestions.length > 0) {
            console.log("You got the following questions incorrect: "); 
            for (let i = 0; i < incorrectQuestions.length; i++) {
                console.log(incorrectQuestions[i]); 
            }
        }
    }    
} while (retake.toLowerCase() === "yes"); 

