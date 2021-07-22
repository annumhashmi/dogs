function ourAnimation() {
 var ourImage = document.getElementById("animation");

 ourImage.style.position = "relative";
 var position = 0;

 setInterval(move, 5);

 function move() {
   if (position == window.screen.width - 300) {
     clearInterval();
   } else {
     position++;
     ourImage.style.left = position + "px";
   }
 }

}

function future() {
  var name = prompt("What is your name?");
  var number = prompt("Enter a number from 1-10");
  var dog = prompt("What is your favorite dog breed?");
  var location = prompt("What is your favorite location?");
  var result = ("Congratulations " +name+ ", you will get a " +dog+ " in " +number+ " years at " +location+ ".");

  document.getElementById("resultText").innerHTML = result

  var image = new Image();
  image.src = "celebratingdog.jpeg";
  image.width = "350";
  image.height = "250";

  document.getElementById("resultImage").appendChild(image);
}