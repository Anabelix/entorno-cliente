const buttonColours=["red", "blue", "green", "yellow"];
let patron=[];
let userClickedPattern=[];
let level = 0;
let cont = 0;
let started = false;

$(document).keydown(function (){
    cont++;
/*     if (!started) {
        $("#level-title").text("Level 0");
        nextSequence();
        started=true;
    } */

    if (cont==1) {
        $("#level-title").text("Level 0");
        nextSequence();
        started=true;
    }
})

function nextSequence() {
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour=buttonColours[randomNumber];
    patron.push(randomChosenColour);
    
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

$(".btn").click (function () {
    let userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer (currentLevel) {
    if (patron[currentLevel]===userClickedPattern[currentLevel]) {
        if (patron.length===userClickedPattern.length) {
            setTimeout(nextSequence, 1000);
        }
    }  else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level=0;
    patron=[];
    started=false;
    cont=0;
}
function playSound(name) {
    let audio = new Audio ("sounds/"+name+".mp3");
    audio.play();
}
function animatePress (currentColor) {
    $("#"+currentColor).addClass("pressed");
    setTimeout(function () {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}