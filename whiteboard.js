var canvas, canvasContext;

const pen = {
    black : 0, 
    red : 1, 
    blue : 2, 
    green : 3, 
    yellow : 4, 
    eraser : 5
}

var mouseState = {
    mouseX : 0, 
    mouseY : 0, 
    mouseDown : false,
    selectedPen : pen.black, 
    penSize : 1,
    penColor : 'black'
}

drawLine = (context, x1, y1, x2, y2, color) => {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = mouseState.penSize;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

document.getElementById("gameCanvas").addEventListener('mousedown', e => {
    mouseState.mouseX = e.offsetX;
    mouseState.mouseY = e.offsetY;
    mouseState.mouseDown = true;
});

document.getElementById("gameCanvas").addEventListener('mousemove', e => {
    if (mouseState.mouseDown === true) {
        drawLine(canvasContext, mouseState.mouseX, mouseState.mouseY,
                 e.offsetX, e.offsetY, mouseState.penColor);
        mouseState.mouseX = e.offsetX;
        mouseState.mouseY = e.offsetY;
    }
});

window.addEventListener('mouseup', e => {
    if (mouseState.mouseDown === true) {
        drawLine(canvasContext, mouseState.mouseX, mouseState.mouseY,
                 e.offsetX, e.offsetY, mouseState.penColor);
        mouseState.mouseDown = false;
    }
});

window.onload = () => main();

main = () => {
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext('2d');
    console.log(canvasContext)
}
