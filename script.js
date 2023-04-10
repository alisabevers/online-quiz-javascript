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
setTime();


// Function to render questions on the page, one at a time
var questionsEl = document.querySelector(".quizQuestions");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4")
var currentQuestion = "";
var currentChoices = "";
var questions = [
    {
        question: "When is Harry Potter's birthday?",
        choices: ["August 1", "November 20", "July 31", "September 2"],
        answer: "July 31"
    },
    {
        question: "What is the animal symbol of Ravenclaw?",
        choices: ["Eagle", "Serpent", "Snow Owl", "Badger"],
        answer: "Eagle"
    },
    {
        question: "Who anonymously sends Harry his father's invisibility cloak on Christmas?",
        choices: ["Albus Dumbledore", "Sirius Black", "Severus Snape", "Molly Weasley"],
        answer: "Albus Dumbledore"
    },
    {
        question: "What kind of dragon was Hagrid's pet, Norbert?",
        choices: ["Hungarian Horntail", "Romanian Longhorn", "Peruvian Vipertooth", "Norwegian Ridgeback"],
        answer: "Norwegian Ridgeback"
    }
];

function showQuestions(event) {
    // var lastQuestion = currentQuestion === questions.length - 1;

    for(let i=0; i < questions.length; i++) {
        currentQuestion = questions[i].question;
        questionsEl.textContent = currentQuestion;
        choice1.textContent = questions[i].choices[0];
        choice2.textContent = questions[i].choices[1];
        choice3.textContent = questions[i].choices[2];
        choice4.textContent = questions[i].choices[3];
        event.stopPropagation();

        // var userSelection = questions[i].choices[j];
        var validate = document.querySelector(".rightOrWrong");
        validate.addEventListener("click", function() {
            if (userSelection === questions[i].answer) {
                document.querySelector(".rightOrWrong").textContent = "Correct!";
            } else {
                document.querySelector(".rightOrWrong").textContent = "Wrong!";
            }
        })
    }
};

showQuestions(questions);