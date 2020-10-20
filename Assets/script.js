var body = document.body;
var quiz = document.getElementById("quiz");
var introEl = document.getElementById("quizIntro");
var qEl = document.getElementById("question");
var timerEl = document.getElementById("timer");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");


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
        correct: "A"
    }, {
        question: "What does CSS stand for?",
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        correct: "B"
    }, {
        question: "What does JS stand for?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        correct: "C"
    }
];




