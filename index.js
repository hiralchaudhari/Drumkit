// Get all elements in document with class="drum" and attcah click event to the document
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var index = 0; index < numberOfDrumButtons; index++) {
  document.querySelectorAll(".drum")[index].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
  })
}
// keyboard event listener to check for key presses
document.addEventListener("keypress", function(event) {
  makesound(event.key);
  buttonAnimation(event.key)
});

// Add audio to button
function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:

      document.getElementById("title").innerHTML = "Invalid input!";
      document.getElementById("hint").innerHTML = "press key matches with character shown on drum image";

      setTimeout(function() {
        document.getElementById("title").innerHTML = "Drum 🥁 Kit";
      }, 5000);
      setTimeout(function() {
        document.getElementById("hint").innerHTML = "Hit any image or press key matches with character shown on drum image";
      }, 5000);
  }
}

// Add animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100)
}
