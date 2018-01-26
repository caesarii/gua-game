class GuaParticleSystem {
    constructor(game, pos) {
        this.game = game
        this.setup(pos)
    }
    static new (game, pos) {
        return new this(game, pos)
    }

    setup(pos) {
        this.duration = 10
        this.x = pos[0]
        this.y = pos[1]
        this.numberOfParicles = 20
        this.particles = []
    }

    update() {
        this.duration--

        // 添加 spark
        if(this.particles.length < this.numberOfParicles) {
            var p = GuaParticle.new(this.game)
            // 初始化坐标
            var s = 2
            var vx = randomBetween(-s, s)
            var vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }


        // 更新 sparks
        for(var p of this.particles) {
            p.update()
        }

        //  删除死去的
        this.particles = this.particles.filter(p => p.life > 0)

    }


    draw() {
        if(this.duration < 0) {
            return
        }
        for(var p of this.particles) {
            p.draw()
        }

    }
}