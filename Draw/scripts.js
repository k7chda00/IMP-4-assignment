
var canvas = document.getElementById('drawCanvas');
var path = document.getElementById('myPath');

var context = canvas.getContext("2d");

var startX, startY, endX, endY;

var preview = false;

function getStartPos(event) {
    preview = !preview;
    
    startX = event.offsetX;
    startY = event.offsetY;
}

function getEndPos(event) {

    preview = !preview;
    
    endX = event.offsetX;
    endY = event.offsetY;

    draw();
}

function previewLine(event) {
    
    if (preview) {

        path.setAttribute('d', 'M '+startX+' '+ startY +' L '+event.offsetX+' '+event.offsetY+' ');
    
    }
    
}


function draw() {

    context.beginPath();

    context.moveTo(startX, startY);
    context.lineTo(endX, endY);

    context.strokeStyle = 'rgb(0, 0, 0)';

    context.stroke();

    context.closePath();

    path.setAttribute('d', 'M 0 0 ');
}