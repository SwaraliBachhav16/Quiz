const questions=[
    {
        question:"Who was the first Prime Minister of India?",
        choices:["Indira Gandhi", "Narendra Modi", "Jawaharlal Nehru","Rajiv Gandhi"],
        correct:2
     },

     {
        question: "What is the capital city of India?",
        choices: ["New Delhi", "Mumbai", "Kolkata","Chennai"],
        correct: 0
     },
     {
        question: "Which state is also known as 'Fruit Bowl' of India?",
        choices: ["Jammu and Kashmir", "Himachal Pradesh", "Assam","Meghalaya"],
        correct: 1
     },
     {
        question: "Who is Sachin Tendulkar?",
        choices: ["Indian Hockey Player", "Indian cricketer", "Indian Kabaddi Player","Indian Marathon Runner"],
        correct: 1
     },
     {
        question: "Which is the national sport of India",
        choices: ["Cricket", "Hockey", "Kabaddi","Footbal"],
        correct: 1
     },
];

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
  const questionText = document.getElementById("question-text");
  questionText.textContent = questions[currentQuestion].question;

  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice, index) => {
    choice.textContent = questions[currentQuestion].choices[index];
  });

  const feedback = document.getElementById("feedback");
  feedback.textContent = "";
}

function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  if (selected === questions[currentQuestion].correct) {
    feedback.textContent = "Correct!";
    correctAnswers++;
  } else {
    feedback.textContent = "Incorrect!";
  }

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      const quizContainer = document.querySelector(".quiz-container");
      quizContainer.innerHTML = `<p style="font-size: 20px;"><b>You got ${correctAnswers} out of ${questions.length} questions.</b></p>`;
    }
  }, 1000);
}

showQuestion();