var Ball = function(game) {
    var ball = game.imageByName('ball')
    ball.x = 100
    ball.y = 200
    ball.speedX = 5
    ball.speedY = 5
    ball.fired = false



    ball.fire = function() {
        ball.fired = true
    }
    ball.move = function() {
        if(ball.fired) {
            if(ball.x < 0 || ball.x > 400) {
                ball.speedX = - ball.speedX
            }
            if(ball.y < 0 || ball.y > 300) {
                ball.speedY = - ball.speedY
            }

            ball.x += ball.speedX
            ball.y += ball.speedY
        }
    }
    ball.bounce = function() {
        ball.speedY *= -1
    }
    return ball
}