class Enemy extends GuaImage {
    constructor(game) {
        const type = randomBetween(0, 4)
        var name = `enemy${type}`
        super(game, name)

        this.setup()
    }

    setup() {
        this.speed = randomBetween(1, 3)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
        this.cooldown = 0
        this.bullets = []
    }

    fire() {
        if(this.cooldown === 0) {
            this.cooldown = 120
            var b = Bullet.new(this.game)

            var x = this.x + this.w / 2
            var y = this.y
            b.x = x
            b.y = y
            b.speed = -5

            this.scene.addElement(b)
            // this.bullets.push(b)
            this.scene.enemyBullets.push(b)
        }
    }
    update() {
        this.y += this.speed

        if(this.y > 600) {
            this.setup()
        }
        if(this.cooldown > 0) {
            this.cooldown --
        }

        this.fire()
    }
}
