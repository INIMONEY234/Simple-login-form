const questions = [
  {
    prompt: "1. Which keyword is used to declare a variable in JavaScript?",
    answer: "let"
  },
  {
    prompt: "2. What data type does the value true belong to?",
    answer: "boolean"
  },
  {
    prompt: "3. What symbol is used for single-line comments?",
    answer: "//"
  },
  {
    prompt: "4. What symbol is used for strict equality comparison?",
    answer: "==="
  },
  {
    prompt: "5. Which function displays a message in the console?",
    answer: "console.log"
  },
  { prompt: "6. What will '5' + 3 output?", 
    answer: "53" 
  },
  {
    prompt: "7. Is Javascript a statistically-typed language? (true / false)",
    answer: "false"
  }
];


let score = 0; 

const totalQuestions = 7;

let replay;


do {
  score = 0;
  let correctAnswers = [];
  let incorrectAnswers = [];

  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i].prompt);

    if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
      console.log("Correct!");
      score++;
      correctAnswers.push(questions[i].prompt);
    } else {
      console.log(`Incorrect! The correct answer is: ${questions[i].answer}`);
      incorrectAnswers.push(questions[i].prompt);
    }
  };
  
if (correctAnswers.length > 0) {
    console.log("You answered these questions CORRECTLY:");
    correctAnswers.forEach((p) => console.log(" - " + p));
};

if (incorrectAnswers.length > 0) {
    console.log("You answered these questions INCORRECTLY:");
    incorrectAnswers.forEach((p) => console.log(" - " + p));
};

console.log(`Quiz Completed. Your score is: ${score} / ${questions.length}.`); 

if (score === totalQuestions) {
  console.log("Excellent.");
} else if (score >= 3) {
  console.log("Good, keep it up.");
} else {
  console.log("Keep practicing and put in more effort.");
}; 

replay = prompt("Would you like to retake the quiz? (yes/no)").toLowerCase();

if (replay === "yes") {
    location.reload(); 
  } else if (replay === "no") {
    console.log(`Thank you for playing.`);
  } else {
    console.log("Please enter 'yes' or 'no'.");
  };
  
} while (replay !== "yes" && replay !== "no");




