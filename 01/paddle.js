
var Paddle = function(game) {
    var paddle = game.imageByName('paddle')
    paddle.x = 100
    paddle.y = 250
    paddle.speed = 15
    // var paddle = {
    //     image: image,
    //     x: 100,
    //     y: 240,
    //     speed: 5,
    // }
    paddle.move = function(x) {
        if(x < 0) {
            x = 0
        }
        if(x > 400 - paddle.image.width) {
            x = 400 - paddle.image.width
        }
        paddle.x = x
    }

    paddle.moveLeft = function() {
        paddle.move(paddle.x - paddle.speed)
    }
    paddle.moveRight = function() {
        paddle.move(paddle.x + paddle.speed)
    }
    paddle.collide = function(ball) {
        return rectIntersects(ball, paddle) || rectIntersects(paddle, ball)
    }
    return paddle
}