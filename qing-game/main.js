
var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var arr = []
    console.log(level)
    for(var i = 0; i < level.length; i++) {
        var p = level[i]
        console.log(p)
        var b = Block(game, p)
        arr.push(b)
    }
    return arr
}

var blocks = []
var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event) {
        var k = event.key
        if(k === 'p') {
            // 暂停
            window.paused = !window.paused
        } else if('12334567'.includes(k)) {
            // 关卡
            blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        console.log(input.value)
        window.fps = Number(input.value)
    })

}


var __main = function() {

    var images = {
        ball: 'ball.png',
        block: 'block.png',
        paddle: 'paddle.png',
    }

    var game = GuaGame(60, images, function(g) {
        // 绘制图片
        var paddle = Paddle(game)
        var ball = Ball(game)

        var score = 0

        blocks = loadLevel(game, 1)

        // var paused = false
        game.registerAction('a', function() {
            paddle.moveLeft()

        })
        game.registerAction('d', function() {
            paddle.moveRight()

        })
        game.registerAction('f', function() {
            ball.fire()
        })

        game.update = function() {
            if(window.paused) {
                return
            }

            ball.move()

            // 判断挡板与球相撞
            if(paddle.collide(ball)) {
                ball.bounce()
            }

            // 判断球与 blocks 相撞
            for(var i = 0; i < blocks.length; i++) {
                var block = blocks[i]
                if(block.collide(ball)) {
                    log('collide')
                    block.kill()
                    ball.bounce()
                    // 更新分数
                    score += 100
                    log('score', score)
                }
            }

        }

        game.draw = function() {
            game.drawImage(paddle)
            game.drawImage(ball)
            for(var i = 0; i < blocks.length; i++) {
                var block = blocks[i]
                if(block.alive) {
                    game.drawImage(block)
                }
            }

            // draw labels
            game.context.fillText(`分数；${score}`, 10, 290)
        }
    })

    enableDebugMode(game, true)


}

__main()