$(document).ready(function(){

//global game variables
var currentSong = "Rahat";
var userGuess;
var timer = 30;
var lives = 5;
var score = 0;

//function to stop the timer
function clearTime(){
  clearInterval(timerRun);
}


//actual timer function which stops when it hits 0
function timeLeft(){
  timer --;
  console.log(timer);
  if (timer <=0) {
    alert ("Time up!");
    clearTime();
  }
}


//interval for timer
var timerRun = setInterval(timeLeft, 1000)

//called the funciton so it can start running once the page loads
timeLeft();

//function to check answers and add to score or lose a life
function answerCheck(){
  if (userGuess.toLowerCase() == currentSong.toLowerCase() && timer >= 15) {
    score = score + 100;
    clearTime();
    console.log(score);
  } else if (userGuess.toLowerCase() == currentSong.toLowerCase() && timer < 15) {
    score = score + 50;
    clearTime();
    console.log(score);
  } else if (userGuess.toLowerCase() != currentSong.toLowerCase()) {
    lives --;
    clearTime();
    console.log(lives);
  }

}

//click funciton for guess - sets the userguess variable equal to whatever the user put in
$("#guess").click(function(e){
  e.preventDefault();
  userGuess = $("#userInput").val().trim();
  console.log(userGuess);
  answerCheck();
});



});
