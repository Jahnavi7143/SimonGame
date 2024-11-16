var buttonColors = ["red","blue","green","yellow"];

var gamePattern =[];

var userClickedPattern = [];

var started = false;
var level =0 ;

$(document).keypress(function(){
    if(!started){
        $("h1").text("Level 0");
        nextSequence();
        started = true;
    }
})

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else {
        console.log("Failure");
        var aud = new Audio("sounds/wrong.mp3");
        aud.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    started = false;
    level=0;
    gamePattern=[];
}

function nextSequence(){
    userClickedPattern =[];
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4)
    var randomlyChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomlyChoosenColor);
    $("#"+randomlyChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playAudio(randomlyChoosenColor);
}

$(".box").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playAudio(userChosenColor);
    animateButton(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
})

function playAudio(value){
    var audio = new Audio("sounds/"+value+".mp3");
    audio.play();
}

function animateButton(currentColor){
    $("#" + currentColor).addClass("man-pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("man-pressed");
    },100)
}








































// document.addEventListener("keypress",function(){
//     var comp = [];
//     var man = [];
//     heading(level);
//     var n = Math.floor((Math.random() * 4)+1);
//     comp.push(n);
//     compButtonAnimaton(n);
// })

// function heading(value){
//     $(".heading").text("Level " + value);
//     level++;
// }

// function makeSound(value){
//     switch(value){
//         case 1:
//             var audio1 = new Audio("sounds/green.mp3");
//             audio1.play();
//             break;
//         case 2:
//             var audio2 = new Audio("sounds/red.mp3");
//             audio2.play();
//             break;
//         case 3:
//             var audio3 = new Audio("sounds/yellow.mp3");
//             audio3.play();
//             break;
//         case 4:
//             var audio4 = new Audio("sounds/blue.mp3");
//             audio4.play();
//             break;
//     }
// }

// function compButtonAnimaton(value){
//     document.querySelector(`.box-${value}`).classList.add("comp-pressed");
//     setTimeout(function(){
//         document.querySelector(`.box-${value}`).classList.remove("comp-pressed");
//         makeSound(value);
//     },200);
// }

// function manButtonAnimation(value){
//     document.querySelector(`.box-${value}`).classList.add("man-pressed");
//     setTimeout(function(){
//         document.querySelector(`.box-${value}`).classList.remove("man-pressed");
//         makeSound(value);
//     })
// }