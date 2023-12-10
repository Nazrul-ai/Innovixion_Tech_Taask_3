const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`;

    optionsContainer.innerHTML = currentQuestion.options.map((option, index) => `
        <input type="radio" name="answer" value="${option}" id="option${index}">
        <label for="option${index}">${option}</label><br>
    `).join("");
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert("Please select an option");
        return;
    }

    userAnswers.push(selectedOption.value);

    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const resultContainer = document.getElementById("result-container");
    const correctAnswers = quizData.filter((q, index) => q.correctAnswer === userAnswers[index]);

    resultContainer.innerHTML = `
        <h3>Results</h3>
        <p>Correct Answers: ${correctAnswers.length} out of ${quizData.length}</p>
    `;

    // You can customize the display further, e.g., providing detailed feedback for each question.
}

// Initial load
loadQuestion();
// Quiz data and JavaScript functions (same as in the previous example)