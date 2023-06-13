
var score = 0;
var cross = true;
var over = false;

function playGame(){
    document.querySelector(".play").style.display="none";
    
       tom = document.querySelector(".obstacle");
       tom.classList.add('animateTom');

       var y = document.getElementById("myAudio2"); 
       y.play(); 
       y.loop=true;
    // console.log("Hello");

}
function jump(e){
    // if(gameOver == false){
    if(e.keyCode == 32 ){
        var jerry = document.querySelector(".jerry");
        jerry.classList.add('animateJerry');
        setTimeout(()=> {
            jerry.classList.remove('animateJerry');
        },900);
        var x = document.getElementById("myAudio"); 
        x.play(); 
    }
 
    // Animate on right key press
    if(e.keyCode == 39 && over==false){
        var jerry = document.querySelector(".jerry");
        jx = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
        var full  = jx+150;

        jerry.classList.add('moveCharRight');
        jerry.style.left = full + "px";

        // setTimeout(()=> {
        //     jerry.classList.remove('moveCharRight');
        // },700);
    }

    // Animate on left key press
    if(e.keyCode == 37 && over==false){
        
        var jerry = document.querySelector(".jerry");
        jx = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
        var full  = jx-130;
        jerry.style.left = full + "px";

        jerry.classList.add('moveCharLeft');
       
        
    }

  }
// }


  setInterval(() => {
    jerry   =   document.querySelector(".jerry");
    tom     =   document.querySelector(".obstacle");
    gameOver=   document.querySelector(".gameOver");


    
    jx = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
    jy = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(tom, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(tom, null).getPropertyValue('top'));

    // jx1 = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('right'));
    // ox1 = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('right')); 

    offsetX  = Math.abs(jx-ox);
    offsetY  = Math.abs(jy-oy);

    // offsetX1 = Math.abs(jx1-ox1);
    // console.log(offsetX,offsetY);

    if(offsetX<20 && offsetY<150){
        // console.log(over);
        var y = document.getElementById("myAudio1"); 
        y.play(); 
        gameOver.style.display = "block";
        tom.classList.remove('animateTom');
        cross = false;
        over=true;
        document.querySelector(".gameContainer").style.opacity=0.1;
        document.querySelector(".scoreCount").style.top= "50%";
        document.querySelector(".scoreCount").style.left= "42%";
        document.querySelector(".scoreCount").style.color= "red";
        document.querySelector(".replay").style.display= "block";
        score=score-1;
        document.querySelector(".scoreCount").innerHTML = "Score: "+ score;
    }
    
    else if(offsetX<145 && cross == true && over == false){
        console.log(over);
        score += 1; 
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
}, 10);

function updateScore(score){
    document.querySelector(".scoreCount").innerHTML = "Score: "+ score;
}


