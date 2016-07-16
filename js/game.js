var canvas = document.getElementById("game-stage");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

var paddleX = (canvas.width - 100) / 2;

var rightPressed = false;
var leftPressed = false;

function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddleX - 100, canvas.height - 20, 200, 20);
    ctx.fillStyle = "#0095D0";
    ctx.fill();
    ctx.closePath();

    if (rightPressed && paddleX < canvas.width - 100) {
        paddleX += 7;
   } else if (leftPressed && paddleX > 100) {
       paddleX -= 7;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var ball = new Ball();
    ball.draw(ctx);

    if (x + dx > canvas.width-ball.radius() || x + dx < ball.radius()) {
        dx = -dx;
    }

    if(y + dy < ball.radius()) {
        dy = -dy;
    } else if(y + dy > canvas.height - ball.radius()) {
        if (x > paddleX && x < paddleX + 200) {
            dy = -dy;
        } else {
            console.log("GAME OVER");
            document.location.reload();
        }
    }

    drawPaddle();

    x += dx;
    y += dy;
}


document.addEventListener("keydown", onKeyDown, false);
document.addEventListener("keyup", onKeyUp, false);

function onKeyDown(event) {
    if (event.keyCode == 39) {
        rightPressed = true;
    } else if (event.keyCode == 37) {
        leftPressed = true;
    }
}

function onKeyUp(event) {
    if (event.keyCode == 39) {
        rightPressed = false;
    } else if (event.keyCode == 37) {
        leftPressed = false;
    }
}

setInterval(draw, 10);