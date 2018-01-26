class Bullet extends GuaImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }
    setup() {
        this.speed = config.bullet_speed
    }
    update() {
        this.y -= this.speed
    }

    collide(enemy) {
        var a = this
        var b = enemy
        if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
            if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
                return true
            }
        }
        return false
    }
}

var aInb = function(x, x1, x2) {
    return x >= x1 && x <= x2
}