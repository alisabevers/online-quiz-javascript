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
var currentChoice = "";
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

// event listeners for buttons that the user clicked
choice1.addEventListener('click', function(event) {
    currentChoice = event.target.textContent;
    console.log(currentChoice);
});

choice2.addEventListener('click', function(event) {
    currentChoice = event.target.textContent;
    console.log(currentChoice);
});

choice3.addEventListener('click', function(event) {
    currentChoice = event.target.textContent;
    console.log(currentChoice);
});

choice4.addEventListener('click', function(event) {
    currentChoice = event.target.textContent;
    console.log(currentChoice);
});

// function to present the question
async function showQuestions() {
    var i = 0;
    do{
        currentQuestion = questions[i].question;
        questionsEl.textContent = currentQuestion;
        choice1.textContent = questions[i].choices[0];

        choice1.value = (questions[i].answer === questions[i].choices[0]) ? 1 : 0;
        choice2.textContent = (questions[i].choices[1]);
        choice2.value = (questions[i].answer === questions[i].choices[1]) ? 1 : 0;
        choice3.textContent = (questions[i].choices[2]);
        choice3.value = (questions[i].answer === questions[i].choices[2]) ? 1 : 0;
        choice4.textContent = questions[i].choices[3];
        choice4.value = (questions[i].answer === questions[i].choices[3]) ? 1 : 0;
        if(currentChoice != "") i++;
        
    }
    while (i < questions.length && currentChoice != "")
}; 
showQuestions();


 // var userSelection = questions[i].choices[j];

//  var validation = document.querySelector(".validation");
//  validation.addEventListener("click", function() {
//      if (userSelection === questions[i].answer) {
//          validation.textContent = "Correct!";
//      } else {
//          validation.textContent = "Wrong!";
//      }
//  })