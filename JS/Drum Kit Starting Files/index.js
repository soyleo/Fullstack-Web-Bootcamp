var allDrumButtons = document.querySelectorAll(".drum");
var numberOfButtons = allDrumButtons.length;

function playDrum(key) {
  var tom1 = new Audio("./sounds/tom-1.mp3");
  var tom2 = new Audio("./sounds/tom-2.mp3");
  var tom3 = new Audio("./sounds/tom-3.mp3");
  var tom4 = new Audio("./sounds/tom-4.mp3");
  var snare = new Audio("./sounds/snare.mp3");
  var crash = new Audio("./sounds/crash.mp3");
  var kick = new Audio("./sounds/kick-bass.mp3");
  switch (key) {
    case "w": 
        tom1.play();
        break;
    case "a":
        tom2.play();
        break;
    case "s":
        tom3.play();
        break;
    case "d":
        tom4.play();
        break;
    case "j":
        snare.play();
        break;
    case "k":
        crash.play();
        break;
    case "l":
        kick.play();
        break;
    default:
        console.log(key + " undefined");
  }
}
function animateButton(key){
    var button = document.querySelector("." + key);
    button.classList.toggle("pressed");
    setTimeout(function (){
        button.classList.toggle("pressed");
    }, 100);
}

for (var i = 0; i < numberOfButtons; i++) {
  allDrumButtons[i].addEventListener("click", function () {
    playDrum(this.textContent);
    animateButton(this.textContent);
  });
}
document.addEventListener("keydown", function (event){
    if(event.repeat) return;
    playDrum(event.key.toLowerCase());
    animateButton(event.key.toLowerCase());
})
