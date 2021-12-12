
// Start quiz on click
document.getElementById("start-quiz").addEventListener("click", function() {
    console.log("I was clicked");
    document.getElementById("site-title").style.display = "none";
    document.getElementById("question-one").style.display = "block";
    
    // start timer after quiz starts on click
    var counter = 60;
    var quizTimer = setInterval(function() {
        console.log(counter);
        document.getElementById("timer").innerHTML = counter;
        counter--;
        if (counter === 0) {
            console.log("It's working");
            clearInterval(quizTimer);
        }
    }, 1000);
});

