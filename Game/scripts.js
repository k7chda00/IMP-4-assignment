var canvas = document.getElementById('drawCanvas');
var info = document.getElementById('info');

var context = canvas.getContext("2d");

var myInterval;

var genX, genY, genSize, genSpec ;

var score, time , addScore = 1;

var clickable = false;
var specTime = 0.5;
var specTimeStart = 0;

function Collision(event) {

    if( clickable &&
     event.offsetX >= genX && 
     event.offsetX <= genX + genSize &&
     event.offsetY >= genY &&
     event.offsetY <= genY + genSize ) {

        score += addScore;
            
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawSomething();

    }
    
    if( !clickable ) {

        score = 0;

        time = 10.0;

        startCount();

        drawSomething();

    } 

}

function startCount () {

    clickable = true;

    myInterval = window.setInterval(countDown, 100);

}

function countDown () {

    var cas = parseFloat(time)- 0.1;

    time = cas.toFixed(1);

    display();

    if( specTimeStart && ( specTimeStart - specTime ) > time ) {

        context.clearRect(0, 0, canvas.width, canvas.height);

        drawSomething();

        specTimeStart = 0;

    }
    
    if( time <= 0 ){
        
        clickable = false;

        clearInterval(myInterval);

        info.innerHTML = 'GAME OVER, SCORE: '+score + ' click Canvas to try again';

        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function display() {

    info.innerHTML = 'SCORE: '+score+' --- TIME LEFT: '+ time+' s';

}
  
function drawSomething() {

    genX = getRandomNumber(700);
    genY = getRandomNumber(500);
    genSize = getRandomNumber(100);

    context.beginPath();
    context.lineWidth = 4;

    genSpec = Math.random();

    if( genSpec < 0.6 ){

        addScore = 1;

        context.fillStyle="#FF0000";

    } else if ( genSpec >= 0.6 && genSpec < 0.9 ) {

        addScore = 2;

        context.fillStyle="#00FF00";        

    } else {

        addScore = 3;

        specTimeStart = time;

        context.fillStyle="#0000FF";

    }

    context.rect( genX, genY, genSize, genSize);
    context.fill();
  
}

function getRandomNumber(max) {

    return Math.max(Math.floor(Math.random() * max), 5 );

}
