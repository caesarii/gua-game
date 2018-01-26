var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            // blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function() {
    var images = {
        bullet: 'img/bullet.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
        sky: 'img/sky.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy4: 'img/enemy4.png',
        fire: 'img/fire.png',
        idle1: 'img/idle/idle1.png',
        idle2: 'img/idle/idle2.png',
        idle3: 'img/idle/idle3.png',
        run1: 'img/run/run1.png',
        run2: 'img/run/run2.png',
        run3: 'img/run/run3.png',
        run4: 'img/run/run4.png',
        run5: 'img/run/run5.png',
        run6: 'img/run/run6.png',
        run7: 'img/run/run7.png',
        run8: 'img/run/run8.png',
        run9: 'img/run/run1.png',
        run10: 'img/run/run2.png',


    }
    var game = GuaGame.instance(30, images, function(g){
        // var s = new Scene(g)
        var s = new SceneTitle(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
