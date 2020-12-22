
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);  //we take the string which is inside the button

    });

}

document.addEventListener("keypress",function(event){ //make noise after pressing a specific key
  makeSound(event.key);  //we need the event parrameter because we need to acces the specific key
});

function makeSound(key){  // we see which key we have inside the button and take the specific sound
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    default: console.log(key);

  }
}
