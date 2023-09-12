
/* Detecting button pass  */


for(var i=0; i <document.querySelectorAll(".drum").length;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",clicksound);
    
    //.addEventListener add the click options,  [1] that indecat the number of button
    
      function clicksound(){
    
        var button=this.innerHTML;
        sound(button);
        buttonAnimation(button);
      }
     }
    
    /* Detecting keybord pass  */
    
     document.addEventListener("keypress",function(event){
        sound(event.key);
        buttonAnimation(event.key);
     });
    
    /* Detecting button pass  */
    
     function sound(key){
        switch (key) {
            case "w":
                    var audio= new Audio("sounds/tom-1.mp3");
                    audio.play();
                break;
            case "a":
                    var audio= new Audio("sounds/tom-2.mp3");
                    audio.play();
                break;
            case "s":
                    var audio= new Audio("sounds/tom-3.mp3");
                    audio.play();
                break;
            case "d":
                    var audio= new Audio("sounds/tom-4.mp3");
                    audio.play();
                break;
            case "j":
                    var audio= new Audio("sounds/snare.mp3");
                    audio.play();
                break;
            case "k":
                    var audio= new Audio("sounds/crash.mp3");
                    audio.play();
                break;
            case "l":
                    var audio= new Audio("sounds/kick-bass.mp3");
                    audio.play();
                break;
            default:
                console.log(button);
        }
     }


     //BUTTON ANIMATION

    function buttonAnimation(currentkey){
       var activeButton =  document.querySelector("."+currentkey);

       activeButton.classList.add("pressed");
       setTimeout(function() {
        activeButton.classList.remove("pressed");
       }, 100);
    }