var body = document.body;
var quiz = document.getElementById("quiz");
var introEl = document.getElementById("quizIntro");
var qEl = document.getElementById("question");
var timeEl = document.getElementById("timer");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
// var answerStat = document.getElementById("answerStat");


var h1El = document.createElement("h1");
h1El.textContent = "Welcome To My Quiz";
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
        question: "What is my name?",
        choiceA: "George",
        choiceB: "Charlie",
        choiceC: "Dave",
        correct: "C"
    }, {
        question: "What is my boy cat's name?",
        choiceA: "Abigail",
        choiceB: "Dario",
        choiceC: "Stanley",
        correct: "B"
    }, {
        question: "What is my wife's name?",
        choiceA: "Etholine",
        choiceB: "Gertrudine",
        choiceC: "LaDonna",
        correct: "C"
    }
];

var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var questionTime = 10;
var count = 0;
// const gaugeWidth = 150; // 150px
// const gaugeUnit = gaugeWidth / questionTime;
// let TIMER;
let score = 0;


buttonEl.addEventListener("click", startQuiz);

function startQuiz() {
    introEl.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    // renderProgress();
    setTime();
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
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

function answerIsCorrect() {
    // console.log("yep");
    var answerCorrect = document.createElement("p");
    answerCorrect.textContent = "Correct";
    answerStat.appendChild(answerCorrect);
    answerCorrect.setAttribute("style", "color:green; font-size:20px; font-weight:bold; margin-top:20px; text-align:center;");

    var answerTime = 1;
    var answerInterval = setInterval(function () {
        answerTime--;

        if (answerTime === 0) {
            clearInterval(answerInterval);
            answerCorrect.style.display = "none";
        }

    }, 500);
}




// answer is Wrong
function answerIsWrong() {
    // console.log("nope");
    var answerWrong = document.createElement("p");
    answerWrong.textContent = "Wrong";
    answerStat.appendChild(answerWrong);
    answerWrong.setAttribute("style", "color:orange; font-size:20px; font-weight:bold; margin-top:20px; text-align:center;");

    var answerTime = 1;
    var answerInterval = setInterval(function () {
        answerTime--;

        if (answerTime === 0) {
            clearInterval(answerInterval);
            answerWrong.style.display = "none";
        }

    }, 500);


}

// counter render

var secondsLeft = 30;
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining";
        timeEl.setAttribute("style", "margin-bottom:20px; text-align:center;");

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function answerTime() {


}

function sendMessage() {
    timeEl.textContent = "you suck";

    var imgEl = document.createElement("img");

    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);

}


