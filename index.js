
colorArray=["green","red","yellow","blue"];
let gamePattern=[];
let userPattern=[];
let started=false;
let level=0;
$("body").keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        started=true;
        randumbButtonClick();
    }
});

$("button").click(function(){
    let userColor=$(this).attr("id");
    userPattern.push(userColor);
    playSound(userColor);
    buttonAnimate(userColor);

    checkSequence(userPattern.length-1);
});
function checkSequence(currentLevel){
    if(gamePattern[currentLevel]===userPattern[currentLevel]){
        if(gamePattern.length===userPattern.length){
            setTimeout(function(){
                randumbButtonClick();
            },1000);
        }

    }
    else{
        playSound("wrong");
        
        $("#level-title").text("Game over, Press any key to restart");
        $("body").addClass("gameOver");
        setTimeout(function(){
            $("body").removeClass("gameOver");
        },100);
        restart();
    }
}
function playSound(userColor){
    let audio=new Audio('sounds/'+userColor+'.mp3');
    audio.play();
}
function buttonAnimate(userColor){
    $("#"+userColor).animate({opacity:0.5}).animate({opacity:1});
}
function randumbButtonClick(){
    userPattern=[];

    level++;
    $("#level-title").text("Level: "+level);

    let randumb=Math.floor(Math.random()*4);
    let randomColor=colorArray[randumb];
    gamePattern.push(randomColor);

    playSound(randomColor);
    buttonAnimate(randomColor);
}
function restart(){
    level=0;
    gamePattern=[];
    started=false;
}




