class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello from gua')
        this.addElement(label)

        var w = GuaAnimation.new(game)
        w.x = 100
        w.y = 200
        this.w = w
        this.addElement(w)

        this.setupInputs()
    }

    setupInputs() {
        var self = this
        self.game.registerAction('a', (status) => {
            self.w.move(-2, status)
        })
        self.game.registerAction('d', (status) => {
            self.w.move(2, status)
        })
    }


}


