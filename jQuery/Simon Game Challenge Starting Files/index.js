var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function () {
  if (started !== true) {
    started = true;
    $("h1").text("Level " + level);
    nextSequence();
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    console.log(userClickedPattern);
    if (userClickedPattern.length === level) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    console.log("wrong");
    startOver();
  }
}
function startOver(){
    playSound("wrong");
    $("body").toggleClass("game-over");
    setTimeout(function(){
        $("body").toggleClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    level = 0;
    gamePattern = [];
    started = false;
}

function nextSequence() {
  userClickedPattern = [];
  console.log(gamePattern);

  level++;
  $("h1").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
