
class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        this.grounds = []
        this.skipCount = 5
        this.score = 0
        const game = this.game

        // 背景
        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)

        // pipes
        this.pipe = Pipes.new(game, 'pipe')
        this.addElement(this.pipe)

        // 地面
        this.addGrounds()

        // bird
        var b = GuaAnimation.new(game)
        b.x = 180
        b.y = 200
        this.bird = b
        this.addElement(b)

        this.setupInputs()

        this.label = GuaLabel.new(game)
        this.label.scene = this
        this.addElement(this.label)

    }

    addGrounds() {
        for(var i = 0; i < 30; i++) {
            var g = GuaImage.new(this.game, 'ground')
            g.x = i * 19
            g.y = 540
            this.addElement(g)
            this.grounds.push(g)

        }
    }

    setupInputs() {
        var self = this
        var b = this.bird
        self.game.registerAction('a', (status) => {
            b.move(-2, status)
        })
        self.game.registerAction('d', (status) => {
            b.move(2, status)
        })
        self.game.registerAction('j', (status) => {
            b.jump()
        })
    }

    update() {
        super.update()

        // 更新时间
        this.score += 0.1

        var bird = this.bird
        var game = this.game
        this.pipe.pipes.forEach(function(pipe, index) {

            if(bird.collide(pipe)) {
                // alert('colidde')
                console.log('collide', bird.collide(pipe))
                var s = new SceneEnd(game)
                game.replaceScene(s)

            }
        })

        // 地面移动
        this.skipCount--
        var offset = -5
        if(this.skipCount == 0) {
            this.skipCount = 4
            offset = 15
        }
        for(var i = 0; i < 30; i++) {
            var g = this.grounds[i]
            g.x += offset
        }
    }
}