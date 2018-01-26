class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        var game = this.game
        this.bg = GuaImage.new(game, 'sky')
        this.addElement(this.bg)

        game.registerAction('r', function(){
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }
    draw() {
        super.draw()
        // draw labels
        var ctx = this.game.context
        ctx.fillStyle = "orange";
        ctx.font = '25px serif';
        ctx.fillText('游戏结束', 130, 300)
        ctx.fillText('按 r 回到标题', 110, 350)

    }
}
