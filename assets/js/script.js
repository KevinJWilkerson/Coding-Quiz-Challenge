var question = document.getElementsByClassName("question");
var correctAnswer = document.getElementsByClassName("correct");
var incorrectAnswer = document.getElementsByClassName("incorrect");

var nextQuestionContainer = document.getElementById("next-question-container")


// Start quiz on click
document.getElementById("start-quiz").addEventListener("click", function() {
    document.getElementById("site-title").style.display = "none";
    document.getElementById("question1").style.display = "block";
    
    // start timer after quiz starts
    var counter = 60;
    var quizTimer = setInterval(function() {
        document.getElementById("timer").innerHTML = counter;
        counter--;
        if (counter === 0) {
            clearInterval(quizTimer);
        }
    }, 1000);
});


document.getElementsByClassName("question")[0].addEventListener("click", function(event) {

    // If clicked answer is correct, turn green, if incorrect turn red.
    var clickedEl = event.target;
    if (clickedEl.className === 'correct') {
        clickedEl.style.backgroundColor = "green";
        
        // If correct answer clicked, display next question button
        document.getElementById("next-question").style.display = "block";

    }  else {
        clickedEl.style.backgroundColor = "red";
    }   
    
    clickedEl.style.color = "white";
})

// if correct was clicked, pause timer and generate next question button
/* for (var i = 0; i < correctAnswer.length; i++) {
    correctAnswer[i].addEventListener("click", function() {
    console.log("correct was clicked!");
    });
}

// if incorrect was clicked, subtract 5 from timer and visually show wrongness
for (var i = 0; i < incorrectAnswer.length; i++) {
    incorrectAnswer[i].addEventListener("click", function() {
    console.log("incorrect was clicked!");
    })
    incorrectAnswer[i].style.color = "red";
} */

/* document.getElementsByClassName("correct").addEventListener("click", function() {
    var answerReveal = function() {
        for (var i = 0; i < answerReveal.length; i++) {
            answerReveal[i].style.backgroundColor = "red";
        }
    }
}); */

