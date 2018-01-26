class GuaLabel {
    constructor(game) {
        this.game = game
        this.score = 0
        // this.text = `分数： ${this.score}`
        this.context = game.context
    }
    static new (game, text) {
        return new this(game, text)
    }


    draw() {
        var score = this.score
        this.context.fillStyle = 'orange'
        this.context.fillText(`分数： ${score}`, 10, 580)
    }

    update() {
        this.score = this.scene.score
    }
}
