//click event

var numberofButton = document.querySelectorAll(".drum").length;

for(var i=0;i<numberofButton;i++){

      document.querySelectorAll(".drum")[i].addEventListener("click",greeting);

}
function greeting(){

     var buttoninnerHTML = this.innerHTML;
     soundPlay(buttoninnerHTML);
     addAnimation(buttoninnerHTML);
} 

document.addEventListener("keypress",function(event){
     soundPlay(event.key);
     addAnimation(event.key);
});




function soundPlay(key){

     switch (key) {
          case 'w':
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
              break;
 
          case 'a':
                 var kick = new Audio("sounds/other.wav");
                 kick.play();
               break;
 
          case 's':
                 var snare = new Audio("sounds/snare.mp3");
                 snare.play();
               break;
 
          case 'd':
                 var tom1 = new Audio("sounds/tom-1.mp3");
                 tom1.play();
               break;
 
          case 'j':
                 var tom2 = new Audio("sounds/tom-2.mp3");
                 tom2.play();
               break;
               
          case 'k':
                 var tom3 = new Audio("sounds/tom-3.mp3");
                 tom3.play();
               break;
 
          case 'l':
                 var tom4 = new Audio("sounds/tom-4.mp3");
                 tom4.play();
               break;
 
          default:
              console.log("wrong press!");
              break;
      }

}


function addAnimation(key){
     var activatedButton = document.querySelector("."+key);

     activatedButton.classList.add("pressed");

     setTimeout(function(){
          activatedButton.classList.remove("pressed")
     ,100});
}
