var timeEl = document.querySelector(".time");
var timesUpEl = document.querySelector("#timesUp");
var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

setTime();

// function endQuiz () {
//     timeEl.textContent = " ";

// }

