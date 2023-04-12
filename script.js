var questionsEl = document.querySelector(".quizQuestions");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var currentChoice = "";

// arrays to store data of questions, choices, and answers to display
var questions = ["When is Harry Potter's birthday?", "What is the animal symbol of Ravenclaw?", "Who anonymously sends Harry his father's invisibility cloak on Christmas?", "What kind of dragon was Hagrid's pet, Norbert?"];

var choices = [ ["August 1", "November 20", "July 31", "September 2"],
                ["Eagle", "Serpent", "Snow Owl", "Badger"],
                ["Albus Dumbledore", "Sirius Black", "Severus Snape", "Molly Weasley"],
                ["Hungarian Horntail", "Romanian Longhorn", "Peruvian Vipertooth", "Norwegian Ridgeback"]
            ];

var answers = ["July 31", "Eagle", "Albus Dumbledore", "Norwegian Ridgeback"];

// iterates the questions and choices to present one at a time
var questionsIt = questions[Symbol.iterator]();
var choicesIt = choices[Symbol.iterator]();
var answersIt = answers[Symbol.iterator]();
var nextQuestion = questionsIt.next();
var nextChoice = choicesIt.next();
var nextAnswer = answersIt.next();

// Function to set the timer to start upon load of the second HTML file
var timeEl = document.querySelector(".time");
var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //something here to end the quiz. Your Score page which will = 0?
        }
    }, 1000);
}

// displays the text in the corresponding buttons and div upon load
currentQuestion = nextQuestion.value;
questionsEl.textContent = currentQuestion;
choice1.textContent = nextChoice.value[0];
choice2.textContent = nextChoice.value[1];
choice3.textContent = nextChoice.value[2];
choice4.textContent = nextChoice.value[3];

// displays whether the user selection is right or wrong
async function displayResult(currentChoice) {
    var validation = document.querySelector("#validation");
    if (currentChoice === nextAnswer.value) {
        validation.textContent = "Correct!";
        nextAnswer = answersIt.next();
    } else {
        validation.textContent = "Wrong!";
        secondsLeft -= 10;
        nextAnswer = answersIt.next();
    }
}

// event listeners for buttons that the user clicked
choice1.addEventListener('click', function(event) {
    currentChoice = event.target.textContent;
    displayResult(currentChoice);
    let counter = 1;
    let myTimer = setInterval(function() {
        counter--;
        if(counter == 0){ 
            currentChoice = "";
            validation.textContent = "";
            clearInterval(myTimer);
            nextQuestion = questionsIt.next();
            nextChoice = choicesIt.next();
            (nextQuestion.done) ?
            [choice1.disabled, choice2.disabled, choice3.disabled, choice4.disabled] = [true, true, true, true]
            : 
            [questionsEl.textContent, choice1.textContent, choice2.textContent, choice3.textContent, choice4.textContent] = [nextQuestion.value, nextChoice.value[0], nextChoice.value[1], nextChoice.value[2], nextChoice.value[3]];
        }
    }, 1000);
});

choice2.addEventListener('click', function(event) {
    currentChoice = event.target.textContent;
    displayResult(currentChoice);
    let counter = 1;
    let myTimer = setInterval(function() {
        counter--;
        if(counter == 0){ 
            currentChoice = "";
            validation.textContent = "";
            clearInterval(myTimer);
            nextQuestion = questionsIt.next();
            nextChoice = choicesIt.next();
            (nextQuestion.done) ?
            [choice1.disabled, choice2.disabled, choice3.disabled, choice4.disabled] = [true, true, true, true]
            :
            [questionsEl.textContent, choice1.textContent, choice2.textContent, choice3.textContent, choice4.textContent] = [nextQuestion.value, nextChoice.value[0], nextChoice.value[1], nextChoice.value[2], nextChoice.value[3]];
        }
    }, 1000);
});

choice3.addEventListener('click', function(event) {
    currentChoice = event.target.textContent;
    displayResult(currentChoice);
    let counter = 1;
    let myTimer = setInterval(function() {
        counter--;
        if(counter == 0){ 
            currentChoice = "";
            validation.textContent = "";
            clearInterval(myTimer);
            nextQuestion = questionsIt.next();
            nextChoice = choicesIt.next();
            (nextQuestion.done) ?
            [choice1.disabled, choice2.disabled, choice3.disabled, choice4.disabled] = [true, true, true, true]
            :
            [questionsEl.textContent, choice1.textContent, choice2.textContent, choice3.textContent, choice4.textContent] = [nextQuestion.value, nextChoice.value[0], nextChoice.value[1], nextChoice.value[2], nextChoice.value[3]];
        }
    }, 1000);
});

choice4.addEventListener('click', function(event) {
    currentChoice = event.target.textContent;
    displayResult(currentChoice);
    let counter = 1;
    let myTimer = setInterval(function() {
        counter--;
        if(counter == 0){ 
            currentChoice = "";
            validation.textContent = "";
            clearInterval(myTimer);
            nextQuestion = questionsIt.next();
            nextChoice = choicesIt.next();
            (nextQuestion.done) ?
            [choice1.disabled, choice2.disabled, choice3.disabled, choice4.disabled] = [true, true, true, true]
            :
            [questionsEl.textContent, choice1.textContent, choice2.textContent, choice3.textContent, choice4.textContent] = [nextQuestion.value, nextChoice.value[0], nextChoice.value[1], nextChoice.value[2], nextChoice.value[3]];
        }
    }, 1000);
});

setTime();