var Ball = function() {
}

Ball.prototype = {
    radius: function() {
        return 10;
    }
};

Ball.prototype.draw = function(context) {
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI*2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}