var body = document.body;
var quiz = document.getElementById("quiz");
var introEl = document.getElementById("quizIntro");
var qEl = document.getElementById("question");
var timeEl = document.getElementById("timer");
var scoreDiv = document.getElementById("scoreContainer");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var answerStat = document.getElementById("answerStat");
var highScoresEl = document.getElementById("highScores");

// var highScores = document.createElement('a');
// highScores.textContent = "View Highscores";
// highScoresEl.appendChild(highScores);
// highScores.addEventListener("click", renderScores);
// highScores.setAttribute("align", "center");

// quiz title
var h1El = document.createElement("h1");
h1El.textContent = "My Javascript Quiz";
introEl.appendChild(h1El);
h1El.setAttribute("style", "margin-bottom:20px; font-size:50px; text-align:center;");

// quiz description
var pEl = document.createElement("p");
pEl.textContent = "This is a timed Javascript quiz with multiple choice answers. Try to answer them before the time runs out! You will be shown how you many you got wrong or correct at the end of the quiz. Then enter your initials to save you score!";
introEl.append(pEl);
pEl.setAttribute("style", "margin-bottom:20px; text-align:center;");

// start quiz button
var buttonEl = document.createElement("button");
buttonEl.textContent = "Start Quiz";
introEl.append(buttonEl);
buttonEl.setAttribute("align", "center");

var h2El = document.createElement("h2");
h2El.textContent = "What the fuck am I doing?";
qEl.append(h2El);
qEl.setAttribute("style", "margin-bottom:20px; text-align:center;");

// array of questions
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
var score = 0;
var timer;


buttonEl.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {

    introEl.style.display = "none";
    setTime();
    renderQuestion();
    quiz.style.display = "block";
}

// timer start
var secondsLeft = 30;
function setTime() {

    timer = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining";
        timeEl.setAttribute("style", "margin-bottom:20px; text-align:center;");

        if (secondsLeft === 0) {
            clearInterval(timer);
            scoreRender();
        }

    }, 1000);
}

// questions start
function renderQuestion() {

    var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
//  check to see if answers are correct or wrong
function checkAnswer(answer) {

    if (questions[runningQuestion].correct == answer) {
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }

    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(timer);
        scoreRender();
        timeEl.style.display = "none";
    }
}

// if answer is correct, display 'correct' and increase score
function answerIsCorrect() {

    var answerCorrect = document.createElement("p");
    answerCorrect.textContent = "Correct";
    answerStat.appendChild(answerCorrect);
    answerCorrect.setAttribute("style", "color:green; font-size:24px; text-align:center;");
    var answerTime = 1;
    var answerInterval = setInterval(function () {
        answerTime--;

        if (answerTime === 0) {
            clearInterval(answerInterval);
            answerCorrect.style.display = "none";
        }
    }, 1000);
}

// if answer is wrong, display 'wrong'
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
    }, 1000);
}

// let user know the quiz is over and display user score
function scoreRender() {

    timeEl.style.display = "none";
    scoreDiv.style.display = "block";
    quiz.style.display = "none";
    scoreDiv.setAttribute("align", "center");

    //alert user that the quiz is over
    var doneEl = document.createElement("p");
    doneEl.textContent = "You're done! Let's see how you did...";
    scoreDiv.append(doneEl);
    doneEl.setAttribute("style", "margin-bottom:20px; text-align:center;");

    // alert user of their score
    var scoreEl = document.createElement('h2');
    scoreEl.textContent = "You got " + score + " out of 5 answers correct";
    scoreDiv.append(scoreEl);
    scoreEl.setAttribute("style", "margin-bottom:20px; text-align:center;");

    var hr = document.createElement("hr");
    scoreDiv.append(hr);

    //form input
    var i = document.createElement("input");
    i.setAttribute('type', "text");
    i.setAttribute('name', "username");
    i.setAttribute('placeholder', "Enter initials");
    i.setAttribute("style", "margin-bottom:20px;")
    scoreDiv.append(i);

    var s = document.createElement("button");
    s.textContent = "Submit";
    s.setAttribute('type', "submit");
    s.setAttribute('value', "Submit");
    s.setAttribute("style", "font-size:12px; width:auto");
    scoreDiv.append(s);

    s.addEventListener("click", renderScores);
}

function renderScores() {
    alert("about as far as I could get :(");
}