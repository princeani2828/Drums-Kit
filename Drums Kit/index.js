// Add event listeners for button clicks and keypresses
const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
  button.addEventListener("click", () => {
    playSound(button.innerHTML);
    buttonAnimation(button.innerHTML);
  });
});

document.addEventListener("keypress", event => {
  playSound(event.key);
  buttonAnimation(event.key);
});

// Function to play sounds
function playSound(key) {
  let sound;

  switch (key) {
    case "w":
      sound = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      sound = new Audio("sounds/snare.mp3");
      break;
    case "s":
      sound = new Audio("sounds/crash.mp3");
      break;
    case "d":
      sound = new Audio("sounds/kick-bass.mp3");
      break;
    case "j":
      sound = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      sound = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      sound = new Audio("sounds/tom-4.mp3");
      break;
    default:
      console.log(key);
  }

  if (sound) sound.play();
}

// Function to animate the button press
function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
  }
}
