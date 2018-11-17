

  //global game variables
  var currentSong = "Rahat";
  var userGuess;
  var timer = 33;
  var lives = 5;
  var score = 0;

  //function to stop the timer
  function clearTime() {
    clearInterval(timerRun);
  }


  //actual timer function which stops when it hits 0
  function timeLeft() {
    timer--;
    console.log("We playing the song: " + songAnswer);
    console.log(timer);
    if (timer <= 0) {
      alert("Time up!");
      clearTime();
      lives--;
      console.log(lives);
    }
  }


  //interval for timer
  var timerRun = setInterval(timeLeft, 1000)

  //called the funciton so it can start running once the page loads
  timeLeft();

  //function to check answers and add to score or lose a life
  function answerCheck() {
    if (userGuess.toLowerCase() == songAnswer.toLowerCase() && timer >= 15) {
      score = score + 100;
      clearTime();
      console.log(score);
    } else if (userGuess.toLowerCase() == songAnswer.toLowerCase() && timer < 15) {
      score = score + 50;
      clearTime();
      console.log(score);
    } else if (userGuess.toLowerCase() != songAnswer.toLowerCase()) {
      lives--;
      clearTime();
      console.log(lives);
    }

  };

  //need funcction to go to next song - call when user enters wrong value - or is done playing the song
  //need function to stop apending lyrics - call when timer hits 0, when user enter correct answer, when user enters incorrect
  //need fucntion to play song when user gets the correct answer
  //n

  //click funciton for guess - sets the userguess variable equal to whatever the user put in
  $("#guess").click(function(e) {
    e.preventDefault();
    userGuess = $("#userInput").val().trim();
    console.log(userGuess);
    answerCheck();
  });
