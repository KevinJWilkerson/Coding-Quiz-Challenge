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

        // store counter as playerScore global variable when quiz is finished
        if (document.getElementById("finish-quiz").addEventListener("click",  function() {
            var score = counter; 
            window.playerScore = score;
            localStorage.setItem("highscore", playerScore);

        }));
    }, 1000);

    // First question
    document.getElementById("question1").addEventListener("click", function(event1) {

        // If clicked answer is correct, turn green, if incorrect turn red.
        var clickedEl = event1.target;
        if (clickedEl.className === 'correct') {
            clickedEl.style.backgroundColor = "green";
            
            // If correct answer clicked, display next question button
            document.getElementById("next-question").style.display = "block";

        }  else {
            clickedEl.style.backgroundColor = "red";
        }   
        
        clickedEl.style.color = "white";
    
        // when next question button is clicked, display next question and hide other elements
        document.getElementById("next-question").addEventListener("click", function() {
            document.getElementById("question1").style.display = "none";
            document.getElementById("question2").style.display = "block";
        })    
    });

    // second question
    document.getElementById("question2").addEventListener("click", function(event2) {

        // If clicked answer is correct, turn green, if incorrect turn red.
        var clickedEl = event2.target;
        console.log(clickedEl);
        if (clickedEl.className === 'correct') {
            clickedEl.style.backgroundColor = "green";
            
            // If correct answer clicked, display next question button
            document.getElementById("next-question").style.display = "block";

        }  else {
            clickedEl.style.backgroundColor = "red";
        }   
        
        clickedEl.style.color = "white";
    
        // when next question button is clicked, display next question and hide other elements
        document.getElementById("next-question").addEventListener("click", function() {
            document.getElementById("question2").style.display = "none";
            document.getElementById("question3").style.display = "block";
        })
    });

    // third question
    document.getElementById("question3").addEventListener("click", function(event3) {

        // If clicked answer is correct, turn green, if incorrect turn red.
        var clickedEl = event3.target;
        console.log(clickedEl);
        if (clickedEl.className === 'correct') {
            clickedEl.style.backgroundColor = "green";
            
            // If correct answer clicked, display next question button
            document.getElementById("next-question").style.display = "block";

        }  else {
            clickedEl.style.backgroundColor = "red";
        }   
        
        clickedEl.style.color = "white";
    
        // when next question button is clicked, display next question and hide other elements
        document.getElementById("next-question").addEventListener("click", function() {
            document.getElementById("question3").style.display = "none";
            document.getElementById("question4").style.display = "block";
        })
    });

    // fourth question
    document.getElementById("question4").addEventListener("click", function(event4) {

        // If clicked answer is correct, turn green, if incorrect turn red.
        var clickedEl = event4.target;
        console.log(clickedEl);
        if (clickedEl.className === 'correct') {
            clickedEl.style.backgroundColor = "green";
            
            // If correct answer clicked, display next question button
            document.getElementById("next-question").style.display = "block";

        }  else {
            clickedEl.style.backgroundColor = "red";
        }   
        
        clickedEl.style.color = "white";
    
        // when next question button is clicked, display next question and hide other elements
        document.getElementById("next-question").addEventListener("click", function() {
            document.getElementById("question4").style.display = "none";
            document.getElementById("question5").style.display = "block";
        })
    });

    // fifth question
    document.getElementById("question5").addEventListener("click", function(event5) {

        // If clicked answer is correct, turn green, if incorrect turn red.
        var clickedEl = event5.target;
        console.log(clickedEl);
        if (clickedEl.className === 'correct') {
            clickedEl.style.backgroundColor = "green";
            
            // If correct answer clicked, display next question button
            document.getElementById("next-question").style.display = "block";
            document.getElementById("next-question").innerHTML = "Finish quiz!";
            document.getElementById("next-question").id = "finish-quiz";

        }  else {
            clickedEl.style.backgroundColor = "red";
        }   
        
        clickedEl.style.color = "white";
    
        // when finish quiz button is clicked, display highscore and hide other elements
        document.getElementById("next-question").addEventListener("click", function() {
            document.getElementById("question5").style.display = "none";
            document.getElementById("highscore").style.display = "block";
            document.getElementById("next-question").style.display = "none";
            console.log(counter.toString());
        })
    });
});

var endQuiz = function() {
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highscore = 0;
    }

    if (playerScore > highScore) {
        localStorage.setItem("highscore", playerScore);
    }
}















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

