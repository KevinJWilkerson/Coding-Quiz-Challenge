var question = document.getElementsByClassName("question");
var correctAnswer = document.getElementsByClassName("correct");
var incorrectAnswer = document.getElementsByClassName("incorrect");

var nextQuestionContainer = document.getElementById("next-question-container")

// Start quiz on click
document.getElementById("start-quiz").addEventListener("click", function() {
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highscore = 0;
    }

    var playerInit = localStorage.getItem("Player Initials");
    if (playerInit === null) {
        playerInit = '';
    }

    document.getElementById("site-title").style.display = "none";
    document.getElementById("question1").style.display = "block";
    
    // start timer after quiz starts
    var counter = 60;
    var quizTimer = setInterval(function() {
        document.getElementById("timer").innerHTML = counter;
        counter--;
        if (counter <= 0) {
            clearInterval(quizTimer);
            var initials = window.prompt("Please enter your initials");
            window.playerInit = initials;
            localStorage.setItem("Player Initials", playerInit);
            return playerInit;
        }

        for (var i = 0; i < incorrectAnswer.length; i++) {
            incorrectAnswer[i].addEventListener("click", function(eventW) {
                var clickedEl = eventW.target;
                if (clickedEl.className === 'incorrect') {
                    counter--;
                }
            })
        }
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
            document.getElementById("next-question").style.display = "none";
        })    
    });

    // second question
    document.getElementById("question2").addEventListener("click", function(event2) {

        // If clicked answer is correct, turn green, if incorrect turn red.
        var clickedEl = event2.target;
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
            document.getElementById("next-question").style.display = "none";
        })
    });

    // third question
    document.getElementById("question3").addEventListener("click", function(event3) {

        // If clicked answer is correct, turn green, if incorrect turn red.
        var clickedEl = event3.target;
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
            document.getElementById("next-question").style.display = "none";
        })
    });

    // fourth question
    document.getElementById("question4").addEventListener("click", function(event4) {

        // If clicked answer is correct, turn green, if incorrect turn red.
        var clickedEl = event4.target;
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
            document.getElementById("next-question").style.display = "none";
        })
    });

    // fifth question
    document.getElementById("question5").addEventListener("click", function(event5) {

        // If clicked answer is correct, turn green, if incorrect turn red.
        var clickedEl = event5.target;
        if (clickedEl.className === 'correct') {
            clickedEl.style.backgroundColor = "green";
            
            // If correct answer clicked, display finish quiz button
            document.getElementById("next-question").style.display = "block";
            document.getElementById("next-question").innerHTML = "Finish quiz!";
            document.getElementById("next-question-container").id = "finish-quiz";

        }  else {
            clickedEl.style.backgroundColor = "red";
        }   
        
        clickedEl.style.color = "white";
    
    // when finish quiz button is clicked, display highscore and hide other elements
    document.getElementById("finish-quiz").addEventListener("click", function() {

        // set the player's score
        var playerScore = counter;

        // check to see if the player has set a new high score
        window.alert("You finished the quiz! Let's see how you did.");
        if (playerScore > localStorage.getItem("highscore")) {
            var playerInit = window.prompt("You set a new high score! Please enter your initials.")
            localStorage.setItem("highscore", playerScore);
            localStorage.setItem("Player Initials", playerInit);
            document.getElementById("highscore").innerHTML = playerInit + ": " + playerScore;
            document.getElementById("question5").style.display = "none";
            document.getElementById("finish-quiz").style.display = "none";
            document.getElementById("highscore").style.display = "block";

            document.getElementById("highscore").addEventListener("click", function() {
                location.reload();
            })

        } else {
            window.alert("Sorry, you didn't beat the high score. Better luck next time!");
            location.reload();
        }

    })

    });
});

document.getElementById("high-scores").addEventListener("click", function() {
    playerInit = localStorage.getItem("Player Initials");
    playerScore = localStorage.getItem("highscore");
    document.getElementById("high-scores").innerHTML = "Current High Score - " + playerInit + ": " + playerScore;
})