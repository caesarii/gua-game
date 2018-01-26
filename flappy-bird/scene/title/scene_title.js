class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        var game = this.game
        this.bg = GuaImage.new(game, 'bg')
        this.addElement(this.bg)

        game.registerAction('k', function(){
            var s = new Scene(game)
            game.replaceScene(s)
        })
    }
    draw() {
        super.draw()
        // draw labels
        var ctx = this.game.context
        ctx.fillStyle = "orange";
        ctx.font = '25px serif';
        ctx.fillText('按 k 开始游戏', 120, 300)
    }

}


