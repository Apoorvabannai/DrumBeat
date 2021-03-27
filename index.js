  //
  //    document.querySelector("button").addEventListener("click", handleclick); //  applied to first button
  //
  //   function handleclick(){
  //     alert("I got clicked");
  //   }
  // for all buttons to be click
  //  for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
  //     // document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  //     //   alert("I got clicked");
  //     document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
  //
  //   //  });
  //  }
  // function handleclick(){
  //   alert("I got clicked");
  // }
  // for loop without any  function (anaomous function):
  // for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
  //   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  //     alert("I got clicked");
  //   });
  // }

  // adding music to web
  //
  //   for(var i = 0; i< document.querySelectorAll(".drum").length;i++){
  //     document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  //     var audio = new Audio("sounds/tom-1.mp3");
  //     audio.play();
  //   });
  //   }

  // Adding music to each keys
  //     for(var i = 0; i< document.querySelectorAll(".drum").length; i++){
  //       document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  //         var button = this.innerHTML;
  //         switch (button) {
  //           case "w":
  //           var tom1 = new Audio("sounds/tom-1.mp3");
  //           tom1.play();
  //           break;
  //
  //           case "a":
  //           var tom2 = new Audio("sounds/tom-2.mp3");
  //           tom2.play();
  //           break;
  //
  //           case "s":
  //           var tom3 = new Audio("sounds/tom-3.mp3");
  //           tom3.play();
  //           break;
  //
  //           case "d":
  //           var tom4 = new Audio("sounds/tom-4.mp3");
  //           tom4.play();
  //           break;
  //
  //           case "j":
  //           var crash = new Audio("sounds/crash.mp3");
  //           crash.play();
  //           break;
  //
  //           case "k":
  //           var kickBass = new Audio("sounds/kick-bass.mp3");
  //           kickBass.play();
  //           break;
  //
  //           case "l":
  //           var snare = new Audio("sounds/snare.mp3");
  //           snare.play();
  //           break;
  //           default:
  //           console.log(button);
  //         }
  // });
  // }


  //    applying keyboard keys to the document
        // document.addEventListener("keydown", function(){
        // alert(" key is pressed ");
        // });


//    tracking the event parameter
    // document.addEventListener("keydown",function(event){
    //   console.log(event);
    // });
//  Now create function which takes input from keyboard and play on the click
//  Detecting  the button presse
  var lengthOfButtons = document.querySelectorAll(".drum").length;
  for(var i = 0; i <lengthOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      var button = this.innerHTML;
      makeSound(button);
    });
  }

  document.addEventListener("keydown",fucntion(event){
     makeSound(event.key);
  });

  function makeSound(key){

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
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

            case "l":
             var snare = new Audio("sounds/snare.mp3");
             snare.play();
             break;
             
             default:
           console.log(button);
         }
       }
