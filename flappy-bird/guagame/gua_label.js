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
        var score = this.score.toFixed(1)
        this.context.fillStyle = 'white'
        this.context.fillText(`TIME： ${score}`, 10, 20)
    }

    update() {
        this.score = this.scene.score
    }
}
