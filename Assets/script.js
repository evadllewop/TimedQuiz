var body = document.body;
var quiz = document.getElementById("quiz");
var introEl = document.getElementById("quizIntro");
var qEl = document.getElementById("question");
var timeEl = document.getElementById("timer");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var scoreDiv = document.getElementById("scoreContainer");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var answerStat = document.getElementById("answerStat");
var highScoresEl = document.getElementById("highScores");

var highScores = document.createElement('a');
highScores.textContent = "View Highscores";
highScoresEl.appendChild(highScores);
highScores.href = "#";
highScores.setAttribute("style", "margin-top:40px; font-size:16px; text-align:center;");



var h1El = document.createElement("h1");
h1El.textContent = "My Javascript Quiz";
introEl.appendChild(h1El);
h1El.setAttribute("style", "margin-bottom:20px; font-size:50px; text-align:center;");

var pEl = document.createElement("p");
pEl.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt nobis esse repudiandae eaque reiciendis velit eveniet odit inventore, minima ex autem rem numquam quaerat neque animi ullam assumenda magnam? Porro!";
introEl.append(pEl);
pEl.setAttribute("style", "margin-bottom:20px; text-align:center;");

var buttonEl = document.createElement("button");
buttonEl.textContent = "Start Quiz";
introEl.append(buttonEl);
buttonEl.setAttribute("align", "center");

var h2El = document.createElement("h2");
h2El.textContent = "What the fuck am I doing?";
qEl.append(h2El);
qEl.setAttribute("style", "margin-bottom:20px; text-align:center;");

var questions = [
    {
        question: "Which of the following are capabilities of functions in JavaScript?",
        choiceA: "Return a value",
        choiceB: "Accept parameters and Return a value",
        choiceC: "Accept parameters",
        correct: "C"
    }, {
        question: "Which of the following is not a valid JavaScript variable name?",
        choiceA: "2names",
        choiceB: "_first_and_last_names",
        choiceC: "FirstAndLast",
        correct: "A"
    }, {
        question: "It is possible to nest functions in JavaScript",
        choiceA: "True",
        choiceB: "False",
        choiceC: "Neither",
        correct: "A"
    }, {
        question: "What is mean by “this” keyword in javascript?",
        choiceA: "It referes previous object",
        choiceB: "It refers current object",
        choiceC: "It is variable which contains value",
        correct: "B"
    }, {
        question: "What are variables used for in JavaScript?",
        choiceA: "Storing numbers, dates, or other values",
        choiceB: "Varying randomly",
        choiceC: "Causing high-school algebra flashbacks",
        correct: "A"
    },
];

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var questionTime = 10;
var count = 0;
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
// var score = 0;


buttonEl.addEventListener("click", startQuiz);

function startQuiz() {
    introEl.style.display = "none";
    setTime();
    renderQuestion();
    quiz.style.display = "block";
}

function renderQuestion() {

    var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

function checkAnswer(answer) {
    console.log(answer);
    var score = 0;
    if (questions[runningQuestion].correct == answer) {

        score++;
        alert(score);
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        scoreRender();
    }
}

function answerIsCorrect() {

    var answerCorrect = document.createElement("p");
    answerCorrect.textContent = "Correct";
    answerStat.appendChild(answerCorrect);
    answerCorrect.setAttribute("style", "color:green; font-size:24px; margin-top:20px; text-align:center;");
    var answerTime = 1;
    var answerInterval = setInterval(function () {
        answerTime--;

        if (answerTime === 0) {
            clearInterval(answerInterval);
            answerCorrect.style.display = "none";
        }
    }, 500);
}

function answerIsWrong() {

    var answerWrong = document.createElement("p");
    answerWrong.textContent = "Wrong";
    answerStat.appendChild(answerWrong);
    answerWrong.setAttribute("style", "color:orange; font-size:24px; text-align:center;");
    var answerTime = 1;
    var answerInterval = setInterval(function () {
        answerTime--;

        if (answerTime === 0) {
            clearInterval(answerInterval);
            answerWrong.style.display = "none";
        }
    }, 500);
}

var secondsLeft = 5;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining";
        timeEl.setAttribute("style", "margin-bottom:20px; text-align:center;");

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            scoreRender();
            timeEl.style.display = "none";
        }

    }, 1000);
}

function scoreRender() {

    scoreDiv.style.display = "block";
    quiz.style.display = "none";
    scoreDiv.innerHTML = "You're done! Let's see how you did...";
}




