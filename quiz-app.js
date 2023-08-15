//quiz questions and options
const questions = [
    {
        question: "HTML stands for -",
        options: ["High Machine Language", "HyperText and Markup Language", "HyperText Markup Language", "None of these"],
        correct: 2
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        options: ["Head, Title, HTML, body", "HTML, Head, Title, Body", "HTML, Body, Title, Head", "HTML, Head, Title, Body"],
        correct: 1
    },
    {
        question: "HTML tags are enclosed in-",
        options: ["# and #", "< and >", "! and ?", "{ and }"],
        correct: 1
    },
    {
        question: "Which of the below is the abbreviation of CSS ?",
        options: ["Color and style sheets", "Cascading style sheets", "Cascade sheets style", "Coded Style Sheet"],
        correct: 2
    },
    {
        question: "How can we change the background color of an element?",
        options: ["color", "background-color", "Both color and background-color ", "None of these"],
        correct: 1
    },
    {
        question: "Which HTML tag is used to declare internal CSS?",
        options: ["<link>", "<style>", "<script>", "None of these"],
        correct: 1
    },
    {
        question: "Javascript is an _______ language?",
        options: ["Object-Base", "Procedural", "Object-Oriented", "None of these"],
        correct: 2
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        options: ["Var", "let", "Both Var and let", "None of these"],
        correct: 1
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        options: ["Var", "Const", "let", "Constant"],
        correct: 1
    },
    {
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        options: ["boolean", "Object", "undefined", "Integer"],
        correct: 1
    }

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const option = document.createElement("button");
        option.textContent = currentQuestion.options[i];
        option.addEventListener("click", checkAnswer.bind(null, i));
        optionsElement.appendChild(option);
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    nextButton.disabled = true;
    scoreElement.textContent = `Your score: ${score} / ${questions.length}`;

    // Display GIFs based on the score threshold
    const gifContainer = document.createElement("div");
    gifContainer.classList.add("gif-container");

    if (score >= 7) {
        // Display winning gif
        const winningGif = document.createElement("img");
        winningGif.src = "winner.gif"; // the winning gif
        winningGif.alt = "Winning GIF";
        gifContainer.appendChild(winningGif);
    } else {
        // Display losing gif
        const losingGif = document.createElement("img");
        losingGif.src = "BETTERLUCK.jpg"; //the losing gif
        losingGif.alt = "Losing GIF";
        gifContainer.appendChild(losingGif);
    }

    optionsElement.appendChild(gifContainer);
}
nextButton.addEventListener("click", loadQuestion);

// Initialization the quiz
loadQuestion();
