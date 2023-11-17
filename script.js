const quizContainer = document.getElementById("quiz-questions-container");
const quizQuestion = document.getElementById("quiz-question-el");
const urlParams = new URLSearchParams(window.location.search);
const selectedTopic = urlParams.get("topic");
//Declare the question index
let currentQuestionIndex = 0;
// Declare a counter for the number of right answers, starting with 0
let correctAnswerCounter = 0;

// Directing the user to the second page based on the topic selected
function goToTopicPage(topic) {
  window.location.href = `/questions.html?topic=${topic}`;
}

// When a button is clicked, it should load the questions depending on the topic selected
function loadQuestionsByTopic() {
  let questions = quizData[selectedTopic];
  if (questions) {
    displayQuestions(questions, currentQuestionIndex);
  }
}

// Display the question based on the index of the quizData array
function displayQuestions(questions, index) {
  const currentQuestion = questions[index].question;
  quizQuestion.innerHTML = currentQuestion;

  // Call the function to display answers
  displayAnswers(questions, index);
}

// Display answers based on the questions
function displayAnswers(questions, index) {
  let answers = questions[index].answers;
  let correctAnswer = questions[index].correctAnswer;

  // Clear the existing answers
  document.getElementById("quiz-answers").innerHTML = "";

  // Loop through each answer
  // Create a button for each answer
  Object.keys(answers).forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.classList.add("btn", "btn-answer", "rounded-pill", "border-2");
    answerButton.setAttribute("type", "button");
    answerButton.textContent = answers[answer];

    // Add a click event listener to the answer buttons
    answerButton.addEventListener("click", () => {
      // Disable all buttons after the user selects an answer
      document.querySelectorAll(".btn-answer").forEach((btn) => {
        btn.disabled = true;
        if (btn.textContent !== correctAnswer) {
          btn.style.display = "none";
        } else {
          btn.style.backgroundColor = "#00521B";
          btn.style.color = "white";
          btn.style.fontSize = "22px";
        }
      });

      // Check if the selected answer is correct
      if (answerButton.textContent === correctAnswer) {
        // Notify the user that their answer is correct

        alert("Spot on! Your answer is correct");
        correctAnswerCounter++;
      } else {
        // Notify the user that their answer is incorrect

        alert("Oops, not quite. Your answer is Incorrect.");
      }
    });

    document.getElementById("quiz-answers").appendChild(answerButton);
  });
}

loadQuestionsByTopic();

// Add an event listener to the "Next" button
const nextButton = document.querySelector(".next-btn");
nextButton.addEventListener("click", () => {
  let questions = quizData[selectedTopic];
  currentQuestionIndex++; // Move to the next question

  // Check if there are more questions to display
  if (currentQuestionIndex < questions.length) {
    displayQuestions(questions, currentQuestionIndex);
  } else {
    // Store the results locally so they can be accessed after redirecting the page
    localStorage.setItem("correctAnswerCounter", correctAnswerCounter);
    // Redirect to the results page
    window.location.href = "/results.html";
  }
});
