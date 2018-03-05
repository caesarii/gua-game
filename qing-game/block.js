var Block = function(game, position) {
    // position [0, 0]
    log(p)
    var p = position
    var block = game.imageByName('block')
    block.x = p[0]
    block.y = p[1]
    block.alive = true
    block.lifes = p[2] || 1
    // var block = {
    //     image: image,
    //     x: p[0],
    //     y: p[1],
    //     w: 50,
    //     h: 20,
    //     alive: true,
    //     lifes: p[2] || 1
    // }
    block.kill = function() {
        this.lifes--
        if(this.lifes < 1) {
            this.alive = false
        }
    }
    block.collide = function(ball) {
        return block.alive && (rectIntersects(ball, block) || rectIntersects(block, ball))
    }
    return block
}